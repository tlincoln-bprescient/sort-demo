import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { QuickSort } from '@app/services/sort/quicksort';
import { BarChart } from '../chart/chart';
import Label from '../label/label';

/*
  MUI Components used:
   * Box: https://mui.com/material-ui/react-box/
   * TextField: https://mui.com/material-ui/react-text-field/
   * Button: https://mui.com/material-ui/react-text-field/
 */

const STYLES = {
  wrapper: {
    position: 'relative',
    width: '500px',
    height: '500px',
    margin: '0 auto'
  },
  input: {
    margin: '0 10px',
  },
  button: {
    width: '80px',
    margin: '10px 10px'
  }
};

const getRandom = (length) => Array.from({ length }, () => Math.floor(Math.random() * 50));

export const Welcome = () => {
  const [values, setValues] = useState(() => getRandom(10));
  const [quickSort, setQuickSort] = useState(() => QuickSort(values));
  const [complete, setComplete] = useState(false);

  const handleShuffle = async () => {
    const list = getRandom(10);
    setQuickSort(QuickSort(list));
    setValues(list);
    setComplete(false);
  };

  const handleStep = async () => {
    const result = quickSort.step();
    setComplete(result.complete);
    setValues([...quickSort.list]);
  };

  const handleSort = async () => {
    setValues(quickSort.sort());
    setComplete(true);
  };

  return (
    <Box sx={STYLES.wrapper}>
      <Label value="Click the button to sort the values." />
      <TextField variant="standard" value={values} disabled sx={STYLES.input} fullWidth />
      <Button variant="contained" onClick={handleShuffle} sx={STYLES.button}>Shuffle</Button>
      <Button variant="contained" onClick={handleStep} sx={STYLES.button}>Step</Button>
      <Button variant="contained" onClick={handleSort} sx={STYLES.button}>Sort</Button>
      { complete || <Label value={`Stack size: ${quickSort.stack.length}`} /> }
      { complete && <Label value="Sort is complete." /> }
      <BarChart values={values} />
    </Box>
  );
};
