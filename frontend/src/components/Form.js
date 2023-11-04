import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentLeft = styled.form`
  color: white;
  font-weight: bold;
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 5px;
`;

const ContentRight = styled.form`
  color: white;
  font-weight: bold;
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 5px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  height: 50px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 10px;
  background-color: #191a1a;
`;

const Label = styled.label``;

const Button = styled.button`
  width: 15rem;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  border-radius: 15px;
  background-color: #3e7c2e;
  color: white;
  height: 3.2rem;
  border: none;
`;

const Form = () => {
  return (
    <div>
        <Contents>
      <FormBox>
        <ContentLeft>
          <InputBox>
            <Label>Name</Label>
            <Input name="nome" />
          </InputBox>
          <InputBox>
            <Label>E-mail</Label>
            <Input name="email" type="email" />
          </InputBox>
        </ContentLeft>
        <ContentRight>
          <InputBox>
            <Label>Phone</Label>
            <Input name="phone" />
          </InputBox>
          <InputBox>
            <Label>Birth Date</Label>
            <Input name="birth_date" type="number" />
          </InputBox>
        </ContentRight>
      </FormBox>
      <Button type="submit">Submit</Button>
      </Contents>
    </div>
  );
};

export default Form;
