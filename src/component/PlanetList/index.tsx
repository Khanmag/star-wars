import { useState } from "react";
import PlanetIcon from "../../assets/icons/PlanetIcon";

const PlanetList = ({ planets }: { planets: string[] }) => {
  const [showItems, setShowItems] = useState(false)
  const [currentClass, setCurrentClass] = useState<"planetShower" | "planetHiddener">("planetHiddener")
  const [isLoading, setIsLoading] = useState(false)

  const showElement = () => {
    if (isLoading) return null
    setIsLoading(true)
    setShowItems(true)
    setCurrentClass("planetShower")
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }
  const hideElement = () => {
    if (isLoading) return null
    setIsLoading(true)
    setCurrentClass("planetHiddener")
    setTimeout(() => {
      setShowItems(false)
      setIsLoading(false)
    }, 500)
  }
  return (
    <div style={{ width: "200px" }}>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => {
          if (!showItems) {
            showElement()
          } else {
            hideElement()
          }
        }}
      >
        <PlanetIcon />
        <h5>PLANETS</h5>
      </div >
      {showItems && (
        <ul className={currentClass}>
          {planets.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlanetList;
