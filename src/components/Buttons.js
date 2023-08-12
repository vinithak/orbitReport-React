import "./styling.css";
import satData from "./satData";

const Buttons = (props) => {

  let {filterByType, setSat, displaySats} = props;


  const handleClick = () => {
    setSat(satData);
  };

  return (
    <div className = "flex-container">
      {
        displaySats.map((sat, id) => {
          return(
          <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit</button>
          );
        })
      }

      <button onClick={handleClick}>All Orbits</button>
    </div>
  );
};

export default Buttons;