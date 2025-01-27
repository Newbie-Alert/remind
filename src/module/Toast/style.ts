import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toast = styled(ToastContainer)`
  width: 30rem;
  z-index: 999999999;

  .Toastify__toast {
    background-color: #343a40;
  }
`;
