import { HStack, Text, Box } from 'native-base';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack px={'30px'} py={'30px'} justifyContent={'space-between'}>
      <Link to={'/'}>
        <Text fontSize={'35px'} color={'black'}>
          나의 Todo-List CRUC
        </Text>
      </Link>
      <HStack space={'10px'}>
        <Link to={'/create_day'}>
          <Box
            w={'80px'}
            h={'60px'}
            bgColor={'#1a237e'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'15px'}
          >
            <Text>Day 추가</Text>
          </Box>
        </Link>
        <Link to={'/create_todo'}>
          <Box
            w={'80px'}
            h={'60px'}
            bgColor={'#1a237e'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'15px'}
          >
            <Text>할일 추가</Text>
          </Box>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
