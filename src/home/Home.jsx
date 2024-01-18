import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Navbar from '../components/navbar/Navbar';
import { useEffect, useState } from 'react';

const Home = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch('/books.json')
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);
  console.log(allBooks);
  return (
    <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
      <Navbar></Navbar>
      <Header></Header>
      <Main allBooks={allBooks}></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
