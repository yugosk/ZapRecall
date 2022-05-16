import React from "react";

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
    return (
        <>
        <header>
            <img src="../src/assets/img/logo-pequeno.png" alt="" />
            <h1>
            ZapRecall
            </h1>
        </header>
        <div className="container flashcards">
            <Cards />
        </div>
        <footer>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
        </>
    );
}

function Cards() {
    questionsJS.sort(comparador);
    for (let i=0; i<questionsJS.length; i++) {
        questionsJS[i].number = (i+1);
    }

    const [display, setDisplay] = React.useState("card");

    function displayQuestion() {
        setDisplay("cardText");
    }

    function displayAnswer() {
        setDisplay("cardAnswer");
    }

    return (
        <>
        {questionsJS.map((item, index) => (
            <CardContent state={display} number={item.number} displayQuestion={displayQuestion} displayAnswer={displayAnswer} question={item.question} answer={item.answer} key={index} />
        ))
        }
        </>
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
                        <img src="../src/assets/img/setinha.png" alt="" onClick={props.displayAnswer} />
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
                        <button className="buttonRed">Não lembrei</button>
                        <button className="buttonYellow">Quase não lembrei</button>
                        <button className="buttonGreen">Zap!</button>
                    </div>
                </div>
            );
        case "AnsweredCorrect":
            return (
                <div className="card" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="play-outline" onClick={props.displayQuestion}></ion-icon>
                </div>      
            );
        case "AnsweredWrong":
            return (
                <div className="card" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="play-outline" onClick={props.displayQuestion}></ion-icon>
                </div>      
            );
        case "AnsweredAlmost":
            return (
                <div className="card" key={props.key}>
                    <h2>Pergunta {props.number}</h2>
                    <ion-icon name="close-circle"></ion-icon>
                    <ion-icon name="play-outline" onClick={props.displayQuestion}></ion-icon>
                </div>      
            );
    
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}