import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DivTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.div`
    display: flex;
  margin-top: 4rem;
  background: #191a1a;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 25px;
`;

const Titles = styled.div`
color:white;
`;

const Info = () => {
  return (
    <div>
      <DivTable>
        <Table>
            <Titles>
              Name  
            </Titles>
            <Titles>
              E-mail 
            </Titles>
            <Titles>
              Phone
            </Titles>
            <Titles>
              Birth Date
            </Titles>
        </Table>
      </DivTable>
    </div>
  );
};

export default Info;
