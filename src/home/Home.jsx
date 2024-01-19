import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Navbar from '../components/navbar/Navbar';
import { useEffect, useState } from 'react';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [newSearch, setNewSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    setNewSearch(e.target.value);
    const findBook = allBooks.filter(book =>
      book.bookname.toLowerCase().includes(newSearch.toLowerCase())
    );
    setAllBooks(findBook);
  };

  const handleSortBy = e => {
    e.preventDefault();
    setSortBy(e.target.value);
    if (sortBy === 'aec') {
      const aecValue = allBooks.sort((a, b) =>
        a.bookname.localeCompare(b.bookname)
      );
      console.log(aecValue);
    } else if (sortBy === 'dec') {
      const decValue = allBooks.sort((a, b) =>
        b.bookname.localeCompare(a.bookname)
      );
      console.log(decValue);
    }
    console.log(sortBy);
  };
  const handleAddToFavorite = id => {
    console.log(id);
    const favoriteBook = allBooks.find(book => book.id === id);
    console.log(favoriteBook);

    setFavorite(!favorite);
  };

  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar></Navbar>
      <Header handleSearch={handleSearch} handleSortBy={handleSortBy}></Header>
      <Main
        allBooks={allBooks}
        handleAddToFavorite={handleAddToFavorite}
        favorite={favorite}
      ></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
