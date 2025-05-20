import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_LIMIT } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!count) return null;

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const maxPage = Math.ceil(count / PAGE_LIMIT);
  const start = (currentPage - 1) * PAGE_LIMIT + 1;
  const stop = currentPage * PAGE_LIMIT;

  function nextPage() {
    const page = currentPage === maxPage ? currentPage : currentPage + 1;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const page = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      {count > PAGE_LIMIT ? (
        <P>
          showing {start} to {stop > count ? count : stop} of{" "}
          <strong>{count}</strong> results
        </P>
      ) : (
        <p>
          <strong>{count}</strong> result(s)
        </p>
      )}
      {count > PAGE_LIMIT && (
        <Buttons>
          <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
            <HiChevronLeft />
            <span>Previous</span>
          </PaginationButton>
          <PaginationButton
            onClick={nextPage}
            disabled={currentPage === maxPage}>
            <span>Next</span>
            <HiChevronRight />
          </PaginationButton>
        </Buttons>
      )}
    </StyledPagination>
  );
}

export default Pagination;
