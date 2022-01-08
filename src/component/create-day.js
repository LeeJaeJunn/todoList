import { VStack, Button, Text, TextArea } from 'native-base';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRef } from 'react/cjs/react.development';

const CreateDay = () => {
  const history = useHistory();
  const dayRef = useRef(null);

  const createDay = () => {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: dayRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료되었습니다.');
        history.push(`/`);
      }
    });
  };

  return (
    <VStack px={'30px'}>
      <VStack space={'20px'}>
        <Text fontSize={'20px'}>날짜</Text>
        <TextArea ref={dayRef} />
      </VStack>

      <Button onPress={createDay}>
        <Text>저장</Text>
      </Button>
    </VStack>
  );
};

export default CreateDay;
