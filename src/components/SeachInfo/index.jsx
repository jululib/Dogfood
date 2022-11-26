import "./index.css";

// const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => 
// txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];


const SeachInfo = ({searchText, searchCount}) => {
	return (
		searchText && <section className="search-title">
			По запросу <span>{searchText}</span> найдено {searchCount} товаров
		</section>
	);
};

export default SeachInfo;
