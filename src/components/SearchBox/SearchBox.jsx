import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import {Stack, TextField, Typography } from '@mui/material';

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
 <Stack
          direction="column"
          alignItems='center'
      useFlexGap
      
      spacing={{ xs: 1, sm: 2, md:2  }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={theme => ({
          width: '100%',
            fontSize: 'clamp(1rem, 10vw, 1.15rem)',
          textAlign:'center',
          color:
            theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
            transition: 'color 0.3s ease',
          marginBottom:'15px'
        })}
      >
       Find contacts by name
      </Typography>
      <TextField
        id="outlined-basic"
              label="Enter the name"
              size='normal'
        sx={{width: {sm: '270px', md:"350px"}}}
        // variant="outlined"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      {/* <input
        type="text"
        // value={filter}
        className={css.searchBoxInput}
        onChange={e => dispatch(changeFilter(e.target.value))}
      /> */}
    </Stack>
  );
}
