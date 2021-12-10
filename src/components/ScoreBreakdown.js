import React from 'react';
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

function ScoreBreakdown() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Difference Range</Th>
          <Th>Compatibility</Th>
          {/* <Th>Color Code</Th> */}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{'<='} 2</Td>
          <Td>High</Td>
          {/* <Td color="green.500">Green</Td> */}
        </Tr>
        <Tr>
          <Td>
            {'>'} 2 & {'<'} 3
          </Td>
          <Td>Medium</Td>
          {/* <Td color="yellow.500">Yellow</Td> */}
        </Tr>
        <Tr>
          <Td>{'>='} 3</Td>
          <Td>Low</Td>
          {/* <Td color="red.500">Red</Td> */}
        </Tr>
      </Tbody>
      {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
    </Table>
  );
}

export default ScoreBreakdown;
