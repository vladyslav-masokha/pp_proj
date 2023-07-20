import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import DoramePage from './Pages/DoramePage/DoramePage';
import Error from './Pages/ErrorPage/ErrorPage';
import MainPage from './Pages/MainPage/MainPage';
import AnimePage from './Pages/AnimePage/AnimePage';
import LearningPage from './Pages/LearningPage/LearingPage';
import AboutPage from './Pages/AboutPage/AboutPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/dorames' element={<DoramePage />} />
				<Route path='/anime' element={<AnimePage />} />
				<Route path='/learning' element={<LearningPage />} />
				<Route path='/admin-cv' element={<AboutPage />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
