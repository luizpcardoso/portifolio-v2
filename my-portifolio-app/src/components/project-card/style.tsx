import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 300px;
  background-color: #2b2d41;
  box-sizing: border-box;
  padding: 20px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.4);
  justify-content: space-between;

  .details__section {
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .icon {
    font-size: 2.5rem;
    color: #ff4a57;
    width: 2.6rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #ff4a57;
  }

  p {
    font-size: 0.8rem;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
  }
  .links__section {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 50px;

    .icon:hover {
      font-size: 2.8rem;
      color: #ec888f;
    }
  }

  @media (max-width: 600px) {
    height: 200px;
    width: 40%;
    gap: 5px;
    padding: 8px;
    box-sizing: border-box;

    .icon {
      font-size: 2em;
      color: #ff4a57;
    }

    h3 {
      font-size: 1em;
    }
    p {
      font-size: 0.8em;

      overflow-y: scroll;
    }
    .deails__tecnologies {
      display: none;
    }
  }
`;
