import './App.css';
import Mohan,{Manger,Intern} from './components/Employee';
function App() {
  return (
    <div className="App">
      {/* Hello world */}
      <Mohan/>
      <Manger/>
      <Intern/>
    </div>
  );
}

export default App;
// npx create-react-app 'empdashboard'