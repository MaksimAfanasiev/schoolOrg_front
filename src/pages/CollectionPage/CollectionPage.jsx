import { selectUser } from "../../redux/selectors/userSelectors"
import { useSelector } from "react-redux"

export const CollectionPage = () => {
    const { courses } = useSelector(selectUser);

    const books = courses.reduce((acc, el) => {
        acc.push(...el.books);
        return acc;
    }, []);

    return <>
        My collection list
        <ul>
            {books.map((book, index) => <li key={index}>{book}</li>)}
        </ul>
    </>
}