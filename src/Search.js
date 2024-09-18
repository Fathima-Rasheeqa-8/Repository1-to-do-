import './Search.css';

const Search = ({search,setSearch}) => {
  return (
    <form className="search-container" onSubmit={(e)=>e.preventDefault()}> 
      <input 
        type="text"
        placeholder="Search an item..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
