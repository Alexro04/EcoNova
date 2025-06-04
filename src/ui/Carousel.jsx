import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 40px auto;
`;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 10px;
  padding: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  scroll-snap-align: start;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  & img {
    width: 100%;
    display: block;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  z-index: 10;

  & svg {
    stroke: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${(props) =>
    props.type === "prev" &&
    css`
      left: 30px;
    `}
  ${(props) =>
    props.type === "next" &&
    css`
      right: 30px;
    `}
`;

function Carousel({ pictures }) {
  const carouselRef = useRef();
  const [showPrev, setShowPrev] = useState(true);
  const [showNext, setShowNext] = useState(true);

  function updateButtonVisibility() {
    const el = carouselRef.current;
    if (!el) return;
    setShowNext(el.scrollLeft > 10);
    setShowPrev(el.scrollLeft + el.clientWidth < el.scrollWidth);
    console.log(el.scrollLeft, el.clientWidth, el.scrollWidth);
  }

  function scrollCarousel(direction) {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: direction * width,
      behavior: "smooth",
    });
  }

  useEffect(function () {
    const el = carouselRef.current;
    updateButtonVisibility();
    if (el) {
      el.addEventListener("scroll", updateButtonVisibility);
      window.addEventListener("resize", updateButtonVisibility);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", updateButtonVisibility);
        window.removeEventListener("resize", updateButtonVisibility);
      }
    };
  }, []);

  return (
    <Wrapper>
      <Container ref={carouselRef}>
        {pictures.map((picture, index) => (
          <Slide key={index}>
            <img src={picture.url} alt="Cabin Picture" />
          </Slide>
        ))}
      </Container>

      {showPrev && (
        <Button type="next" onClick={() => scrollCarousel(1)}>
          <FaArrowRight />
        </Button>
      )}
      {showNext && (
        <Button type="prev" onClick={() => scrollCarousel(-1)}>
          <FaArrowLeft />
        </Button>
      )}
    </Wrapper>
  );
}

export default Carousel;
