import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [buttonColor, setButtonColor] = useState('red');
    const newBtnColor = buttonColor === 'red' ? 'blue' : 'red'
    return (
        <div>
            <button style={{backgroundColor: buttonColor}}
                    onClick={() => setButtonColor(newBtnColor)}>
                Change
                to {newBtnColor}</button>
            <input type="checkbox"/>
        </div>
    );
}

export default App;
