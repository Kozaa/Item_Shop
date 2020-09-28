import React from "react";
import styled from "styled-components";
import { Field } from "formik";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: ${({ type }) => (type === "radio" ? "5px" : 0)};
`;

const CustomInput = styled.input`
  border: none;
  border-bottom: black solid 2px;
  background-color: #eee;
  padding: 5px;

  font-size: 0.8em;
`;

const CustomTextarea = styled.textarea`
  border: none;
  border-bottom: black solid 2px;
  background-color: #eee;
  padding: 5px;
  font-family: inherit;
  height: 100px;

  font-size: 0.8em;
`;

const StyledRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-bottom: 50px;
`;

const ErrorMsg = styled.div`
  color: red;
`;

const StyledInput = ({ name, type = "input", value, errors, touched }) => {
  switch (type) {
    case "input":
      return (
        <Wrapper name={name}>
          <label htmlFor={name}>
            {name === "postCode" ? "post code" : name}:
          </label>
          <Field as={CustomInput} name={name} type={type} />
          {touched[name] && errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
        </Wrapper>
      );
    case "radio":
      return (
        <Wrapper type="radio">
          <label htmlFor={value}>
            <Field
              as={StyledRadio}
              name={name}
              id={value}
              value={value}
              type={type}
            />
            {value}
          </label>
        </Wrapper>
      );
    case "textarea":
      return (
        <Wrapper>
          <label htmlFor={name}>Delivery note:</label>
          <Field as={CustomTextarea} name={name} type="input" />
        </Wrapper>
      );
  }
};

export default StyledInput;
