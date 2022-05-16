import "./assets/components/style.css";
import Home from "./Home";
import Flash from "./Flash";
import "./assets/components/style.css";

export default function App() {
    const [page, setPage] = React.useState("home");

    function startRecall(state) {
        setPage(state);
    }

    switch (page) {
        case "home":
            return (
                <Home startRecall={() => startRecall("recall")} />
            );
        case "recall":
            return (
                <Flash />
            );

    }
}