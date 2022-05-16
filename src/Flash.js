import React from "react";
import logoPequeno from "./assets/img/logo-pequeno.png";
import setinha from "./assets/img/setinha.png"
import sad from "./assets/img/sad.png"
import party from "./assets/img/party.png"

const questionsJS = [
    {
        number: 1,
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        number: 2,
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        number: 3,
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"
    },
    {
        number: 4,
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        number: 5,
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        number: 6,
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        number: 7,
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        number: 8,
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
]

export default function Flash() {
    const [answers, setAnswers] = React.useState([]);
    function addAnswer(a) {
        const newAnswers = [...answers, a]
        setAnswers(newAnswers);
    }
    return (
        <>
        <header>
            <img src={logoPequeno} alt="" />
            <h1>
            ZapRecall
            </h1>
        </header>
        <div className="container flashcards">
            <Cards addAnswer={addAnswer} />
        </div>
        <Footer count={answers.length} answers={answers} />
        </>
    );

}

function Footer(props) {
    if (props.count < 8) {
        return (
            <>
            <footer>
                <p>{props.count}/8 CONCLUÍDOS</p>
                <div className="icons">
                    {(props.answers).map((item, index) => (
                        <div className={item} key={index}>
                            <ion-icon name={item}></ion-icon>
                        </div> 
                    )
                    )}
                </div>
            </footer>
            </>
        );
    } else {
        if ((props.answers).includes("close-circle")) {
            return (
                <>
                <footer>
                    <div className="resultado">
                        <div className="imagemResultado">
                        <img src={sad} />
                        <h3>Putz...</h3>
                        </div>
                        <p>Ainda faltam alguns... <br/>Mas não desanime!</p>
                    </div>
                    <p>{props.count}/8 CONCLUÍDOS</p>
                    <div className="icons">
                        {(props.answers).map((item, index) => (
                            <div className={item} key={index}>
                                <ion-icon name={item}></ion-icon>
                            </div> 
                        )
                        )}
                    </div>
                </footer>
                </>
            ); 
        } else {
            return (
                <>
                <footer>
                    <div className="resultado">
                    <div className="imagemResultado">
                        <img src={party} />
                        <h3>Parabéns!</h3>
                    </div>
                        <p>Você não esqueceu de <br/>nenhum flashcard!</p>
                    </div>
                    <p>{props.count}/8 CONCLUÍDOS</p>
                    <div className="icons">
                        {(props.answers).map((item, index) => (
                            <div className={item} key={index}>
                                <ion-icon name={item}></ion-icon>
                            </div> 
                        )
                        )}
                    </div>
                </footer>
                </>
            ); 
        }
}
}

function Cards(props) {
    questionsJS.sort(comparador);
    for (let i=0; i<questionsJS.length; i++) {
        questionsJS[i].number = (i+1);
    }

    return (
        <>
        {questionsJS.map((item, index) => (
            <FlashCard addAnswer={props.addAnswer} number={item.number} question={item.question} answer={item.answer} key={index} />
        ))
        }
        </>
    );
}

function FlashCard(props) {
    const [display, setDisplay] = React.useState("card");

    function displayQuestion() {
        setDisplay("cardText");
    }

    function displayAnswer() {
        setDisplay("cardAnswer");
    }

    function answerRed() {
        setDisplay("answeredWrong");
        props.addAnswer("close-circle");
    }

    function answerYellow() {
        setDisplay("answeredAlmost");
        props.addAnswer("help-circle");
    }

    function answerGreen() {
        setDisplay("answeredCorrect");
        props.addAnswer("checkmark-circle");
    }
    
    return (
        <CardContent state={display} number={props.number} displayQuestion={displayQuestion} displayAnswer={displayAnswer} question={props.question} answer={props.answer} key={props.key}
        answerRed={answerRed} answerYellow={answerYellow} answerGreen={answerGreen} />
    );
}

function CardContent(props) {
    switch(props.state) {
        case "card":
            return (
                <div className="card" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="play-outline" onClick={props.displayQuestion}></ion-icon>
                </div>      
            );
        case "cardText":
            return (
                <div className="cardQuestion" key={props.key}>
                    <div className="textQuestion">
                        <p>{props.question}</p>
                    </div>
                    <div className="textImage">
                        <img src={setinha} alt="" onClick={props.displayAnswer} />
                    </div>
                </div>
            );
        case "cardAnswer":
            return (
                <div className="cardAnswer" key={props.key}>
                    <div className="textAnswer">
                        <p>{props.answer}</p>
                    </div>
                    <div class="buttonsAnswer">
                        <button className="buttonRed" onClick={props.answerRed}>Não lembrei</button>
                        <button className="buttonYellow" onClick={props.answerYellow}>Quase não lembrei</button>
                        <button className="buttonGreen" onClick={props.answerGreen}>Zap!</button>
                    </div>
                </div>
            );
        case "answeredCorrect":
            return (
                <div className="card cardCorrect" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>      
            );
        case "answeredWrong":
            return (
                <div className="card cardWrong" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="close-circle"></ion-icon>
                </div>      
            );
        case "answeredAlmost":
            return (
                <div className="card cardAlmost" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="help-circle"></ion-icon>
                </div>      
            );
    
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}