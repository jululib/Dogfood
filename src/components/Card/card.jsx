import './index.css';
import save from "./save.svg";



const Card = ({name, price, discount, wight, description, pictures})  => {
	const discountPrice = Math.round(price - (price/100*discount));
	return (
		// разметка
		<div className="card">
			<div className="card__sticky card__sticky_type_top-left">
				{/* если скидка не = 0, то она рендерится (условия через лог.оператор) */}
				{discount !==0 && <span className="card__discount">{`-${discount}%`}</span>}
			</div>
			<div className="card__sticky card__sticky_type_top-right">
				<button className='card__favourite'>
					<img src={save} alt="Добавить в избранное" className='card__favourite_icon'/>
				</button>
		
			</div>
				<a href="/product" className='card__link'>
					<img src={pictures} alt={description} className="card__image" />
					<div className="card__desc">
						{/* с помощью с условного выражения задаем: какой класс отображать при наличии скидки */}
						<span className={discount !==0 ? "card__old-price" : "card__price"}>{price}&nbsp;₽</span>
						{discount !==0 && <span className="card__price card__price_type_discount">{discountPrice}&nbsp;₽</span>}
						<span className="card__wight">{wight}</span>
						<p className="card__name">{name}</p>
					</div>
				</a>
				<a href="#" className="card__cart btn btn_type_primary">В корзину</a>
			</div>
			
	);
};

export default Card;
