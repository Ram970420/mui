// import logo from './logo.svg';
import { Typography } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './AppBar';
import BasicButtons from './Button';
import BasicRating from './Rating';
import UnderlineLink from './underline';


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
     <BasicButtons/>
     <BasicRating/>
     <Typography/>
     <UnderlineLink/>
    </div>
  );
}

export default App;
 