import { useState, type ChangeEvent } from "react"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { SearchInput } from "../../components/TextInput/SearchInput"
import { ActionButton } from "../../components/ActionButton/ActionButton";
import AchieveIMG from "../../assets/images/achieve.png";
import { DateInput } from "../../components/DateInput/DateInput";

export const HomePage = () => {
    const [searchName, setSearchName] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("2000-05-03");
    const [endDate, setEndDate] = useState<string>("2000-05-03");


    function handleSearchNameInput(event: ChangeEvent<HTMLInputElement>) {
        setSearchName(event.target.value);
    }

    function handleStartDateInput(event: ChangeEvent<HTMLInputElement>) {
        setStartDate(event.target.value)
    }

    function handleEndDateInput(event: ChangeEvent<HTMLInputElement>) {
        setStartDate(event.target.value)
    }

    return (
        <PageLayout title="Ranking de nomes por década">
            <div className="w-full h-full text-black">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex gap-20">
                        <div className="w-[400px]">
                            <img className="" src={AchieveIMG} />
                        </div>

                        <div className="w-[400px] shrink-1 flex flex-col justify-center">
                            <div>
                                <h2 className="text-lg text-center text-black/60 mb-10">Busque um nome e a decada para ver o ranking</h2>
                            </div>

                            <div className="w-full flex flex-col gap-5">
                                <div className="w-full">
                                    <SearchInput
                                        placeHolder="Busque por um nome"
                                        setValue={handleSearchNameInput}
                                        value={searchName}
                                    ></SearchInput>
                                </div>

                                <div>
                                    <DateInput value={startDate} setValue={handleStartDateInput} />
                                </div>

                                <div>
                                    <DateInput value={endDate} setValue={handleEndDateInput} />
                                </div>

                                <div className="w-full h-10">
                                    <ActionButton action={() => { }} text="Buscar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}