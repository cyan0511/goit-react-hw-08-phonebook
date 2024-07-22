import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { findBy, value } = useSelector(getFilter);
  const handleSearch = e => {
    dispatch(setFilter({ value: e.target.value, findBy }));
  };

  const handleFindBy = e => {
    e.preventDefault();
    dispatch(setFilter({ value, findBy: findBy === 'name' ? 'number' : 'name' }))
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <button type="button" style={{ width: '75px' }}
        onClick={handleFindBy}>{findBy === 'name' ? 'ABC' : '123'}</button>

      <div style={{ width: '100%' }}>
        <input type="search" placeholder={`Find contacts by ${findBy}`} onChange={handleSearch} />
      </div>
    </div>
  )
}

