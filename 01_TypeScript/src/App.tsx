import React, { FC } from 'react';
import './App.css';
import { Person } from './components/Person';


const App: FC = ()=> { 
  return (
    <div className="App">
      {/* props를 전달하고 있지 않아서 Error */}
      <Person name="thdud" age={20} email='thdud@aaa.aaa'/>
    </div>
  );
}

export default App;
