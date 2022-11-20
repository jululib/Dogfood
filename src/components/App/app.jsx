import { useState, useEffect } from 'react';
import CardList from '../CardList/card-list';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Logo from '../Logo/logo';
import Search from '../Search/search';
import Sort from '../Sort/sort';
import './index.css';
// import data from "../../assets/data.json"
import SeachInfo from '../SeachInfo';
import api from '../../utils/api';
import useDebounce from '../../hooks/useDebounce';



function App() {
  // получаем данные через состояние
  const [cards, setCards] = useState([]);
  const [saerchQuery, setSaerchQuery] = useState('')
  // заведем состояние пользователей
  const [currentUser, setCurrentUser] = useState(null);
  const deboubnceSaerchQuery = useDebounce(saerchQuery, 300)

  // реализуем рендер товаров из состояния карточек, из изменения
    useEffect(()=> {
      // Метод Promise.all принимает массив промисов и возвращает новый промис. 
      // Используем здесь, потому что рендер, различается в зависимости от авториз. пользователя
      Promise.all([api.getProductsList(), api.getUsersInfo()])
      // промисс будет успешно разрешен, если каждый из промисов тоже успешно разрешились
      .then(([productsData, usersData]) => {
        setCards(productsData.products)
        setCurrentUser(usersData);
      })
      .catch( err => console.log(err))
    }, [])  
        
        // переписали 2 отдельных промиса на Promise.all, выше
    //   api.getProductsList()
    //     .then((cardsData) =>{
    //         // уставливает состояние карточек
    //         setCards(cardsData.products);
    //     })
    //   api.getUsersInfo()
    //     .then((usersData) => {
    //         // уставливает состояние пользователей
    //         setCurrentUser(usersData);
    //     })
    // }, [])



  // функция по запросу отфильтрованных данных, переделали, на получение отфильтрованных данных с сервера
  const handleRequest = () => {
      api.search(saerchQuery)
        .then((searchResult) => {
          setCards(searchResult)
        })
      .catch( err => console.log(err))
    }

    // функция по запросу отфильтрованных данных
    // фильтрация выполняется по data, а не cards, т7к. однажды изменив состояние, первоначальное не вернуть
    // приводим все к одному регистру
    // const filterCards = cards.filter(item => item.name.toUpperCase().includes(saerchQuery.toUpperCase()));
    // // устанавливаем состояние отфильтрованных карточек
    // setCards(prevState => filterCards);
 

  // изменение сотояния при каждом введенном смволе и фильтрация сразу после ввода символа
  // добавили функциюиспользование deboubnceSaerchQuery, вместо saerchQuery, чтобы отправка введенных данных выполнялась с задержкой
  useEffect(()=>{
    handleRequest()
    console.log("INPUT", deboubnceSaerchQuery);
  },[deboubnceSaerchQuery])

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

  // функция обновления данных пользователя по клику
  const handleUserUpdate = (dataUserUpdate) => {
    api.setUserInfo(dataUserUpdate)
      .then((newDataUser) => {
        setCurrentUser(newDataUser)
      })
  };

  return (
    <>
    {/* пробросили функцию из родителя арр в ребенка хедер через пропс */}
      <Header user ={currentUser} onUpdateUser = {handleUserUpdate}>
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
