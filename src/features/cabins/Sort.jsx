import { useSearchParams } from "react-router-dom";
import Select from "../../ui/Select";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort-by") || "capacity";
  const sortOrder = searchParams.get("sort-order") || "asc";
  const handleSortBy = (e) => {
    searchParams.set("sort-by", e.target.value);
    setSearchParams(searchParams);
  };

  const handleSortOrder = (e) => {
    searchParams.set("sort-order", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Select
        value={sortBy}
        onChange={handleSortBy}
        options={[
          { value: "discount", label: "Sort by Discount" },
          { value: "capacity", label: "Sort by Capacity" },
          { value: "price", label: "Sort by Price" },
        ]}
      />
      <Select
        value={sortOrder}
        onChange={handleSortOrder}
        options={[
          { value: "asc", label: "ASC" },
          { value: "desc", label: "DESC" },
        ]}
      />
    </>
  );
}

export default Sort;
