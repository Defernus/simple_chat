import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Start from './components/Start'
import Chat from './components/Chat'

const App = () => (
	<Router>
		<Route path="/" exact component={Start} />
		<Route path="/chat-room" component={Chat} />
	</Router>
);

export default App;