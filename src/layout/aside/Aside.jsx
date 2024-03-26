import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import "./Aside.css"

function Aside() {
  return (
    <aside className="aside">
    <div className="wrap-a">
      <div className="wrap-i">
      <img className="i-style" src={icon1} alt="icon1" />
      <img className="i-style" src={icon2} alt="icon2" />
      <img className="i-style" src={icon3} alt="icon3" />
      <img className="i-style" src={icon4} alt="icon4" />
      </div>
      
      <span className="copy">Copiryght, SportSee 2020</span>
 

      </div>
    </aside>
  );
}

export default Aside
