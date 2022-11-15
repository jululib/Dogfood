import CardList from '../CardList/card-list';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Sort from '../Sort/sort';
import './index.css';


function App() {
  return (
    <>
      <Header/>
      <main className='content container'>
       <Sort/>
        <div className='content__cards'>
         <CardList/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App;
