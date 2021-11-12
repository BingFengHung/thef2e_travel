import style from './Modal.module.css'
import Article from '../Article/Article';
import { AppContext } from '../AppContext/AppContext';
import { useState, useContext } from 'react';
import eventBus from '../../utils/EventBus';


function Modal(props) {
	const context = useContext(AppContext) 
	const [display, setDisplay] = useState(null)

	eventBus.on('openArticle', () => { 
		setDisplay(style.display)
		console.log(style.display)
	})

	eventBus.on('closeArticle', () => {
		 setDisplay('')
		console.log('hi')
	});
	
	return (
		<div className={style.container + ' ' + (display)}>
				{ <Article data={context.store.hasOwnProperty('data') ? context.store.data: null}/> }
		</div>
	)
}

export default Modal;