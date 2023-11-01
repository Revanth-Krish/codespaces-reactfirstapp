import './App.css';

const People = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Role: {props.role}</h2>
      <h2>Experience: {props.experience}</h2> 
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <People name='Revanth' role='systems' experience={2}/>
      <People name='Krishna' role='systems' experience={1}/>
      <People name='vanth' role='web' experience={6}/>
    </div>
  );
}

export default App;
