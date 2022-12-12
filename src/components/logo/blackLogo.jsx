import { NavLink } from "react-router-dom";

export function BlackLogo() {
  return <NavLink to="/"><img src={process.env.PUBLIC_URL + "/logoBlack.png"} /></NavLink>;
}
