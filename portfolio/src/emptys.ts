import { UsrPass } from "./app/interfaces";
import { Education, Jobs, Person, Skill} from "./interfaces";

export const PERSON:Person = {
    id:0,
    names:'',
    lastNames:'',
    phone:'',
    cellPhone:'',
    email:'',
    workEmail:'',
    address:'',
    city:'',
    state:'',
    country:'',
    user:'',
    password:'',
    bornDate: new Date(),
    about:'',
    profilePicture:''
   };

   export const EDUCATION:Education = {
       id: 0,
       institute: "",
       career: "",
       certificate: "",
       certLink: "",
       startDate: new Date() ,
       endDate: new Date(),
       webPage: "",
       logo: "",
       place: ""
   };

   export const SKILL:Skill = {
       id: 0,
       ratio: 0,
       name: "",
       logo: "undefined",
       link: "undefined",
       kind: false,
   };

   export const JOBS:Jobs ={
       id: 0,
       company: "undefined",
       role: "",
       activities: "",
       place: "",
       reference: "",
       webPage: "",
       logo: "",
       startDate: new Date(),
       endDate: new Date()
   };

   export const USRPASS:UsrPass ={
    hardUser: "",
    hardPass: ""
   } 