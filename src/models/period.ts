export class Period {
    public startDecade: number
    public endDecade: number
    public frequency: number

    constructor(startDecade: number, frequency: number, endDecade: number) {
        this.startDecade = startDecade
        this.endDecade = endDecade
        this.frequency = frequency
    }
}