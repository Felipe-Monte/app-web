import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    top: -5px;
    right: -5px;
    position: absolute;

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    font-size: 10px;
    font-weight: bold;

    background-color: #ef4444;
    border-radius: 50%;
  }
`;
