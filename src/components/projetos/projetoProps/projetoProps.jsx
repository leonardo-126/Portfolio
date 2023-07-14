import './projetoProps.css'

export const ProjetoProps = (props) => {
    return (
        <div className='projetoProps-container'>
            <div className='projetoProps-container-item'>
                <img src={props.imgFundo} alt={props.altFundo}/>
                <a href={props.link} target='_blank'>View</a>
            </div>
        </div>
    )
}