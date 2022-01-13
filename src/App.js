import { Box } from 'native-base';
import Todo from './component/todo';
import DayList from './component/day-list';
import Header from './component/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateTodo from './component/create-todo';
import CreateDay from './component/create-day';

import dummy from './db/data.json';

function App() {
  return (
    <Box
      px={'150px'}
      py={'40px'}
      minH={'100vh'}
      minW={'100vw'}
      bgColor={'#8ed1fc'}
      // bg={{
      //   linearGradient: {
      //     colors: ['lightBlue.300', 'violet.800'],
      //     start: [0, 0],
      //     end: [1, 0],
      //   },
      // }}
    >
      <BrowserRouter>
        <Box bgColor={'#ffffff'} minH={'50vh'} minW={'60vw'} borderRadius={'30px'}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <DayList />
            </Route>
            <Route path='/day/:day'>
              <Todo data={dummy.todos} />
            </Route>
            <Route path={'/create_todo'}>
              <CreateTodo />
            </Route>
            <Route path={'/create_day'}>
              <CreateDay />
            </Route>
          </Switch>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;

// json-server --watch ./src/db/data.json --port 3001

/*
  REST API
  Create : POST
  Read : GET
  Update : PUT
  Delete : DELETE
*/
