import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Formik } from 'formik';
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
} from '@chakra-ui/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
} from '@chakra-ui/react';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

import {
  FaSearch,
  FaEraser,
  FaWindowClose,
  FaArrowAltCircleRight,
  FaQuestionCircle,
} from 'react-icons/fa';
import namesData from '../sports-data/names-data';
import tonesData from '../sports-data/tones-data';
import InfoDrawer from '../components/InfoDrawer';
import PersonCards from '../components/PersonCards';
import { FilledInput } from '@material-ui/core';

function UserSearchInputs() {
  const axios = require('axios');
  const [userInputs, setUserInputs] = useState([{ coach: '' }, { player: '' }]);
  // const [toneScores, setToneScores] = useState([
  //   { coachScore: -1 },
  //   { playerScore: -1 },
  // ]);
  const [isLoading, setIsLoading] = useState(false);

  // For showing suggestions
  const [hidden, setHidden] = useState(false);

  // seperate coach / player arrays for filtering suggestions
  const coachNames = namesData.slice(0, 28);
  const playerNames = namesData.slice(28);

  // Variables for coach / player suggestions
  const [coachSuggestions, setCoachSuggestions] = useState([]);
  const [playerSuggestions, setPlayerSuggestions] = useState([]);
  const [clickedIdx, setClickedIdx] = useState(0);

  // For when user clicks search button
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCoachData, setSearchCoachData] = useState('');
  const [searchPlayerData, setSearchPlayerData] = useState('');

  // Binary var for clearing cards on erase button
  const [isCleared, setIsCleared] = useState(true);

  // State vars for player / coach tone scores
  const [playerToneScore, setPlayerToneScore] = useState(-1);
  const [coachToneScore, setCoachToneScore] = useState(-1);

  // Handling click inside / outside input boxes
  const handleClick = (index, e) => {
    setClickedIdx([...e.target.parentNode.children].indexOf(e.target));
    setHidden(!hidden);
  };

  const fillInput = e => {
    // console.log(e.target.textContent);
    const values = [...userInputs];
    if (clickedIdx === 0) {
      values[0]['coach'] = e.target.textContent;
    }

    if (clickedIdx === 1) {
      values[1]['player'] = e.target.textContent;
    }

    setUserInputs(values);

    console.log(userInputs);
    setHidden(false);
  };

  // Update state of current coach or player
  const handleInput = (index, e) => {
    // console.log('target: ' + e.target);
    const values = [...userInputs];
    const currVal = Object.keys(userInputs[index])[0];

    values[index][currVal] = e.target.value;
    setUserInputs(values);

    let stringToSearch = '';
    userInputs.forEach(input => {
      stringToSearch += Object.values(input)[0];
    });

    console.log(stringToSearch);
    setSearchQuery(stringToSearch);

    // Filtering logic
    if (index === 0) {
      let newFilter = coachNames.filter(name => {
        return name
          .toLowerCase()
          .includes(userInputs[0]['coach'].toLowerCase());
      });

      setCoachSuggestions(newFilter);
      console.log('coach suggestions: ' + coachSuggestions);
    } else {
      let newFilter = playerNames.filter(name => {
        return name
          .toLowerCase()
          .includes(userInputs[1]['player'].toLowerCase());
      });

      setPlayerSuggestions(newFilter);
      console.log('player suggestions: ' + playerSuggestions);
    }
  };

  const handleSearch = e => {
    e.preventDefault();

    setCoachToneScore(tonesData[namesData.indexOf(userInputs[0]['coach'])]);
    setPlayerToneScore(tonesData[namesData.indexOf(userInputs[1]['player'])]);

    let params = {
      api_key: 'EEB89ECC009642F58763C462B10AC4E0',
      q: userInputs[0]['coach'],
      tbm: 'isch',
      ijn: '0',
    };

    const getCoachSearchResults = async () => {
      setIsLoading(true);

      params = {
        api_key: 'EEB89ECC009642F58763C462B10AC4E0',
        q: userInputs[1]['player'],
        tbm: 'isch',
        ijn: '0',
      };
      try {
        const resp = await axios.get('https://api.scaleserp.com/search', {
          params,
        });

        console.log(resp.data.inline_images[0].link);
        setSearchCoachData(resp.data.inline_images[0].link);
      } catch (err) {
        console.log(err);
      }
    };

    const getPlayerSearchResults = async () => {
      try {
        params = {
          api_key: 'EEB89ECC009642F58763C462B10AC4E0',
          q: userInputs[1]['player'],
          tbm: 'isch',
          ijn: '0',
        };
        const resp = await axios.get('https://api.scaleserp.com/search', {
          params,
        });

        console.log(resp.data.inline_images[0].link);
        setSearchPlayerData(resp.data.inline_images[0].link);
      } catch (err) {
        console.log(err);
      }
    };

    const getAllSearchResults = async () => {
      await getCoachSearchResults().then(() =>
        getPlayerSearchResults().then(setIsLoading(false))
      );
    };

    {
      /* FOR GETTING IMAGES!!!!!!!!!!!!!!!!!! */
    }
    getAllSearchResults().then(() => {
      console.log(searchCoachData);
      setIsLoading(false);
    });

    setIsCleared(false);
  };

  const deleteInputs = e => {
    setUserInputs([{ coach: '' }, { player: '' }]);
    setPlayerSuggestions([]);
    setCoachSuggestions([]);
    setIsCleared(true);
  };

  useEffect(() => {}, [userInputs]);

  return (
    <>
      <Flex flexDirection="column" alignItems="center" w="100%" h="30px">
        <Flex justifyContent="center" w="1150px" h="100px" mt="10">
          <Flex>
            <OutsideClickHandler onOutsideClick={() => setHidden(false)}>
              {userInputs.map((input, index) => (
                <Input
                  key={index}
                  w="300px"
                  minHeight="40px"
                  mr={2}
                  variant="filled"
                  type="text"
                  placeholder={`Enter ${Object.keys(userInputs[index])} name:`}
                  value={Object.values(userInputs[index])}
                  onChange={e => handleInput(index, e)}
                  onClick={e => handleClick(index, e)}
                ></Input>
              ))}
              {hidden && (
                <Flex
                  width="600px"
                  height="200px"
                  display="flex"
                  flexDirection="row"
                  justifyContent={clickedIdx === 0 ? 'flex-start' : 'flex-end'}
                >
                  {hidden && clickedIdx === 0 ? (
                    <Flex
                      flexDirection="column"
                      width="300px"
                      height="100px"
                      m={0}
                    >
                      {coachSuggestions.slice(0, 3).map(suggestion => {
                        return (
                          <Button
                            justifyContent="center"
                            backgroundColor="white"
                            onClick={e => fillInput(e)}
                            zIndex={9999}
                            width="300px"
                            // h="20px"
                            borderRadius={0}
                            size="sm"
                            textColor="blackAlpha.900"
                          >
                            {suggestion}
                          </Button>
                        );
                      })}
                    </Flex>
                  ) : (
                    <Flex
                      flexDirection="column"
                      width="300px"
                      height="100px"
                      ml={0}
                    >
                      {playerSuggestions.slice(0, 3).map(suggestion => {
                        return (
                          <Button
                            justifyContent="center"
                            backgroundColor="white"
                            onClick={e => fillInput(e)}
                            zIndex={9999}
                            width="300px"
                            ml={2}
                            // h="20px"
                            borderRadius={0}
                            size="sm"
                            textColor="blackAlpha.900"
                          >
                            {suggestion}
                          </Button>
                        );
                      })}
                    </Flex>
                  )}
                </Flex>
              )}
            </OutsideClickHandler>
          </Flex>

          <IconButton
            colorScheme="blue"
            icon={<FaArrowAltCircleRight />}
            onClick={handleSearch}
            mr={2}
          ></IconButton>

          <IconButton
            colorScheme="pink"
            icon={<FaEraser />}
            onClick={deleteInputs}
            mr={2}
          ></IconButton>

          <InfoDrawer></InfoDrawer>
        </Flex>
      </Flex>

      <PersonCards
        coachName={userInputs[0].coach}
        playerName={userInputs[1].player}
        coachScore={coachToneScore}
        playerScore={playerToneScore}
        hasInputs={isCleared}
      />
    </>
  );
}

export default UserSearchInputs;
