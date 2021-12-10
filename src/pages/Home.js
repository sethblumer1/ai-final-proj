import React from 'react';
import Header from '../components/Header';
import UserSearchInputs from '../components/UserSearchInputs';
import {
  Flex,
  VStack,
  HStack,
  Heading,
  Image,
  IconButton,
} from '@chakra-ui/react';

function Home() {
  return (
    <>
      <Header backgroundImage="linear-gradient(90deg, #410076, #8820dd)" />
      <Flex h="87.5vh" flexDirection="column">
        <UserSearchInputs />
        {/* <UniDropdown /> */}
        {/* <SearchContainer /> */}
      </Flex>
    </>
  );
}

export default Home;
