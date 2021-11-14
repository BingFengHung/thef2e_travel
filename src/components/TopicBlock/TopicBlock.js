import style from './TopicBlock.module.css';
import { Link } from 'react-router-dom';

function TopicBlock(props) {
	return (
		<div className={props.className}>
			<div className={style.title_container}>
			<h2 className={style.titleName}>{props.topic['chis']}</h2>
			<p>
				<Link to={`/thef2e_travel/more/${props.topic['eng']}`}>更多</Link>
				</p>
			</div>
			<div className={style.cardList}>
				{props.cardList}
			</div>		

		</div>
	)
}

export default TopicBlock;