import "./Header.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />

        <nav>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglages</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
