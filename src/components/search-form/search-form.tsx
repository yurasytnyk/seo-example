import { Search } from "@/components/search/search";

export const SearchForm = () => {
  return (
    <form className="d-flex" role="search">
      <Search placeholder="Search product" />
    </form>
  );
};
