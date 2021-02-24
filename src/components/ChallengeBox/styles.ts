import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 60px ${(props) => props.theme.boxShadow};
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  .blocked {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }
    > p {
      display: flex;
      align-items: center;
      text-align: left;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;

      > img {
        width: 40px;
        height: 40px;
        margin-right: 1.5rem;
      }
    }
  }

  .unlocked {
    height: 100%;
    display: flex;
    flex-direction: column;

    > header {
      color: ${(props) => props.theme.blue};
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme.grayLine};
    }
    > main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > strong {
        font-weight: 600;
        font-size: 2rem;
        color: ${(props) => props.theme.title};
        margin: 1.5rem 0 1rem;
      }
    }
    > footer {
      margin-top: 0.8rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      > button {
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        color: ${(props) => props.theme.white};
        font-size: 1rem;
        font-weight: 600;
        transition: filter 0.2s;

        &.challenge-succeeded {
          background: ${(props) => props.theme.green};
        }
        &.challenge-failed {
          background: ${(props) => props.theme.red};
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
