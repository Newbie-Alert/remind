import styled, { css } from "styled-components";

type SidebarItemProps = {
  $isCurrentPage: boolean;
};

export const SidebarItem = styled.li<SidebarItemProps>`
  width: 100%;
  border-radius: 0.5rem;
  padding: 1.2rem;
  color: #000;
  cursor: pointer;
  list-style: none;
  font-size: 1.5rem;
  transition: all 0.25s ease;

  ${(props) => {
    if (props.$isCurrentPage) {
      return css`
      background-color: rgba(34, 34, 34, 0.8);\
      color: #fff;
    `;
    }
  }}

  &:hover {
    background-color: rgba(34, 34, 34, 0.8);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    padding: 0.8rem 0.84rem;
  }
`;
