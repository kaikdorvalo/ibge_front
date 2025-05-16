import { useState, type ChangeEvent } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { SearchInput } from "../../components/TextInput/SearchInput"
import { ActionButton } from "../../components/ActionButton/ActionButton";
import AchieveIMG from "../../assets/images/achieve.png";
import { DateInput } from "../../components/DateInput/DateInput";
import { ImageForms } from "../../components/ImageForms/ImageForms";

export const HomePage = () => {
    const [searchName, setSearchName] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("2000-05-03");
    const [endDate, setEndDate] = useState<string>("2010-05-03");


    function handleSearchNameInput(event: ChangeEvent<HTMLInputElement>) {
        setSearchName(event.target.value);
    }

    function handleStartDateInput(event: ChangeEvent<HTMLInputElement>) {
        setStartDate(event.target.value)
    }

    function handleEndDateInput(event: ChangeEvent<HTMLInputElement>) {
        setEndDate(event.target.value)
    }

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
                                <DateInput
                                    id="start-date"
                                    label="Data inicial"
                                    value={startDate}
                                    setValue={handleStartDateInput}
                                />
                            </div>

                            <div>
                                <DateInput
                                    id="end-date"
                                    label="Data final"
                                    value={endDate}
                                    setValue={handleEndDateInput}
                                />
                            </div>

                            <div className="w-full h-10">
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