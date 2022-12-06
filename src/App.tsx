import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Main/Profile';
import Users from './components/Main/Users/Users';
import Navbar from './components/Main/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { initializeApp } from './store/slices/appSlice';
import { useAppSelector } from './hooks/hooks';

function App() {
	const { isAuth } = useAppSelector(state => state.auth)



	return (
		<div className="wrapper">
			<Header />
			<main className='main'>
				<Navbar />
				<div className='routes w-full'>
					<Routes>
						<Route path='/' element={<Navigate to={'/profile'} />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/profile/:id' element={<Profile />} />
						<Route path='/users' element={<Users />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;









/*  <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>  */