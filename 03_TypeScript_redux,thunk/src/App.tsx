import {CounterContainer} from './containers/CounterContainer';
import TodoApp from './containers/TodoAdd';
import GithubProfileLoader from './containers/GithubProfileLoader';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr/>
      <TodoApp/>
      <hr/>
      <GithubProfileLoader />;
    </>
    )
};

export default App