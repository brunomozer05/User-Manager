import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContents = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentLeft = styled.div`
  color: white;
  font-weight: bold;
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 5px;
`;

const ContentRight = styled.div`
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
  margin-top: 2rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  margin-top: 1.5rem;
`;

const Logo = styled.div`
  width: 98vw;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birth_date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    

    const url = "http://localhost:8080/";
  
    const request = await fetch(url, {
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        birthDate: formData.birth_date,
      }),
      method: "POST",
      headers: {"Content-Type": "application/json"}
    });  
  };

  return (
    <div>
      <Logo>
        <img src={logo} height={75} />
      </Logo>
      <FormBox onSubmit={onSubmit}>
        <FormContents>
          <ContentLeft>
            <InputBox>
              <Label>Name</Label>
              <Input name="name" onChange={handleChange} value={formData.name} />
            </InputBox>
            <InputBox>
              <Label>E-mail</Label>
              <Input name="email" type="email" onChange={handleChange} value={formData.email} />
            </InputBox>
          </ContentLeft>
          <ContentRight>
            <InputBox>
              <Label>Phone</Label>
              <Input name="phone" onChange={handleChange} value={formData.phone} />
            </InputBox>
            <InputBox>
              <Label>Birth Date</Label>
              <Input name="birth_date" type="date" onChange={handleChange} value={formData.birth_date}/>
            </InputBox>
          </ContentRight>
        </FormContents>
        <Button type="submit">Submit</Button>
      </FormBox>
    </div>
  );
};

export default Form;
