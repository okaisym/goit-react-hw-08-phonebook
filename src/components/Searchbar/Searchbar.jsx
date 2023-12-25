import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { Input } from "./Searchbar.styled"

export const Searchbar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        value={filter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};