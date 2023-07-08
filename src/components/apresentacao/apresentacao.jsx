import "./apresentacao.css"

export const Apresentacao = () => {
    return (
        <div className="container-apresentacao">
            <div className="img-pessoal">
                <img src="#" alt="Minha foto"/>
            </div>
            <div className="info">
                <div className="info-name">Leonardo de Paula Paiva</div>
                <div className="info-front">Front-end React.Js Developer</div>
                <div className="info-icons"></div>
                <div className="info-email">leopaiva2016@hotmail.com</div>
            </div>
        </div>
    )
}