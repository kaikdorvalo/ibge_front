import type { Name } from "./name"

export class DecadeRanking {
    decade: string
    name: Name[]

    constructor(
        decade: string,
        name: Name[]
    ) {
        this.decade = decade
        this.name = name
    }
}