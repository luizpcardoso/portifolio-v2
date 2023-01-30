import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  width: 280px;
  background-color: #2b2d41;
  box-sizing: border-box;
  padding: 20px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.4);

  gap: 0.5rem;
  .icon {
    font-size: 2.5rem;
    color: #ff4a57;
  }

  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
`;
