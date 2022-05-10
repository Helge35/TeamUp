import { LevelEnum } from "./LevelEnum";
import { OfficeStatusEnum } from "./OfficeStatusEnum";
import { Project } from "./Project";
import { SkillLevel } from "./SkillLevel";

export class Member {
    id?: number;
    firstName: string = "";
    lastName: string = "";
    photoUrl: string="";
    email: string = "";
    phone: string = "";
    startAt: Date = new Date();
    officeStatus:OfficeStatusEnum = OfficeStatusEnum.Ready;
    projects: Project[] = [];
    commonLevel: LevelEnum = LevelEnum.None;
    skillLevels: SkillLevel[] = [];
}