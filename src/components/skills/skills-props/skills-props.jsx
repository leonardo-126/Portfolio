import './skills-props.css'

export const SkillsProps = (props) => {
    return (
        <div className='skills-info-box'>
            <h1>{props.skill}</h1>
            <div className="skills-info-nivel">
                <span>{props.nivel}</span>
            </div>
        </div>
    )
}