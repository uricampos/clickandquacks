import closedDuck from '/duck_olho-fechado.png';
import './duck.css';

function ClosedDuck() {
  return (
    <div>

        <img src={closedDuck} alt="closed eye duck" className='duck'/>
    </div>
  )
}

export default ClosedDuck