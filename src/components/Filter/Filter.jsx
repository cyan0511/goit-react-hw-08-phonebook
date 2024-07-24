import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../store/contacts/selectors';
import { setFilter } from '../../store/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const { findBy } = useSelector(getFilter);
  const handleSearch = e => {
    dispatch(setFilter({ value: e.target.value, findBy }));
  };

  /* const handleFindBy = e => {
    e.preventDefault();
    dispatch(setFilter({ value, findBy: findBy === 'name' ? 'number' : 'name' }))
  }; */

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* <Button variant="outlined" type="button" style={{ width: '175px' }}
        onClick={handleFindBy}>
        <FilterList />
        {findBy === 'name' ? 'ABC' : '123'}
      </Button> */}

      <div style={{ width: '100%' }}>
        <TextField
          sx={{ width: '100%' }}
          variant="outlined"
          label={`Find contacts`}
          onChange={handleSearch} />
      </div>
    </div>
  )
}

