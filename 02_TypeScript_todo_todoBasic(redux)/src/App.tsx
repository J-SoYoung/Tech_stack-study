import {CounterContainer} from './containers/CounterContainer';
import ThdudApp from './containers/ThdudApp';
import TodoApp from './containers/TodoAdd';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr/>
      <TodoApp/>
      <hr/>
      <ThdudApp/>
    </>
    )
};

export default App;
