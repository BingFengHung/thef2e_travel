import style from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
	const data = props.data;

	return (
		<div className={style.card}>
			<img src={data.Picture.PictureUrl1} alt={props.Picture?.PictureDescription1}/>

			<div className={style.info}>
				<p className={style.name}>{data.Name}</p>
			</div>

			<p> 
				<FontAwesomeIcon icon={faMap}/> 
				{data.Address}
			</p>
		</div>
	)
}

export default Card;