import { SearchForm } from "@/components/search-form/search-form";

export const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            Shop <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </a>

          <SearchForm />
        </div>
      </nav>
    </header>
  );
};
