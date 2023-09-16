import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

const menulist = [
	{
		icon: <i className='fa-solid fa-home' />,
		pathname: '/',
	},
	{
		icon: <i className='fa-solid fa-user-friends' />,
		pathname: '/friend',
	},
];

export default function Menu() {
	const location = useLocation();
	// console.log(location );

	return (
		<div className='collapse navbar-collapse justify-content-center'>
			<div className='navbar-nav space-x-1'>
				{/* <MenuItem to={'/'} active={location.pathname === '/'}>
					<i className='fa-solid fa-home' />
				</MenuItem>
				<MenuItem to={'/friend'} active={location.pathname === '/friend'}>
					<i className='fa-solid fa-user-friends' />
				</MenuItem> */}

				{menulist.map((el) => (
					<MenuItem
						key={el.pathname}
						to={el.pathname}
						active={location.pathname === el.pathname}
					>
						{el.icon}
					</MenuItem>
				))}
			</div>
		</div>
	);
}
