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

function Cards() {
    return (
        <>
        {questionsJS.map((item, index) => (
            <div className="card" key ={index}>
                <Questions number={item.number} question={item.question} answer={item.answer} />
            </div>
        ))
        }
        </>
    );
}

function Questions(props) {
    return (
        <>
            <div className="cardFace">
                <h3>
                Pergunta {props.number}
                </h3>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            <div className="cardBack">
                <p>
                    {props.question}
                </p>
            </div>

            <div className="cardAnswer">
                <p>
                    {props.answer}
                </p>
                <div className="buttons">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </div>
        </>
    );
}