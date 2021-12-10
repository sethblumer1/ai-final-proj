import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';

import {
  Flex,
  VStack,
  HStack,
  Heading,
  Image,
  Icon,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGraduationCap,
  FaSchool,
} from 'react-icons/fa';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <HStack
      h="80px"
      backgroundImage="linear-gradient(180deg, #F88379, #FF394F)"
    >
      <Flex w="50%" p={8} alignItems="center">
        {/* Logo with refresh capabilities */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          {/* <Image
            src="https://i.ibb.co/Dg2m9PF/athalytics-white-logo.png"
            height="25px"
          ></Image> */}
          <Text fontSize="20px">sports compatibility.ai</Text>
        </Link>
      </Flex>

      {/* Tabs with routing capabilities */}
      <Flex w="50%" p={8} justifyContent="flex-end" alignItems="center">
        {/* Data link link */}
        {/* <Link href="/data" style={{ textDecoration: 'none' }}>
          <Heading
            fontFamily="Comfortaa"
            p={5}
            fontSize="18px"
            color="white"
            letterSpacing="wide"
          >
            Data
          </Heading>
        </Link> */}

        {/* About link */}
        {/* <Link href="/about" style={{ textDecoration: 'none' }}>
          <Heading
            fontFamily="Comfortaa"
            p={5}
            fontSize="18px"
            color="white"
            letterSpacing="wide"
          >
            About
          </Heading>
        </Link> */}

        {/* Light / dark mode toggler */}
        <IconButton
          ml={6}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
          colorScheme="gray"
          variant="solid"
          _hover=""
        />
      </Flex>
    </HStack>
  );
}

export default Header;
