import style from './Article.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import eventBus from '../../utils/EventBus';

function Article(props) {
	const data = props.data

	if (data) { 
		let result = [];
		if (data.hasOwnProperty('Remark')) { 
			result = data.Remarks.match(/[^0-9. ]+/g); 
			// let remarkContent = <ol>{result.map(i => <li>{i}</li>)}</ol> 
			// let list = result.map(i => <li>{i}</li>)	
		} 
		
		return ( 
		<div className={style.container}>
			<div className={style.closeBtn} onClick={() => eventBus.dispatch('closeArticle')}>X</div>
			<div className={style.pictureBox}> 
				<img src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1} />
			</div>

			<div className={style.tag}>
				<div className={style.location}>
					<FontAwesomeIcon icon={faMap}/>
					<p>{data.Address}</p>
				</div>

				<div className={style.date}>
					<FontAwesomeIcon icon={faCalendarAlt}/>
					<p>{data.UpdateTime}</p>
				</div>
			</div>

			<div className={style.content}> 
				<p>{data.Description}</p> 
				<p>{data.DescriptionDetail}</p>
			</div>

			<div className={style.remark}>
				<ol>
					{result.map(i => <li>{i}</li>)}
				</ol>
			</div>

		</div>
	)
	}
	else {
		return (
			<div></div>
		)
	}
}

export default Article;