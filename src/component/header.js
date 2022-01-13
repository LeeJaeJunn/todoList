import { HStack, Text, Box, VStack } from 'native-base';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <VStack px={'30px'} py={'30px'} justifyContent={'space-between'} space={10}>
      <Box alignItems={'center'}>
        <Link to={'/'}>
          <Text fontSize={'50px'} fontWeight={'bold'} color={'black'}>
            나의 Todo-List
          </Text>
        </Link>
      </Box>
      <Box alignItems={'center'}>
        <HStack space={'10px'} alignItems={'center'} space={'50px'}>
          <Link to={'/create_day'}>
            <Box
              px={'30px'}
              py={'15px'}
              bgColor={'#1a237e'}
              alignItems={'center'}
              justifyContent={'center'}
              borderRadius={'20px'}
            >
              <Text fontSize={'20px'}>Day 추가</Text>
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
  );
};

export default Header;
