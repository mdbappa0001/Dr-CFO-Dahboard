import { Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './DashBoard/DashBoard';
import OnlineConsulation from './DashBoard/OnlineConsulation';
import PatientManagement from './DashBoard/PatientManagement';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard></DashBoard>}>
          <Route index element={<PatientManagement></PatientManagement>}></Route>
          <Route path='consulation' element={<OnlineConsulation></OnlineConsulation>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
