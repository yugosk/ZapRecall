import logotipo from "./assets/img/logo.png"

export default function Home(props) {
    return (
        <div className="container home">
            <div className="logo">
            <img src={logotipo} />
            <h1>ZapRecall</h1>
            </div>
            <button onClick={props.startRecall}>Iniciar Recall!</button>
        </div>
    );
}