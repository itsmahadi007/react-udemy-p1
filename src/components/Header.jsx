import reactImg from "../assets/react-core-concepts.png";
import "../css/Header.css";
const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// below functionn is a component
export default function HeaderComponent() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      {/* to use a variable {} need that to use */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}