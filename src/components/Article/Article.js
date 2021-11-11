import style from './Article.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Article(props) {
	if (props.data) {

	let result = props.Remarks.match(/[^0-9. ]+/g);

	// let remarkContent = <ol>{result.map(i => <li>{i}</li>)}</ol>
	// let list = result.map(i => <li>{i}</li>)	

	return (
		<div className={style.article}>
			<img src={props.picUrl} alt={props.picDescribe} />

			<div className={style.tag}>
				<div>
					<FontAwesomeIcon icon={faMap}/>
					<p>{props.address}</p>
				</div>

				<div>
					<FontAwesomeIcon icon={faCalendarAlt}/>
					<p>{props.updateTime}</p>
				</div>
			</div>

			<div className={style.content}> 
				<p>{props.Description}</p> 
				<p>{props.DescriptionDetail}</p>
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