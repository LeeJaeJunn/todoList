import { Box, HStack, Text } from 'native-base';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DayList = (props) => {
  const days = useFetch('http://localhost:3001/days');

  if (days.length === 0) {
    return (
      <Box bgColor={''}>
        <Text color={'black'}>로딩중....</Text>
      </Box>
    );
  }

  return (
    <HStack px={'30px'} space={'30px'} flexWrap='wrap'>
      {days.map((day, index) => (
        <Box key={index} pb={'20px'}>
          <Link to={`/day/${day.day}`}>
            <Box
              w={'80px'}
              h={'40px'}
              bgColor={'#1976d2'}
              borderRadius={'15px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Text fontSize={'20px'}>{day.day}</Text>
            </Box>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default DayList;
