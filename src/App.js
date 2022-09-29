import logo from './logo.svg';
import './App.css';
import Routine from './component/Routine/Routine';
import QuesAndAns from './component/QuesAndAns/QuesAndAns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Routine></Routine>
      <QuesAndAns></QuesAndAns>
    </div>
  );
}

export default App;
