import React, { useState, useRef } from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Stat,
  StatNumber,
  StatArrow,
  StatUpArrow,
  StatDownArrow,
  StatType,
  StatGroup,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { green } from '@material-ui/core/colors';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import allData from '../sports-data/all-data';

export default function PersonCards({
  coachName,
  playerName,
  coachScore,
  playerScore,
  hasInputs,
}) {
  const roundScoreDiff = (num1, num2) => {
    return Math.abs(num1 - num2).toFixed(2);
  };

  const getLevelOfComp = () => {
    const levelOfComp = roundScoreDiff(coachScore, playerScore);
    if (levelOfComp <= 2) {
      return 'high';
    } else if (levelOfComp > 2 && levelOfComp < 3) {
      return 'medium';
    } else {
      return 'low';
    }
  };

  let cardData = [
    {
      name: coachName,
      job: 'Coach',
      avg_score: coachScore,
      img_link:
        'https://www.nhlcoaches.com/wp-content/uploads/2020/04/GettyImages-1207035344-1-1024x682-1-1024x675.jpg',
    },
    {
      name: playerName,
      job: 'Player',
      avg_score: playerScore,
      img_link:
        'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_1106%2Cy_335/MTg1MzAyMjk2NjUxOTY2MDk5/usatsi_14184395.jpg',
    },
  ];

  return (
    <>
      {hasInputs == false ? (
        <Flex w="100%" justifyContent="center" mt={10}>
          {cardData.map((value, key) => {
            return (
              <Box
                maxW={'240px'}
                w={'full'}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                mt={50}
                mr={4}
              >
                <Image
                  h={'120px'}
                  w={'full'}
                  src={
                    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/1200px-05_NHL_Shield.svg.png'
                  }
                  objectFit={'cover'}
                  opacity=".75"
                />

                <Flex justify={'center'} mt={-12}>
                  {getLevelOfComp() < 2 ? (
                    <Avatar
                      size={'xl'}
                      src={value.img_link}
                      alt={'Author'}
                      css={{
                        // Make this boolean variable
                        border: '4px inset #48BB78',
                      }}
                    />
                  ) : (
                    <Avatar
                      size={'xl'}
                      src={value.img_link}
                      alt={'Author'}
                      css={{
                        // Make this boolean variable
                        border: '4px inset red',
                      }}
                    />
                  )}
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading
                      fontSize={'2xl'}
                      fontWeight={500}
                      fontFamily={'body'}
                    >
                      {value.name}
                    </Heading>
                    <Text color={'gray.500'}>{value.job}</Text>
                  </Stack>

                  <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} alignItems="center">
                      <Flex alignItems="center">
                        {value.avg_score >= 6 ? (
                          <StatUpArrow pr={1} />
                        ) : (
                          <StatDownArrow pr={1} />
                        )}
                        <Text>{value.avg_score}</Text>
                      </Flex>

                      <Text fontSize={'sm'} color={'gray.500'}>
                        Tone Rating
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            );
          })}
          {/* Compatability rating */}
          <Box
            maxW={'240px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            mt={50}
          >
            <Box p={4}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'4xl'} fontWeight={500} fontFamily={'body'}>
                  {roundScoreDiff(cardData[0].avg_score, cardData[1].avg_score)}
                </Heading>
                <Text color={'gray.500'}>Tone Rating Difference</Text>
              </Stack>
              <Divider />

              <Flex flexDirection="column" m={3} alignItems="center">
                <Text fontSize={'sm'} color={'black.800'} pb={4}>
                  {coachName} and {playerName} have a {getLevelOfComp()} level
                  of compatibility.
                </Text>

                <Button mb={4}>See coach interviews</Button>
                <Button>See player interviews</Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
}

{
  /* <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Follow
          </Button> */
}
