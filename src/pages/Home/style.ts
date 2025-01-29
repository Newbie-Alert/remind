import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListTitle = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: -0.1rem;
`;

export const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & div:nth-child(1) {
    border-left: 1px solid #dee2e5;
  }
`;
export const HeaderData = styled.div`
  width: 100%;
  min-width: fit-content;
  max-width: 24rem;
  border-right: 1px solid #dee2e5;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Row = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #dee2e5;

  border-radius: 0.5rem;
`;

export const RowData = styled.div`
  width: 100%;
  min-width: fit-content;
  max-width: 24rem;
  font-size: 1.2rem;
  padding: 1rem 0.4rem;

  & > p {
    max-width: 10rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
