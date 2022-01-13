import { VStack, Button, Text, TextArea, Box } from 'native-base';
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
    <VStack px={'30px'} space={'10px'}>
      <VStack>
        <Text fontSize={'20px'} color={'black'} lineHeight={'normal'}>
          날짜를 입력하세요
        </Text>
        <TextArea bgColor={'#03a9f4'} ref={dayRef} fontSize={'20px'} />
      </VStack>
      <Button onPress={createDay}>
        <Text fontSize={'20px'} fontWeight={'bold'}>
          저장
        </Text>
      </Button>
    </VStack>
  );
};

export default CreateDay;
