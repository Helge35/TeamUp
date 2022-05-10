import { Project } from "./Project";
import { SkillLevel } from "./SkillLevel";

export class Member{
    id?: number;
    firstName: string ="";
    lastName:string="";
    email: string="";
    phone:string="";
    startAt: Date= new Date();
    projects: Project[] =[];
    skillLevels: SkillLevel[]=[];
}