import Duck from './components/Duck';
import ClosedDuck from './components/ClosedDuck';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [click, setClick] = useState(false);
    const [quacks, setQuacks] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/quacks').then((response) => {
            setQuacks(response.data[0].count);
        });
    });

    function patchQuack() {
        axios.patch('http://localhost:5000/quacks/6554da4e4d3c6879291982c6', {count: quacks}).then((response) => {
            console.log(response);
        });
    }

    function handleClick() {
        patchQuack();
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 1000);
    }

    return (
        <div className="container">
            <button onClick={handleClick} className="button">
                {click ? <Duck /> : <ClosedDuck />}
            </button>
            <div className="quack-count">Quack count: {quacks}</div>
        </div>
    );
}

export default App;
