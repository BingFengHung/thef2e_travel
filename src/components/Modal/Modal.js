import style from './Modal.module.css'
import Article from '../Article/Article';
import { AppContext } from '../AppContext/AppContext';
import { useContext } from 'react';

function Modal() {
	const context = useContext(AppContext)
	return (
		<div>
			{ <Article data={context.store.hasOwnProperty('data') ? context.store.data: null}/> }
		</div>
	)
}

export default Modal;