import styled from "styled-components";

const Img = styled.img`
  width: 150px;
`;
function Logo() {
  return (
    <div>
      <Img src="Logo.svg" alt="Hotel Logo" />
    </div>
  );
}

export default Logo;
