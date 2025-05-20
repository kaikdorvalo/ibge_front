import type { Period } from "./period"

export class NameRanking {
    public name: string
    public periods: Period[]

    constructor(name: string, periods: Period[]) {
        this.name = name,
            this.periods = periods
    }
}