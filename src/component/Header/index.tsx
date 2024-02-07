import { Box } from "@mui/material";
import StarWarsTitle from "../../assets/icons/StarWarsTitle";
import { NavLink } from "react-router-dom";





const Header = () => {
  return (
    <header>
      <Box maxWidth={1440} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <StarWarsTitle />
        </Box>
        <Box display={"flex"} gap={"0 40px"}>
          <NavLink to={"/films"}>films</NavLink>
          <NavLink to={"/characters"}>characters</NavLink>
          <NavLink to={"/planets"}>planets</NavLink>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
