import "../styles/App.css";
import ToDoList from "./ToDoList";

function App() {
    return (
        <div className="app">
            <div className="content">
                <ToDoList></ToDoList>
            </div>
            <footer>Miroslav Magerov © 2024</footer>
        </div>
    );
}

export default App;
