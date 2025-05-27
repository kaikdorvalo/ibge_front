import { ImageForms } from "../../components/ImageForms/ImageForms"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import LocationImage from '../../assets/images/location.png'
import { SearchInput } from "../../components/TextInput/SearchInput"
import { useEffect, useState, type ChangeEvent } from "react"
import { useUFApi } from "../../hooks/useUFApi"
import type { SelectValue } from "../../models/select-value"
import { ActionButton } from "../../components/ActionButton/ActionButton"
import { useCityApi } from "../../hooks/useCityApi"

export const RankingLocationPage = () => {

    const ufsApi = useUFApi()
    const cityApi = useCityApi()

    const [searchName, setSearchName] = useState<string>('');
    const [ufs, setUfs] = useState<SelectValue[]>([]);
    const [city, setCity] = useState<SelectValue[]>([]);

    function handleSearchNameInput(event: ChangeEvent<HTMLInputElement>) {
        setSearchName(event.target.value);
    }

    async function loadUfs() {
        const result = await ufsApi.getUFS();
        const data = result.data
        console.log(data)
    }

    async function loadCity() {
        const result = await cityApi.getCity();
        const data = result.data
        console.log(data)
    }

    useEffect(() => {
        // loadUfs()
        loadCity()
    }, [])

    return (
        <PageLayout
            title="Ranking por localidade"
        >
            <div
                className="w-full h-full flex justify-center items-center"
            >
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
                                action={() => { }}
                                text="Buscar"
                                fill={true}
                            />
                        </div>
                    </div>
                </ImageForms>
            </div>
        </PageLayout>
    )
}