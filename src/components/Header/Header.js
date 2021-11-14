import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import eventBus	from '../../utils/EventBus';
import { placeList } from '../../data/places';
import topics from '../../data/topic';

function Header() {
	const placeOptions = placeList.map((i, idx) => <option key={idx} value={i[1]}>{i[0]}</option>)
	const topicOptions = topics.map((i, idx) => <option key={idx} value={i['eng']}>{i.chis}</option>)

	return (
		<div className={style.header}>
			<Link to={`/thef2e_travel/`}> 
			  <p className={style.logo}>Taiwan Have Fun</p> 
			</Link>
			
			<div className={style.select}>
				<div className={style.custom_select}> 
				<select>
					<option disabled selected value>請選擇地點</option>
					{placeOptions}
					</select>
				</div>
				<div className={style.custom_select}>
				<select>
					<option disabled selected value>請選擇主題</option>
					{topicOptions}
					</select>
			</div>
			</div>

			<div> 
				<FontAwesomeIcon icon={faSearch}/> 
				<input type="search" placeholder="關鍵字搜尋"></input> 
				<button>搜尋</button>
			</div>

		</div>
	);
}

export default Header;