import Duck from './components/Duck';
import ClosedDuck from './components/ClosedDuck';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [click, setClick] = useState(false);
    const [quacks, setQuacks] = useState();

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_GET_QUACKS)
            .then((response) => {
                setQuacks(response.data[0].count);
            })
            .catch((error) => {
                console.error(error);
            });
    });

    function patchQuack() {
        axios
            .patch(import.meta.env.VITE_PATCH_QUACKS, { count: quacks })
            .then(() => {
                console.log('QUACK!');
            })
            .catch((error) => {
                console.error(error);
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
            <h1>You click and it quacks!</h1>
            <button onClick={handleClick} className="button">
                {click ? <Duck /> : <ClosedDuck />}
            </button>
            <div className="quack-count">Quacks count: {quacks}</div>
        </div>
    );
}

export default App;
