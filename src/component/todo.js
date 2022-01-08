import { Box, VStack, HStack, Text, Checkbox, Button } from 'native-base';
import { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from '../hooks/useFetch';

const TodoBox = (props) => {
  const { data } = props;
  const [todo, setTodo] = useState(data);
  const [isDone, setIsDone] = useState(data.isDone);

  const haldleOnChangeIsDone = () => {
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...todo,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const handleOnChangeDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          setTodo({ id: 0 });
        }
      });
    }
  };

  if (todo.id === 0) {
    return null;
  }

  return (
    <HStack minH={'50px'} borderWidth={'1px'} borderColor={'black'} bgColor={isDone ? '#607d8b' : ''}>
      <Box w={'50px'} alignItems={'center'} justifyContent={'center'}>
        <Checkbox accessibilityLabel='todoCheck' isChecked={isDone} onChange={haldleOnChangeIsDone} />
      </Box>
      <Box h={'50px'} w={'1px'} bgColor={'black'} />
      <Box w={'70vw'} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize={'30px'} color={'black'}>
          {todo.todo}
        </Text>
      </Box>
      <Box h={'50px'} w={'1px'} bgColor={'black'} />
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <Button onPress={handleOnChangeDelete} bgColor={'#e57373'}>
          <Text>삭제</Text>
        </Button>
      </Box>
    </HStack>
  );
};

const Todo = (props) => {
  const { day } = useParams();
  const todos = useFetch(`http://localhost:3001/todos?day=${day}`);

  return (
    <VStack space={5} px={'30px'}>
      <Text fontSize={'30px'} fontWeight={'bold'} color={'black'}>
        {day}
      </Text>
      {todos.length === 0 && (
        <Box>
          <Text fontSize={'20px'} color={'black'}>
            할일을 추가하세요
          </Text>
        </Box>
      )}
      <VStack>
        {todos.map((data, index) => (
          <TodoBox data={data} key={index} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Todo;
