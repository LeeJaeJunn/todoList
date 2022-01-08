import { Button, Text, TextArea, VStack } from 'native-base';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react/cjs/react.development';
import useFetch from '../hooks/useFetch';

const CreateTodo = () => {
  const days = useFetch('http://localhost:3001/days');
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const todoRef = useRef(null);
  const dayRef = useRef(null);

  const createTodo = () => {
    if (!loading) {
      setLoading(true);
      fetch(`http://localhost:3001/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          todo: todoRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료되었습니다.');
          history.push(`/day/${dayRef.current.value}`);
          setLoading(false);
        }
      });
    }
  };

  return (
    <VStack px={'30px'}>
      <VStack>
        <Text fontSize={'20px'}>할일</Text>
        <TextArea ref={todoRef} />
      </VStack>
      <VStack>
        <Text fontSize={'20px'}>Day</Text>
        <select ref={dayRef}>
          {days.map((day, index) => (
            <option value={day.day} key={index}>
              {day.day}
            </option>
          ))}
        </select>
      </VStack>
      <Button onPress={createTodo}>
        <Text>{loading ? '저장중...' : '저장'}</Text>
      </Button>
    </VStack>
  );
};

export default CreateTodo;
