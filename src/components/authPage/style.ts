import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dee2e5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  inset: 0;
  z-index: 3;
  padding: 1.6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  background-color: #eee;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1.6rem;
`;

export const FormTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

export const FormColBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & > label {
    min-width: 8rem;
    font-size: 1.4rem;
  }

  & > input {
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.2rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.2rem;
    outline: none;
    border: none;
  }
`;

type ButtonProps = {
  $bgColor?: "black" | "blue";
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  min-width: 9rem;
  padding: 0.8rem 1rem;
  outline: none;
  border: none;
  border-radius: 0.4rem;

  ${(props) => {
    switch (props.$bgColor) {
      case "black":
        return css`
          background-color: #262626;
          color: #fff;
        `;
      default:
        return css`
          background-color: #388cff;
          color: #fff;
        `;
    }
  }};
`;
