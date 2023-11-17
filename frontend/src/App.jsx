import Duck from './components/Duck';
import ClosedDuck from './components/ClosedDuck';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

async function getQuacks(setQuacks) {
    // await axios
    //     .get(import.meta.env.VITE_GET_QUACKS)
    //     .then((response) => {
    //         setQuacks(response.data[0].count);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    try {
        const res = await axios.get(import.meta.env.VITE_GET_QUACKS);
        setQuacks(res.data[0].count);
    } catch (error) {
        console.log(error);
    }
}

function patchQuack(quacks) {
    axios
        .patch(import.meta.env.VITE_PATCH_QUACKS, { count: quacks })
        .then(() => {
            console.log('QUACK!');
        })
        .catch((error) => {
            console.error(error);
        });
}

function handleClick(setClick, quacks) {
    patchQuack(quacks);
    setClick(true);
    setTimeout(() => {
        setClick(false);
    }, 500);
}

// eslint-disable-next-line no-unused-vars
let pollingTimeout;

async function pollingQuacks(setQuacks) {
    await getQuacks(setQuacks);

    pollingTimeout = setTimeout(() => pollingQuacks(setQuacks), 1000);
}

function App() {
    const [click, setClick] = useState(false);
    const [quacks, setQuacks] = useState([]);

    useEffect(() => {
        pollingQuacks(setQuacks);

        return () => {
            clearInterval(pollingQuacks);
        }
    }, [])

    return (
        <div className="container">
            <h1>You click and it quacks!</h1>
            <button
                onClick={async() => {
                    handleClick(setClick, quacks);
                }}
                className="button"
            >
                {click ? <Duck /> : <ClosedDuck />}
            </button>
            <div className="quack-count">Quacks count: {quacks}</div>
        </div>
    );
}

export default App;
