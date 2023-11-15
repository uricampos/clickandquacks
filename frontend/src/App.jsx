import Duck from './components/Duck';
import ClosedDuck from './components/ClosedDuck';
import { useState } from 'react';
// import { useQuack } from "./hooks/useQuack";
import './App.css';

function App() {
    // const {data, isLoading} = useQuack();
    const [click, setClick] = useState(false);
    const [quack, setQuack] = useState(0);

    function handleClick() {
        setClick(true);
        setQuack(quack + 1);
        setTimeout(() => {
            setClick(false);
        }, 1000);
    }

    return (
        <div className='container'>
            <button onClick={handleClick} className="button">
                {click ? <Duck /> : <ClosedDuck />}
            </button>
            <div className='quack-count'>Quack count: {quack}</div>
        </div>
    );
}

export default App;
