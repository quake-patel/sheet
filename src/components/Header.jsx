import Search from "./Search";

const Header = ({ handleFilter }) => {
  return (
    <header>
      <div className='header-inner'>
        <h1 className='logo'>Logo</h1>
        <Search handleFilter={handleFilter} />
      </div>
    </header>
  );
};

export default Header;
