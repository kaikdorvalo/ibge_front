import { NameRanking } from "../models/name-ranking";
import { Period } from "../models/period";

export function adaptRanking(response: any): NameRanking {
    const data: any = response.data;
    const periods: Period[] = []
    for (let item of data[0].res) {
        const period = item.periodo.replace(/[\[\]\s]/g, '');
        const periodArray = period.split(",")
        if (periodArray.length === 2) {
            const startDecade = periodArray[0]
            let endDecade = periodArray[1]

            periods.push(new Period(startDecade, item.frequencia, endDecade))
        }
    }

    return new NameRanking(data[0].nome, periods);
}