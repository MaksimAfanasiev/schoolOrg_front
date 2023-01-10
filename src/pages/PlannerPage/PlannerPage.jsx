import { Link, Navigate } from "react-router-dom";
import { selectDays } from "../../redux/selectors/plannerSelectors";
import { selectIsLoggedIn } from "../../redux/selectors/userSelectors";
import { getDays } from "../../redux/operations/plannerOperations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


export const PlannerPage = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const days = useSelector(selectDays);

    const dispatch = useDispatch();

    useEffect(() => {dispatch(getDays())}, [dispatch])

    return (
        <>
            {isLoggedIn
                ?
                <ul>
                    {days.map(day => <li key={day._id}><Link to={`${day._id}`}>{day.day}</Link></li>)}
                </ul>
                :
                <Navigate to={"/"} />
            }
            
            </>
    )
}