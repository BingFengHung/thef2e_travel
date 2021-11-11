import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const placeName = `台灣:Taiwan
   臺北市:Taipei
新北市:NewTaipei
桃園市:Taoyuan
臺中市:Taichung
臺南市:Tainan
高雄市:Kaohsiung
基隆市:Keelung
新竹市:Hsinchu
新竹縣:HsinchuCounty
苗栗縣:MiaoliCounty
彰化縣:ChanghuaCounty
南投縣:NantouCounty
雲林縣:YunlinCounty
嘉義縣:ChiayiCounty
嘉義市:Chiayi
屏東縣:PingtungCounty
宜蘭縣:YilanCounty
花蓮縣:HualienCounty
臺東縣:TaitungCounty
金門縣:KinmenCounty
澎湖縣:PenghuCounty
連江縣:LienchiangCounty`;

function Header() {
	let places = placeName.split(/\r?\n/);
	const placeList = places.map((i, idx) =>{ 
		const place = i.split(':')
		return (<option key={idx} value={place[1]}>{place[0]}</option>)
	});

	return (
		<div className={style.header}>
			<Link to={`/thef2e_travel/`}> 
			  <p className={style.logo}>Taiwan Have Fun</p> 
			</Link>
			
			<div> 
				<FontAwesomeIcon icon={faSearch}/> 
				<input type="search" placeholder="Explore your own activities"></input>
			</div>

			<div>
				<select>{placeList}</select>
			</div>
		</div>
	);
}

export default Header;