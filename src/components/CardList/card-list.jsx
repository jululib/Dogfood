import Card from '../Card/card';
import './index.css';
import data from "../../assets/data.json"

const CardList = () => {
	console.log(data)
	return (
		<div className="cards">
			{
				// пройдемся по каждому элементу массива, получим данные через дестриктуризацию
				data.map( item => <Card {...item}/>)
			}
		</div>
	);
};

export default CardList;
