export const SearchForm = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        // onKeyUp={searchQuery}
        // onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};
