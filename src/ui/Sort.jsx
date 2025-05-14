import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import { createContext, useContext } from "react";

const SortContext = createContext();

function Sort({ children, defaultBy, defaultOrder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort-by") || defaultBy;
  const sortOrder = searchParams.get("sort-order") || defaultOrder;
  const handleSortBy = (e) => {
    searchParams.set("sort-by", e.target.value);
    setSearchParams(searchParams);
  };

  const handleSortOrder = (e) => {
    searchParams.set("sort-order", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <SortContext.Provider
      value={{ sortBy, sortOrder, handleSortBy, handleSortOrder }}>
      {children}
    </SortContext.Provider>
  );
}

function SortBy({ options }) {
  const { sortBy, handleSortBy } = useContext(SortContext);
  return (
    <Select
      type="white"
      value={sortBy}
      onChange={handleSortBy}
      options={options}
    />
  );
}

function SortOrder({ options }) {
  const { sortOrder, handleSortOrder } = useContext(SortContext);
  return (
    <Select value={sortOrder} onChange={handleSortOrder} options={options} />
  );
}

Sort.SortBy = SortBy;
Sort.SortOrder = SortOrder;

export default Sort;
