import { useEffect, useState } from "react";
import PlanetIcon from "../../assets/icons/PlanetIcon";
import { Transition } from "react-transition-group";
import { PlanetType } from "../../api/SWAPI";

const PlanetList = ({ planets }: { planets: string[] }) => {
  const [showItems, setShowItems] = useState(false)


  return (
    <div style={{ width: "200px" }}>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setShowItems(prev => !prev)}
      >
        <PlanetIcon />
        <h5>PLANETS</h5>
      </div >
      {/* {showItems && (
        <ul className={currentClass}>
          {planets.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )} */}
      <Transition
        in={showItems}
        timeout={{
          appear: 0,
          enter: 400,
          exit: 500,
        }}
        mountOnEnter
        unmountOnExit
      >
        {
          (state) => (
            <ul className={`planetList ${state}`}>
            {planets.map(item => (
              // <li key={item}>{item}</li>
              <PlanetItem 
                key={item}
                url={item}
              />
            ))}
          </ul>
          )
        }
      </Transition>
    </div>
  );
};

export default PlanetList;


const PlanetItem = ({url}:{url: string}) => {
  const [name, setName] = useState<string | null>(null)

  useEffect( () => {
    try {
      fetch(url)
      .then( response => {
        if (response.status !== 200) throw new Error("fetch error")
        return response.json()
      })
      .then( (data: PlanetType) => setName(data.name))
    } catch (err) {
      if (err instanceof Error) console.error(err.message);
    }
  }, [url])
  return <li>{name}</li>
}
