import Home from "./Home.js";
import Flash from "./Flash.js";
import React from "react";

export default function App() {
    const [page, setPage] = React.useState("home");

    function startRecall() {
        setPage("recall");
    }

    switch (page) {
        case "home":
            return (
                <Home startRecall={startRecall} />
            );
        case "recall":
            return (
                <Flash />
            );

    }
}