import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 150px;
`;
function Logo() {
  return (
    <ImageContainer>
      <Img src="Logo.svg" alt="Hotel Logo" />
    </ImageContainer>
  );
}

export default Logo;
