import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers/getHeroesByName";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="mt-4">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn animate__faster"
            style={{
              display: showSearch ? "" : "none",
            }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn animate__faster"
            style={{
              display: showError ? "" : "none",
            }}
          >
            No hero with <b>{q}</b>
          </div>

          <div className="row rows-cols-1 row-cols-md-4 g-2 gap-2 justify-content-between">
            {heroes.map((hero) => {
              return <HeroCard key={hero.id} {...hero} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
