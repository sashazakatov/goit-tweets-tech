import { useDispatch } from "react-redux";
import { changeFilter, resetPage } from "store/tweets/slice";


const Filters = () => {
    const dispatch = useDispatch();
    const handelSelect = (e) => {
        const { value } = e.target;
        dispatch(changeFilter(value));
        dispatch(resetPage());
    } 

    return(
        <label>
            Filter
            <select onChange={handelSelect}>
                <option value="all">All</option>
                <option value="follow">Follow</option>
                <option value="following">Following</option>
            </select>
        </label>
    );
}
export default Filters;