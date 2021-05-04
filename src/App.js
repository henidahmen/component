
import './App.css';
import Adresse from './components/profile/Adresse';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <FullName/>
   
      <Adresse/>
      <ProfilePhoto/>
     
      
    </div>
  );
}

export default App;
