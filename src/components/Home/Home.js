import style from './Home.module.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import getData from '../../api/dataFetch';
import TopicBlock from '../TopicBlock/TopicBlock';
import topics from '../../data/topic';

function Home() {
	const [scenicSpotList, setScenicSpotList] = useState([])
	const [restaurantList, setRestaruantList] = useState([])
	const [hotelList, setHotelList] = useState([])
	const [activityList, setActivityList] = useState([])

	console.log('Home in')
	useEffect(() => {
		let name = 'Taiwan'
		let newName = name === 'Taiwan'? '': `/${name}`;
		let top = 4;
		let skip = 0;

		let scenicQuery = `v2/Tourism/ScenicSpot${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`
		
		getData(scenicQuery)
		.then(res => {
			const data = []
			res.forEach((item, idx) => {
				data.push(<Card key={idx} data={item}/>)
			})

			setScenicSpotList(data)
		});

		let restaurantQuery = `v2/Tourism/Restaurant${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`
		getData(restaurantQuery)
		.then(res => {
			const data = []
			res.forEach((item, idx) => {
				data.push(<Card key={idx} data={item}/>)
			})

			setRestaruantList(data);
		})

		let hotelQuery = `v2/Tourism/Hotel${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`;
		getData(hotelQuery)
		.then(res => {
			setHotelList(res.map((item, idx) => <Card key={idx} data={item}/>))
		})

		let activityQuery = `v2/Tourism/Activity${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`;
		getData(activityQuery)
		.then(res => {
			setActivityList(res.map((item, idx) => <Card key={idx} data={item}/>))
		})

	}, [])


	return (
		<div className={style.home}>
			<TopicBlock className={style.block} title='景點' topic={topics[0]} cardList={scenicSpotList}></TopicBlock>
			<TopicBlock className={style.block} title='餐飲' topic={topics[1]} cardList={restaurantList}></TopicBlock>
			<TopicBlock className={style.block} title='旅宿' topic={topics[2]} cardList={hotelList}></TopicBlock>
			<TopicBlock className={style.block} title='活動' topic={topics[3]} cardList={activityList}></TopicBlock>
		</div>
	)
}

export default Home;