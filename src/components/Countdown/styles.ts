import styled from 'styled-components';

export const Container = styled.div`
  .timer-wrapper {
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${(props) => props.theme.title};

    > div {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      background: ${(props) => props.theme.white};
      box-shadow: 0 0 60px ${(props) => props.theme.boxShadow};
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      > span {
        flex: 1;
      }

      > span:first-child {
        border-right: 1px solid #f0f1f3;
      }
      > span:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  }
  > button[type='button'] {
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    font-size: 1.5rem;
    font-weight: 600;
    transition: background 0.2s;

    &.inactive {
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
    }
    &.inactive:hover {
      background: ${(props) => props.theme.blueDark};
    }
    &.active {
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.title};
    }
    &.active:hover {
      background: ${(props) => props.theme.red};
      color: ${(props) => props.theme.white};
    }

    &:disabled {
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.text};
      cursor: not-allowed;
    }
  }
`;
