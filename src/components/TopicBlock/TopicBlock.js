import style from './TopicBlock.module.css';

function TopicBlock(props) {
	return (
		<div className={props.className}>
			<div className={style.title_container}>
			<h2 className={style.titleName}>{props.topic}</h2>
			<p>更多</p>
			</div>
			<div className={style.cardList}>
				{props.cardList}
			</div>		
		</div>
	)
}

export default TopicBlock;