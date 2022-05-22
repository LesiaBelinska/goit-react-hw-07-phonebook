import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

import { changeFilter } from "../../redux/contacts-actions";
import s from "./Filter.module.css";

const filterInputId = nanoid();

const Filter = () => {

const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

const onChangeFilter = (event) => dispatch(changeFilter(event.currentTarget.value));

    return (
        <div className={s.filter}>
            <label htmlFor={filterInputId} className={s.label}>Find contacts by name</label>
            <input className={s.input} type="text"
                id={filterInputId}
                value={filter}
                onChange={onChangeFilter}
            />
        </div>

    );
};

export default Filter;