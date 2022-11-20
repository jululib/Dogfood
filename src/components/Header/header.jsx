import './index.css';


function Header({children, user, onUpdateUser}) {

  // функция, чтобы захардкодить изменяемые данные пользователя, так как нет, сериализации из формы
  const handleClickButtonEdit = (e)=> {
    e.preventDefault();
    onUpdateUser({name: 'Иннокентий', about: 'Любитель собак'})
  }

  return (
    <header className='header'>
      <div className="container">
        {user?.email && <span>{user?.email}</span>}
        {user?.name && <span>{user?.name}</span>}
        <button className='btn' onClick={handleClickButtonEdit}>Изменить</button>
        <div className="header__wrapper"> 
        {children}
        </div>
      </div>
      
    </header>
  )
}

export default Header;
