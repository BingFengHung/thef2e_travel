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

let current = 24;
let topic = ''


function MoreTopic() { 
	function loadMore() { 
		current += 30 
		let query = apis(topic, current, current - 24, '') 
		getData(query) 
		.then(res => { 
			let list = topicList;
			setTopicList(list.concat(res.map(item => <Card data={item}/>)))
		}) 
	}

  let params = useParams();
	topic = params.topic
	const [topicList, setTopicList] = useState([])

	useEffect(() => { 
		let query = apis(topic, 24, 0, '')
		console.log(query)
		getData(query)
		.then(res => {
			setTopicList(res.map(item => <Card className={style.card} data={item}/>))
		})
	}, [params])


	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				{topicList} 
			</div>
			<button onClick={() => loadMore()}>載入更多</button>
		</div>
	)
}

export default MoreTopic;