import React from 'react';
import { useState } from 'react';

// define a context that will be shared within all the app.
export const AppContext = React.createContext(null);

export const ContextWrapper = (props) =>{
	const [store, setStore] = useState({});

	const [actions, setActions] = useState({
		passData: val => setStore({...store, data: val})
	})

	return (
		<AppContext.Provider value={{store, actions}}>
			{props.children}
		</AppContext.Provider>
	);
}
