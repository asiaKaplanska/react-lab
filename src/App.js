import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
    const [authenticatedUserName, setAuthenticatedUserName] = useState('')

    function logout() {
        setAuthenticatedUserName('');
    }

    let content;
    if (authenticatedUserName) {
        content = <div>
            <h2>Twój email to: {authenticatedUserName}</h2>
            <button onClick={logout}>
                Wyloguj się
            </button>
        </div>
    } else {
        content = <div>
            <LoginForm onLogin={(email) => setAuthenticatedUserName(email)}
                       buttonLabel="Zaloguj Się"/>
        </div>
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
