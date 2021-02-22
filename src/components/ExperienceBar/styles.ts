import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  > span {
    font-size: 1rem;
  }
  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.grayLine};
    margin: 0 1.5rem;
    position: relative;
    > div {
      height: 4px;
      border-radius: 4px;
      background: ${(props) => props.theme.green};
    }
    > span.current-exp {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`;
