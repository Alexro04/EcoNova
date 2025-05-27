import { Link } from "react-router-dom";
import styled from "styled-components";
import useDarkMode from "../context/useDarkMode";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 150px;
`;
function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "logo-white.png" : "logo-black.png";
  return (
    <Link to="/">
      <ImageContainer>
        <Img src={src} alt="Hotel Logo" />
      </ImageContainer>
    </Link>
  );
}

export default Logo;
