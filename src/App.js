import { Box, VStack, Text, HStack } from 'native-base';
import Todo from './component/todo';
import DayList from './component/day-list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateTodo from './component/create-todo';
import CreateDay from './component/create-day';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Box px={'150px'} py={'40px'} minH={'100vh'} minW={'100vw'} bgColor={'#8ed1fc'}>
      <BrowserRouter>
        <Box bgColor={'#ffffff'} minH={'50vh'} minW={'60vw'} borderRadius={'30px'}>
          <VStack px={'30px'} py={'30px'} justifyContent={'space-between'} space={10}>
            <Box alignItems={'center'}>
              <Link to={'/'}>
                <Text fontSize={'50px'} fontWeight={'bold'} color={'black'}>
                  나의 Todo-List
                </Text>
              </Link>
            </Box>
            <Box alignItems={'center'}>
              <HStack space={'10px'} alignItems={'center'}>
                <Link to={'/create_day'}>
                  <Box
                    px={'30px'}
                    py={'15px'}
                    bgColor={'#1a237e'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'20px'}
                  >
                    <Text fontSize={'20px'}>날짜 추가</Text>
                  </Box>
                </Link>
                <Link to={'/create_todo'}>
                  <Box
                    px={'30px'}
                    py={'15px'}
                    bgColor={'#1a237e'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    borderRadius={'20px'}
                  >
                    <Text fontSize={'20px'}>할일 추가</Text>
                  </Box>
                </Link>
              </HStack>
            </Box>
          </VStack>
          <Switch>
            <Route exact path={'/'}>
              <DayList />
            </Route>
            <Route path={'/day/:day'}>
              <Todo />
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
