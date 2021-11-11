import Card from "../Card/Card";
import { useState, useEffect } from "react";
import getData from "../../api/dataFetch";
import style from './MoreTopic.module.css'
import { useParams } from "react-router";

function apis(topic, top, skip, place='') {
		// let place = 'Taiwan'
		let places = place === 'Taiwan'? '': `/${place}`;
		return `v2/Tourism/${topic}${places}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`
}

function MoreTopic() {
  let params = useParams();
	const [topicList, setTopicList] = useState([])

	useEffect(() => { 
		let query = apis(params.topic, 30, 0, '')
		console.log(query)
		// let scenicQuery = `v2/Tourism/ScenicSpot${newName}?$top=${top}&$skip=${skip}&$filter=Picture/PictureUrl1 ne null&$format=JSON`

		getData(query)
		.then(res => {
			setTopicList(res.map(item => <Card data={item}/>))
		})
	}, [params])


	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				{topicList} 
			</div>
			<button>載入更多</button>
		</div>
	)
}

export default MoreTopic;