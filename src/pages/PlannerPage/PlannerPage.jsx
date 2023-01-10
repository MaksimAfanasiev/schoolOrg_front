import { Link } from "react-router-dom"

export const PlannerPage = () => {
    return (
    <ul>
        <li><Link to={"mon"}>Monday</Link></li>
        <li><Link to={"tue"}>Tuesday</Link></li>
        <li><Link to={"wed"}>Wednesday</Link></li>
        <li><Link to={"th"}>Thursday</Link></li>
        <li><Link to={"fr"}>Friday</Link></li>
        <li><Link to={"sat"}>Saturday</Link></li>
        <li><Link to={"sun"}>Sunday</Link></li>
    </ul>
    )
}