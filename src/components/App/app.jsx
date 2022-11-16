import { useState, useEffect } from 'react';
import CardList from '../CardList/card-list';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Logo from '../Logo/logo';
import Search from '../Search/search';
import Sort from '../Sort/sort';
import './index.css';
import data from "../../assets/data.json"
import SeachInfo from '../SeachInfo';



function App() {
  // получаем данные через состояние
  const [cards, setCards] = useState(data);
  const [saerchQuery, setSaerchQuery] = useState('')

  // функция по запросу отфильтрованных данных
  const handleRequest = () => {
    // фильтрация выполняется по data, а не cards, т7к. однажды изменив состояние, первоначальное не вернуть
    // приводим все к одному регистру
    const filterCards = data.filter(item => item.name.toUpperCase().includes(saerchQuery.toUpperCase()));
    // устанавливаем состояние отфильтрованных карточек
    setCards(prevState => filterCards);
  }

  // изменение сотояния при каждом введенном смволе и фильтрация сразу после ввода символа
  useEffect(()=>{
    handleRequest()
    console.log("INPUT", saerchQuery);
  },[saerchQuery])

  // функция срабатывания поиска по клику
  const handleFormSubmit = (e) => {
    // исключаем событие по-умолчанию
    e.preventDefault();
    handleRequest();
  }

  // функция изменения состояния поиска
  const handleInputChange = (inputValue) => {
    setSaerchQuery(inputValue);
  }

  return (
    <>
      <Header>
        <>
        {/* перенесли в апп, чтобы не прокидывать поиск в хедерЕ а чтобы он был независимым */}
         <Logo className="logo logo_place_header" href="/" />
         {/* передаем функциb для поиска в пропсы */}
         <Search onSubmit = {handleFormSubmit} onInput = {handleInputChange}/>
        </>
      </Header>
      <main className='content container'>
        <SeachInfo searchCount={cards.length} searchText = {saerchQuery}/>
       <Sort/>
        <div className='content__cards'>
          {/* передаем эти данные в пропс, который потом прокинем в ребенка card-list */}
         <CardList goods = {cards}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App;
