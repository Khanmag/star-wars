import { useState } from "react";
import PlanetIcon from "../../assets/icons/PlanetIcon";

const PlanetList = ({ planets }: { planets: string[] }) => {
  const [showItems, setShowItems] = useState(false)
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => { setShowItems(prev => !prev) }}
      >
        <PlanetIcon />
        <h5>PLANETS</h5>
      </div>
      {showItems && (
        <ul>
          {planets.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlanetList;
