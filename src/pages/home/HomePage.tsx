import { useEffect, useState, type ChangeEvent } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { SearchInput } from "../../components/TextInput/SearchInput"
import { ActionButton } from "../../components/ActionButton/ActionButton";
import AchieveIMG from "../../assets/images/achieve.png";
import { ImageForms } from "../../components/ImageForms/ImageForms";
import { DecadeInput } from "../../components/DecadeInput/DecadeInput";
import { LineChart } from '@mui/x-charts';
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { useApi } from "../../hooks/useApi";
import { adaptRanking } from "../../adapters/rankingAdapter";
import type { Period } from "../../models/period";
import { NameRanking } from "../../models/name-ranking";

export const HomePage = () => {
    const [searchName, setSearchName] = useState<string>("");

    const [startDecade, setStartDecade] = useState<string>('1990');
    const [endDecade, setEndDecade] = useState<string>('2000');

    const [ranking, setRanking] = useState<NameRanking | null>(null);

    const api = useApi();

    function handleDecadeButton(action: string, value: string, setValue: (value: string) => void) {
        console.log(action)
        if (action === 'increment') {
            const numberValue = Number(value)
            console.log(numberValue + 10)
            if (numberValue + 10 <= 2100) {
                console.log("entrou")
                setValue((numberValue + 10).toString())
            }
        } else if (action === 'decrement') {
            const numberValue = Number(value)
            console.log(numberValue)
            if (numberValue - 10 >= 1900) {
                setValue((numberValue - 10).toString())
            }
        }
    }


    function handleSearchNameInput(event: ChangeEvent<HTMLInputElement>) {
        setSearchName(event.target.value);
    }

    async function searchRanking() {
        if (searchName.length !== 0) {
            const ranking = await api.getNameRnaking(searchName)
            const nameRanking = adaptRanking(ranking)

            nameRanking.periods = nameRanking.periods.filter((period: Period) => period.startDecade >= Number(startDecade) && period.endDecade <= Number(endDecade))
            setRanking(nameRanking)
        }
    }

    function getChartData(): number[] {
        if (ranking) {
            const frequencies: number[] = []
            frequencies.push(0)
            for (let period of ranking.periods) {
                frequencies.push(period.frequency)
            }

            return frequencies
        } else {
            return []
        }
    }

    function getChartPeriod(): number[] {
        if (ranking) {
            const periods: number[] = []
            for (let period of ranking.periods) {
                periods.push(period.startDecade)
            }

            console.log(ranking)
            periods.push(ranking.periods[ranking.periods.length - 1].endDecade);

            return periods
        } else {
            return []
        }
    }

    function getChartDatset() {
        const period = getChartPeriod()
        const frequency = getChartData()

        if (period.length !== 0 && frequency.length !== 0) {
            const array = []

            for (let i = 0; i < period.length; i++) {
                array.push({ x: period[i], y: frequency[i] });
            }

            return array;
        } else {
            return [{ x: 0, y: 0 }]
        }
    }

    useEffect(() => {
        console.log(getChartData())
        console.log(getChartPeriod())
    }, [ranking])

    return (
        <PageLayout title="Ranking de nomes por década">
            <div className="w-full h-full text-black">
                {
                    ranking === null ?
                        <div className="w-full h-full flex justify-center items-center">
                            <ImageForms image={AchieveIMG} >
                                <div className="w-full flex flex-col gap-5">
                                    <div className="w-full">
                                        <SearchInput
                                            id="search-ranking"
                                            label="Primeiro nome"
                                            placeHolder="Busque por um nome"
                                            setValue={handleSearchNameInput}
                                            value={searchName}
                                        ></SearchInput>
                                    </div>

                                    <div>
                                        {/* <DateInput
                                    id="start-date"
                                    label="Data inicial"
                                    value={startDate}
                                    setValue={handleStartDateInput}
                                /> */}

                                        <DecadeInput
                                            id="start-decade"
                                            label="Década inicial"
                                            value={startDecade}
                                            setValue={setStartDecade}
                                            buttonAction={handleDecadeButton}
                                        ></DecadeInput>
                                    </div>

                                    <div>
                                        <DecadeInput
                                            id="end-decade"
                                            label="Década final"
                                            value={endDecade}
                                            setValue={setEndDecade}
                                            buttonAction={handleDecadeButton}
                                        ></DecadeInput>
                                    </div>

                                    <div className="w-full h-10 mt-10">
                                        <ActionButton
                                            action={searchRanking}
                                            text="Buscar"
                                            fill={true}
                                        />
                                    </div>
                                </div>
                            </ImageForms>
                        </div>
                        :
                        <div
                            className="w-full"
                        >
                            <div className="flex flex-wrap sm:flex-nowrap gap-5">
                                <CardInfo
                                    label="Nome buscado"
                                    value="Kaik"
                                />
                                <CardInfo
                                    label="Média no período"
                                    value="5.000"
                                />
                            </div>

                            <div
                                className="w-full mt-10"
                            >
                                <LineChart
                                    dataset={getChartDatset()}
                                    xAxis={[{ dataKey: 'x', scaleType: 'band' }]}
                                    series={[{ dataKey: 'y' }]}
                                    height={300}
                                />
                            </div>

                            <div className="mt-20 flex justify-center">
                                <div className="h-10 w-64">
                                    <ActionButton
                                        action={() => {
                                            setRanking(null)
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