import duck from '/duck_olho-aberto.png';
import './duck.css';

function Duck() {
  return (
    <div>
        <img src={duck} alt="duck" className='duck'/>

    </div>
  )
}

export default Duck