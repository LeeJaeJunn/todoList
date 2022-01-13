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
    <VStack px={'30px'} pb={'20px'} space={'10px'}>
      <VStack>
        <Text fontSize={'20px'} color={'black'} lineHeight={'normal'}>
          할일을 입력하세요
        </Text>
        <TextArea bgColor={'#03a9f4'} ref={todoRef} fontSize={'20px'} />
      </VStack>
      <VStack>
        <Text fontSize={'20px'} color={'black'} lineHeight={'normal'}>
          날짜를 선택하세요
        </Text>
        <select ref={dayRef}>
          {days.map((day, index) => (
            <option value={day.day} key={index}>
              {day.day}
            </option>
          ))}
        </select>
      </VStack>
      <Button onPress={createTodo} mt={'10px'}>
        <Text fontSize={'20px'} fontWeight={'bold'}>
          {loading ? '저장중...' : '저장'}
        </Text>
      </Button>
    </VStack>
  );
};

export default CreateTodo;
