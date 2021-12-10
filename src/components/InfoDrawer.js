import React from 'react';

import {
  Flex,
  Box,
  VStack,
  HStack,
  Heading,
  Image,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  InputAddon,
  Menu,
  MenuList,
  MenuItem,
  UnorderedList,
  Button,
  Divider,
  Spinner,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Text,
  Badge,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {
  FaSearch,
  FaEraser,
  FaWindowClose,
  FaArrowAltCircleRight,
  FaQuestionCircle,
} from 'react-icons/fa';

import ScoreBreakdown from './ScoreBreakdown';

function InfoDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="green"
        icon={<FaQuestionCircle />}
        onClick={onOpen}
        mr={2}
      ></IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        width="1000px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="md" p={4}>
            Rating System
          </DrawerHeader>

          <DrawerBody>
            {/* Source: https://theriotreport.com/more-than-50-of-first-round-picks-are-busts-and-other-terrifying-draft-statistics/ */}
            {/* <Text>
              Over the last decade, more than 50% of NFL first-round selections
              have been busts.
            </Text>

            <br></br>

            <Text>
              This is because it is notoriously difficult to evaluate the
              psychological make up of an athlete. We sought to fix that by
              removing destructive biases that waste a team's resources with the
              help of IBM Watson.
            </Text>

            <br></br> */}

            {/* <Text>
              It is notoriously difficult to evaluate the psychological make up
              of an athlete. We sought to fix that by removing destructive
              biases that waste a team's resources with the help of IBM Watson's
              Tone Analyzer API.
            </Text>

            <br></br> */}

            {/* <Text pb={1}>Emotion number codes</Text> */}
            <Stack direction="column" pb={4}>
              <Badge colorScheme="red" w={'min-content'}>
                1: Anger
              </Badge>
              <Badge colorScheme="orange" w={'min-content'}>
                2: Disgust
              </Badge>
              <Badge colorScheme="purple" w={'min-content'}>
                3: Fear
              </Badge>
              <Badge colorScheme="pink" w={'min-content'}>
                4: Sadness
              </Badge>
              <Badge w={'min-content'}>5: Tentative</Badge>
              <Badge colorScheme="blue" w={'min-content'}>
                6: Analytical
              </Badge>
              <Badge colorScheme="green" w={'min-content'}>
                7: Confident
              </Badge>
              <Badge colorScheme="yellow" w={'min-content'}>
                8: Joy
              </Badge>
            </Stack>
            {/* <Divider /> */}
            <Text fontSize={14}>
              By absolute value of the difference of player-coach average tone
              rating:
            </Text>
            <ScoreBreakdown />
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="whatsapp"
              variant="solid"
              mr={3}
              onClick={onClose}
            >
              Got it!
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default InfoDrawer;
