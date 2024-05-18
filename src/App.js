import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('student@student.agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length > 29) {
        message = <div>Podany adres jest zbyt długi</div>;
    } else if (email.length < 20) {
        message = <div>Podany adres jest zbyt krótki</div>;
    } else {
        message = <div>Podany adres jest prawidłowy</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to: {email.toLocaleUpperCase()}</h2>
            <h3>{message}</h3>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
