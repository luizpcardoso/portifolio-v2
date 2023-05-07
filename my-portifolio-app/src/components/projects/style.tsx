import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #1b1f38;

  section {
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    color: #ff4a57;
    font-family: "Inter", sans-serif;
    font-size: 4rem;
    font-weight: bold;
    height: 10%;
  }
  .skills-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }

  @media (max-width: 600px) {
    max-height: 800px;
    section {
      height: 700px;
      width: auto;
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .skills-container {
      width: auto;
      height: 700px;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      justify-content: center;
      overflow-x: scroll;
      gap: 5px;
    }
  }
`;
