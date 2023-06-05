import { useDispatch } from "react-redux";
import { changeFilter, resetPage } from "store/tweets/slice";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const Filters = () => {
    const dispatch = useDispatch();
    const handelSelect = (e) => {
        const { value } = e.target;
        dispatch(changeFilter(value));
        dispatch(resetPage());
    } 

    return(
        <InputLabel>
            Filter
            <Select 
            style={{ width: 150 }}
             onChange={handelSelect}>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="follow">Follow</MenuItem>
                <MenuItem value="following">Following</MenuItem>
            </Select>
        </InputLabel>
    );
}
export default Filters;