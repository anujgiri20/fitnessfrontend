import logo from './logo.svg';
import './App.css';
import './flipcard.css'


function Flip_card() {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="img_avatar.png" className="Avatar"  />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
export default Flip_card;
