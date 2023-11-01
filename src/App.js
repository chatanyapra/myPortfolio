import './App.css';
import Navbar from './components/Navbar';
import './components/UserImagePage.css';
import TimeLine from './components/TimeLine';
import './components/TimeLine.css'
import UserImagePage from './components/UserImagePage';
import Hobbies from './components/Hobbies';
import './components/Hobbies.css';
import './components/Footer.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserImagePage/>
      <TimeLine/>
      <Hobbies/>
      <Footer/>
    </div>
  );
}

export default App;
