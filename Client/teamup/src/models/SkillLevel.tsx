import { LevelEnum } from "./LevelEnum";
import { Skill } from "./Skill";

export interface SkillLevel{
    id: number;
    skill: Skill;
    level: LevelEnum;
}