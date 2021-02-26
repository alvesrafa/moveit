import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.blue};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    color: #fff;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      > div:first-child {
        display: none;
      }
    }

    > div:first-child {
      > img {
        width: 74%;
      }
    }
    > div:last-child {
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      > img {
        width: 40%;
        margin-bottom: 6rem;
      }
      @media (max-width: 500px) {
        padding: 1rem;
        > img {
          width: 100%;
        }
      }
      > h3 {
        font-size: 2.25rem;
        font-weight: 500;
      }

      .login-wrapper {
        margin-top: 2rem;
        margin-right: 10rem;
        @media (max-width: 1280px) {
          margin-right: 0;
        }
        .github-wrapper {
          display: flex;
          align-items: center;
          color: #b2b9ff;
          > svg {
            width: 46px;
            height: 46px;
            margin-right: 1rem;
          }
          > p {
            font-size: 1.25rem;
          }
        }

        > button {
          width: 100%;
          margin-top: 2rem;
          border: 0;
          border-radius: 8px;
          padding: 2rem;
          transition: filter 0.2s;
          color: #fff;
          background: #4953b8;
          font-weight: 700;

          display: flex;
          align-items: center;
          justify-content: center;
          > svg {
            margin-left: 1rem;
          }
          &:hover {
            cursor: pointer;
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
