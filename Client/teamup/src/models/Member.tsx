import { Project } from "./Project";
import { SkillLevel } from "./SkillLevel";

export interface Member{
    id: number;
    firstName: string;
    lastName:string;
    email: string;
    age:number;
    startAt: Date;
    projects: Project[];
    skillLevels: SkillLevel[];
}