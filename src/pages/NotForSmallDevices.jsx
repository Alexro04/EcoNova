import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
`;

const MessageBox = styled.div`
  min-width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  padding: 1.8rem 2.6rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-100);
  text-align: center;

  & h1 {
    font-size: 2.2rem;
  }

  & p {
    margin-top: 12px;
    font-family: "Sono";
    font-size: 1.6rem;
    margin-bottom: 2rem;
    color: var(--color-grey-500);
  }
`;

function NotForSmallDevices() {
  return (
    <Overlay>
      <MessageBox>
        <h1>You can not access this website</h1>
        <p>
          This System was not designed for mobile or small devices. Try using it
          on a desktop, or laptop computer.
        </p>
      </MessageBox>
    </Overlay>
  );
}

export default NotForSmallDevices;
