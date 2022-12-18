import { NavLink } from "react-router-dom";


export function WhiteLogo() {
    return <NavLink to="/"><img src={process.env.PUBLIC_URL + "/logo.png"} /></NavLink> 
}