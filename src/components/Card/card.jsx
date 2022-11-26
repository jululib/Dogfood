import cn from 'classnames';
import { isLike } from '../../utils/product_utils';
import './index.css';
import {ReactComponent as Save} from "./save.svg";


// _id и likes забрали из {...item} из card-list
const Card = ({name, _id, likes, price, discount, wight, description, pictures, tags, onProductLike, currentUser})  => {
	const discountPrice = Math.round(price - (price/100*discount));
// вынесли в отдельную функцию isLike в утилиты
	const checkLiked = isLike(likes, currentUser._id)

	function handleLikeClick(){
		onProductLike({_id, likes})
	}

	return (
		// разметка
		<div className="card">
			<div className="card__sticky card__sticky_type_top-left">
				{/* если скидка не = 0, то она рендерится (условия через лог.оператор) */}
				{discount !== 0 && <span className="card__discount">{`-${discount}%`}</span>}
				{tags && tags.map(tag => <span key={tag} className={cn('tag', {[`tag_type_${tag}`]: true}, )}>{tag}</span>)}
			</div>
			<div className="card__sticky card__sticky_type_top-right">
				<button className={cn('card__favorite', {'card__favorite_is-active':checkLiked})} onClick={handleLikeClick}>
					<Save className="card__favorite-icon"/>
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
