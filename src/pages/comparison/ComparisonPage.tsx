import { ImageForms } from "../../components/ImageForms/ImageForms"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import ComparisonImage from '../../assets/images/comparison.png'
import { SearchInput } from "../../components/TextInput/SearchInput"
import { useEffect, useState, type ChangeEvent } from "react"
import { ActionButton } from "../../components/ActionButton/ActionButton"
import { useBackApi } from "../../hooks/useBackApi"
import { NameComparison } from "../../models/name-comparison"
import { Name } from "../../models/name"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { Paper, Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid' // <- UUID v4 importado corretamente

const colors = [
    '#8884d8', '#82ca9d', '#ff7300', '#ff6f91',
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
];

interface ChartDataItem {
    decade: string;
    [key: string]: number | string;
}

export const ComparisonPage = () => {
    const backApi = useBackApi();

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [nameComparison, setNameComparison] = useState<NameComparison[] | null>(null);
    const [chartData, setChartData] = useState<ChartDataItem[]>([]);
    const [allNames, setAllNames] = useState<string[]>([]);

    function handleSearchInput(event: ChangeEvent<HTMLInputElement>, setFunction: (value: string) => void) {
        setFunction(event.target.value.trim());
    }

    async function compareNames() {
        if (name1 && name2) {
            try {
                const response = await backApi.getNomeComparison(name1, name2);
                const formatted = response.data.map((el: any) => new NameComparison(
                    el.decada,
                    [
                        new Name(el.nome1.nome, el.nome1.frequencia),
                        new Name(el.nome2.nome, el.nome2.frequencia)
                    ]
                ));
                if (formatted.length > 0) {
                    setNameComparison(formatted);
                }
            } catch (error) {
                console.error("Erro ao comparar nomes:", error);
            }
        }
    }

    useEffect(() => {
        if (!nameComparison) return;

        const nameSet = new Set<string>();
        nameComparison.forEach(entry =>
            entry.name.forEach(n => nameSet.add(n.name.toLowerCase()))
        );
        const allNames = Array.from(nameSet);
        setAllNames(allNames);

        const chart = nameComparison.map(entry => {
            const item: ChartDataItem = {
                decade: entry.decade
            };
            entry.name.forEach(n => {
                const key = n.name.toLowerCase();
                const value = parseInt(n.frequency, 10);
                item[key] = isNaN(value) ? 0 : value;
            });
            return item;
        });

        setChartData(chart);
    }, [nameComparison]);

    return (
        <PageLayout title="Comparação de nomes ao longo do tempo">
            <div className="w-full h-full flex justify-center items-center">
                {!nameComparison ? (
                    <ImageForms image={ComparisonImage}>
                        <div className="w-full h-full flex flex-col gap-3 text-black">
                            <SearchInput
                                id="search-name-1"
                                label="Digite o 1° nome"
                                placeHolder="Busque por um nome"
                                setValue={(e) => handleSearchInput(e, setName1)}
                                value={name1}
                            />
                            <SearchInput
                                id="search-name-2"
                                label="Digite o 2° nome"
                                placeHolder="Busque por um nome"
                                setValue={(e) => handleSearchInput(e, setName2)}
                                value={name2}
                            />
                            <div className="w-full h-10 mt-10">
                                <ActionButton
                                    action={compareNames}
                                    text="Comparar"
                                    fill={true}
                                />
                            </div>
                        </div>
                    </ImageForms>
                ) : (
                    <div className="w-full flex flex-col">
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <Box sx={{ height: 400 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="decade" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        {allNames.map((name, index) => (
                                            <Line
                                                key={uuidv4()}
                                                type="monotone"
                                                dataKey={name}
                                                stroke={colors[index % colors.length]}
                                                dot={{ r: 3 }}
                                                activeDot={{ r: 5 }}
                                            />
                                        ))}
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>

                        <div className="mt-20 flex justify-center">
                            <div className="h-10 w-64">
                                <ActionButton
                                    action={() => {
                                        setNameComparison(null)
                                    }}
                                    text="Realizar nova consulta"
                                    fill={false}
                                />
                            </div>
                        </div>
                    </div>


                )}
            </div>
        </PageLayout>
    );
}
