export class Risk {
    constructor(
        public _id: number,
        public owner: string,
        public dateRaised: Date,
        public description: string,
        public category: string,
        public impact: number,
        public probability: number,
        public rating: number,
        public riskStrategy: string,
        public responseDate: Date,
        public riskResponse: string,
        public riskNotes: string[],
        public inherentImpact: number,
        public inherentProbability: number,
        public inherentRating: number
    ) { }

}


