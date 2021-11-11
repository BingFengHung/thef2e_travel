import style from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
	const data = props.data; 
	
	if(!data.Picture.hasOwnProperty('PictureDescription1')) { 
		data.Picture.PictureDescription1 = 'No Description' 
	}

	return (
		<div className={style.card}>
			<img src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1}/>

			<div className={style.info}>
				<p className={style.name}>{data.Name}</p> 
				<p> 
					<FontAwesomeIcon icon={faMap}/> 
					{data.Address} 
				</p>
			</div>
		</div>
	)
}

export default Card;