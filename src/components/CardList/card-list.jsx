import Card from '../Card/card';
import './index.css';

// дестриктурируем пропс из родителя APP по ключу
const CardList = ({goods, onProductLike, currentUser}) => {
	// console.log(data)
	return (
		<div className="cards">
			{
				// пройдемся по каждому элементу массива, получим данные через дестриктуризацию
				// для реакта каждому объекту дестрикт. массива нужен уникальный ключ (индекс не очень из-за сортировки)
				// ключ нужен для понимания при рендеринге, какие объекты изменились

				goods.map( (item, index) => <Card key={item._id} {...item} onProductLike = {onProductLike} currentUser = {currentUser}/>)
			}
		</div>
	);
};

export default CardList;
