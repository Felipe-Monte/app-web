import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    padding-top: 10px;
  }

  > svg {
    margin-top: -10px;
  }
`;
