import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import StyledInput from "./StyledInput";
import Button from "./Button";
import firebase from "../firebase";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 50px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const PositionedButton = styled(Button)`
  justify-self: end;
  margin-top: 50px;
  height: 70px;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7em;
`;

const validationSchema = yup.object({
  name: yup.string().required().max(20),
  surname: yup.string().required().max(20),
  email: yup.string().required().email(),
  city: yup.string().required().max(30),
  adress: yup.string().required(),
  postCode: yup.string().required(),
  deliveryType: yup.string().required(),
});

const CheckoutForm = ({ cart, toggleFinished, orderID }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          city: "",
          adress: "",
          postCode: "",
          deliveryType: "",
          deliveryNote: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log("data: ", data, "cart: ", cart);
          firebase.firestore().collection("orders").add({
            orderID,
            userData: data,
            orderedItems: cart,
          });
          toggleFinished();
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Wrapper>
              <div>
                <StyledInput errors={errors} touched={touched} name="name" />
                <StyledInput errors={errors} touched={touched} name="surname" />
                <StyledInput errors={errors} touched={touched} name="email" />
              </div>
              <div>
                <span>Choose delivery: </span>
                {errors.deliveryType && (
                  <ErrorMsg>delivery type is a required field</ErrorMsg>
                )}
                <RadioWrapper>
                  <StyledInput name="deliveryType" value="DPD" type="radio" />
                  <StyledInput name="deliveryType" value="GLS" type="radio" />
                  <StyledInput name="deliveryType" value="UPC" type="radio" />
                </RadioWrapper>
                <StyledInput
                  errors={errors}
                  touched={touched}
                  name="deliveryNote"
                  type="textarea"
                />
              </div>
              <div>
                <StyledInput errors={errors} touched={touched} name="city" />
                <StyledInput errors={errors} touched={touched} name="adress" />
                <StyledInput
                  errors={errors}
                  touched={touched}
                  name="postCode"
                />
              </div>

              <PositionedButton
                type="submit"
                disabled={isSubmitting || cart.length <= 0}
              >
                MAKE ORDER
              </PositionedButton>
            </Wrapper>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
