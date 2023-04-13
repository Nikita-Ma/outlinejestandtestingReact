import logo from './logo.svg';
import './App.css';
import {useState} from "react";
export function replaceCameWidth(cN) {
    return cN.replace(/\B(A-Z)\B/g, ' $1')
}
export function replaceCameWidthDouble(q) {
    return q
}

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
