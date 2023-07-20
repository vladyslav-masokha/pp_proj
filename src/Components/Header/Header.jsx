import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Navigation from './Navigation';

function Header() {
	return (
		<header className='header'>
			<div className='wrapper'>
				<div className='headerBody'>
					{/* logo */}
					<Link to='/' className='headerLogo'>
						<img src='./img/logo.png' alt='PP - персональний проєкт' />
					</Link>

					{/* navigation */}
					<Navigation />
				</div>
			</div>
		</header>
	);
}

export default Header;
