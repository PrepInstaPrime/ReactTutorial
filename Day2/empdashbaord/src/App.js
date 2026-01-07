import './App.css';
import EmployeeCard from './components/EmployeeCard';
import Dept from './components/Dept';
import Condition from './components/Condition';
// import Mohan,{Manger,Intern} from './components/Employee';
function App() {
  return (
    <div className="App">
      {/* Hello world */}
      {/* <Mohan/>
      <Manger/>
      <Intern/> */}
      {/* passing name,salary,age as props */}
      <EmployeeCard name="Mohan" salary="30K" age="25"/> 
      <EmployeeCard name ="Karan" salary="40K" age="40"/>
      <Dept budget="1cr" name="Sales" temp="30"/>
      <Condition login={true}/>
    </div>
  );
}

export default App;
// npx create-react-app 'empdashboard'