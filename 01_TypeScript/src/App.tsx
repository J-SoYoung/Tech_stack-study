import React, { FC } from 'react';
import './App.css';
import { HairColor, Person } from './components/Person';



const App: FC = ()=> { 
  return (
    <div className="App">
      <Person 
        name="thdud" 
        age={20} 
        email='thdud@aaa.aaa' 
        hairColor={HairColor.Pink}
      />
    </div>

  );
}

export default App
