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
    ) { }

}


