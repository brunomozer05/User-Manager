import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DivTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  background: #191a1a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 25px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Titles = styled.div`
margin-top: 1rem;
  color: white;
  font-size: 30px;
  font-weight: 700;
  margin-right: 5rem;
  margin-left: 5rem;
`;

const Line = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  width: 65rem;
  height: 0.4rem;
  border-radius: 15px;
  opacity: 0.5;
  background: rgba(0, 0, 0, 0.3);
`;

const Info = () => {
  return (
    <div>
      <DivTable>
        <Table>
          <Header>
            <Titles>Name</Titles>
            <Titles>E-mail</Titles>
            <Titles>Phone</Titles>
            <Titles>Birth Date</Titles>
          </Header>
          <Line/>

        </Table>
      </DivTable>
    </div>
  );
};

export default Info;
