import type { Name } from "./name"

export class NameComparison {
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