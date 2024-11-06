import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <div style={{marginTop:'40px'}}>
      <Button variant="text"style={{backgroundColor:'Red'}}>Text</Button>
      <Button variant="contained" style={{backgroundColor:'yellow'}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </div>
  );
}
