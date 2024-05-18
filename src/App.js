import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('student@student.agh.edu.pl');
    const [isAuthenticated, setAuthentication] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function logout() {
        setAuthentication(false);
        setEmail('');
    }

    let content;
    if (isAuthenticated) {
        content = <div>
            <h2>Twój email to: {email}</h2>
            <button onClick={logout}>
                Wyloguj się
            </button>
        </div>
    } else {
        content = <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={() => setAuthentication(true)}>
                Zaloguj się
            </button>
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
