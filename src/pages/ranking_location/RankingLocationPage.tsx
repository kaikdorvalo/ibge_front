import { ImageForms } from "../../components/ImageForms/ImageForms"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import LocationImage from '../../assets/images/location.png'
import { SearchInput } from "../../components/TextInput/SearchInput"
import { useEffect, useState, type ChangeEvent } from "react"
import { useUFApi } from "../../hooks/useUFApi"
import { SelectValue } from "../../models/select-value"
import { ActionButton } from "../../components/ActionButton/ActionButton"
import { useCityApi } from "../../hooks/useCityApi"
import { useBackApi } from "../../hooks/useBackApi"
import { DecadeRanking } from "../../models/decade-ranking"
import { Name } from "../../models/name"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const RankingLocationPage = () => {

    const ufsApi = useUFApi()
    const cityApi = useCityApi()
    const backApi = useBackApi()

    const [searchName, setSearchName] = useState<string>('');
    const [ufs, setUfs] = useState<SelectValue[]>([]);
    const [city, setCity] = useState<SelectValue[]>([]);
    const [nameRanking, setNameRanking] = useState<DecadeRanking[] | null>(null);

    function handleSearchNameInput(event: ChangeEvent<HTMLInputElement>) {
        setSearchName(event.target.value);
    }

    async function loadUfs() {
        const result = await ufsApi.getUFS();
        const data = result.data

        const formatted: SelectValue[] = data.map((el: any) => new SelectValue(el.id, el.nome))
        setUfs(formatted)
    }

    async function loadCity() {
        const result = await cityApi.getCity();
        const data = result.data

        const formatted: SelectValue[] = data.map((el: any) => new SelectValue(el.id, el.nome))
        setCity(formatted)
    }

    async function getRanking() {
        let value: SelectValue | undefined
        value = ufs.find((el) => el.label === searchName);
        if (!value) {
            value = city.find((el) => el.label === searchName);
        }

        if (value) {
            const response = await backApi.getTopNames(Number(value.value));
            const ranking = response.data.map((el: any) => new DecadeRanking(el.decada, [new Name(el.top1.nome, el.top1.frequencia), new Name(el.top2.nome, el.top2.frequencia), new Name(el.top3.nome, el.top3.frequencia)]))
            console.log(response)
            setNameRanking(ranking)
        }

        return false
    }

    useEffect(() => {
        loadUfs()
        loadCity()
    }, [])

    return (
        <PageLayout
            title="Ranking por localidade"
        >
            <div
                className="w-full h-full flex justify-center items-center"
            >
                {
                    !nameRanking ?
                        <ImageForms
                            image={LocationImage}
                        >
                            <div
                                className="w-full h-full flex flex-col gap-3 text-black"
                            >
                                <div className="w-full">
                                    <SearchInput
                                        id="search-ranking"
                                        label="Digite um estado ou município"
                                        placeHolder="Busque por um nome"
                                        setValue={handleSearchNameInput}
                                        value={searchName}
                                    ></SearchInput>
                                </div>
                                <div className="w-full h-10 mt-10">
                                    <ActionButton
                                        action={getRanking}
                                        text="Buscar"
                                        fill={true}
                                    />
                                </div>
                            </div>
                        </ImageForms>
                        :
                        <div className="w-full">
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><strong>Década</strong></TableCell>
                                            <TableCell><strong>Nome</strong></TableCell>
                                            <TableCell><strong>Frequência</strong></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {nameRanking.map((row) => (
                                            row.name.map((name, index) => {
                                                if (name.name == null) name.name = '-'
                                                if (name.frequency === null) name.frequency = '0'
                                                return (
                                                    <TableRow key={`${row.decade}-${index}`}>
                                                        {index === 0 && <TableCell rowSpan={row.name.length}>{row.decade}</TableCell>}
                                                        <TableCell>{name.name}</TableCell>
                                                        <TableCell>{name.frequency.toLocaleString()}</TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <div className="mt-20 flex justify-center">
                                <div className="h-10 w-64">
                                    <ActionButton
                                        action={() => {
                                            setNameRanking(null)
                                            setSearchName("")
                                        }}
                                        text="Realizar nova consulta"
                                        fill={false}
                                    />
                                </div>
                            </div>
                        </div>
                }

            </div>
        </PageLayout>
    )
}