import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input
        type="text"
        // value={filter}
        className={css.searchBoxInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
