const Search = ({ handleFilter }) => {
  return (
    <div className='search-box'>
      <input
        placeholder='Search...'
        className='input'
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default Search;
