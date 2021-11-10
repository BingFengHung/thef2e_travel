import style from './Home.module.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import getData from '../../api/dataFetch';

function Home() {
	const [cardList, setCardList] = useState([])

	useEffect(() => {
		let name = 'Taiwan'
		let newName = name === 'Taiwan'? '': `/${name}`;
		let top = 30;
		let skip = 0;

		let query = `v2/Tourism/ScenicSpot${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`
		
		getData(query)
		.then(res => {
			const data = []
			res.forEach(item => {
				data.push(<Card data={item}/>)
			})

			setCardList(data)
		});
	}, [])


	return (
		<div className={style.home}>
			{cardList}
		</div>
	)
}

export default Home;