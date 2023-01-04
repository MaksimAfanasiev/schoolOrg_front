import { selectUser } from "../../redux/selectors/userSelectors"
import { useSelector } from "react-redux"

export const CoursesPage = () => {
    const {courses} = useSelector(selectUser)

    return <>
        My courses list
        <ul>
            {courses.map((course) => <li key={course._id}>{course.name}</li>)}
        </ul>
    </>
}