// import logo from './logo.svg';
import { Typography } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './AppBar';
import BasicButtons from './Button';
import BasicRating from './Rating';


function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
     <BasicButtons/>
     <BasicRating/>
     <Typography/>
    </div>
  );
}

export default App;
 