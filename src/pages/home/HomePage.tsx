import { useCallback, useEffect, useState, type ChangeEvent } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { SearchInput } from "../../components/TextInput/SearchInput"
import { ActionButton } from "../../components/ActionButton/ActionButton";
import AchieveIMG from "../../assets/images/achieve.png";
import { DateInput } from "../../components/DateInput/DateInput";
import { ImageForms } from "../../components/ImageForms/ImageForms";
import { DecadeInput } from "../../components/DecadeInput/DecadeInput";

export const HomePage = () => {
    const [searchName, setSearchName] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("2000-05-03");
    const [endDate, setEndDate] = useState<string>("2010-05-03");

    const [startDecade, setStartDecade] = useState<string>('1990');
    const [endDecade, setEndDecade] = useState<string>('2000');

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

    function handleStartDateInput(event: ChangeEvent<HTMLInputElement>) {
        setStartDate(event.target.value)
    }

    function handleEndDateInput(event: ChangeEvent<HTMLInputElement>) {
        setEndDate(event.target.value)
    }

    useEffect(() => {
        console.log(startDecade)
    }, [startDecade])

    return (
        <PageLayout title="Ranking de nomes por década">
            <div className="w-full h-full text-black">
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
                                    action={() => { }}
                                    text="Buscar"
                                />
                            </div>
                        </div>
                    </ImageForms>
                </div>

            </div>
        </PageLayout>
    )
}