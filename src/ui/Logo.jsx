import { Link } from "react-router-dom";
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
    <Link to="/">
      <ImageContainer>
        <Img src="Logo.svg" alt="Hotel Logo" />
      </ImageContainer>
    </Link>
  );
}

export default Logo;
