import { SkillsProps } from './skills-props/skills-props'
import './skills.css'

export const Skills = () => {
    return (
        <div className="container-skills">
            <div className="title">
                <div>Skills</div>
            </div>
            <div className="skills-info">
                <div className="skills-info-box-name"><SkillsProps skill="HTML" nivel="Avançado" /></div>
                <div className="skills-info-box-name"><SkillsProps skill="CSS" nivel="Avançado" /></div>
            </div>
            <div className="skills-info">
                <div className="skills-info-box-name"><SkillsProps skill="JavaScript" nivel="intermediario" /></div>
                <div className="skills-info-box-name"><SkillsProps skill="React" nivel="Intermediario" /></div>
            </div>
            <div className="skills-info">
                <div className="skills-info-box-name"><SkillsProps skill="C" nivel="Basico"/></div>
                <div className="skills-info-box-name"><SkillsProps skill="C#" nivel="Basico" /></div>
            </div>
        </div>
    )
}