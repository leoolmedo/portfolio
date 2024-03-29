export interface Person{
    id:number;
    names:String;
    lastNames:String;
    phone:String;
    cellPhone:String;
    email:String;
    workEmail:String;
    address:String;
    city:String;
    state:String;
    country:String;
    user:String;
    password:String;
    bornDate:Date;
    about:String;
    profilePicture:String;
}

export interface Education{
    id: number;
    institute:String;
    career:String;
    certificate:String;
    certLink:String;
    startDate:Date;
    endDate:Date;
    webPage:String;
    logo:String;
    place:String;
}

export interface Skill{
    id: number;
    ratio: number;
    name: string;
    logo: string;
    link: string;
    kind: boolean; //true: hardSkill false: SoftSkill
}

export interface Jobs{
    id: number;
    company: String;
    role: String;
    activities: String;
    reference: String;
    webPage: String;
    logo: String;
    startDate: Date;
    endDate: Date;
    place:String;

}