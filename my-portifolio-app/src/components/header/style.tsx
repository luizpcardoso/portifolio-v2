import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #1b1f38;

  section {
    height: 100vh;
    width: 100vw;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .header__title {
      height: 100%;
      width: 50%;
      color: #ffffff;
      display: flex;
      justify-content: center;
      flex-direction: column;

      p {
        font-family: "Inter", sans-serif;
        font-size: 4rem;
        font-weight: bold;
      }

      span {
        color: #ff4a57;
      }
    }

    .header__image {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;

      img {
        max-height: 800px;
        height: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    height: 450px;
    section {
      max-height: 500px;
      margin-top: 30px;
      flex-direction: row-reverse;
      .header__title {
        box-sizing: border-box;
        padding: 10px;

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
