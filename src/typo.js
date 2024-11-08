// import * as React from 'react';
// import { typo } from '@mui/material/styles';

// const Div = styled('div')(({ theme }) => ({
//   ...theme.typography.button,
//   backgroundColor: theme.palette.background.paper,
//   padding: theme.spacing(1),
// }));

// export default function TypographyTheme() {
//   return <Div>{"This div's text looks like that of a button."}</Div>;
// }


import * as React from 'react';
import { typo } from '@mui/material/styles';

const Div = typo('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export default function TypographyTheme() {
  return <Div>{"This div's text looks like that of a button."}</Div>;
}
