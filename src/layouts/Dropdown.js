import { useEffect, useRef, useState } from 'react';

import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

export default function Dropdown() {
	const [open, setOpen] = useState(false);
	const dropdownEl = useRef(); // {current: <div className="dropdown"></div>} -> ref.current.click()

	useEffect(() => {
		const handleClickOutside = (e) => {
			// console.log(e.target);
			if (!dropdownEl.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className='d-flex justify-content-end'>
			<div className='dropdown' ref={dropdownEl}>
				<DropdownToggle onClick={() => setOpen(!open)} />
				<DropdownMenu open={open} onClose={() => setOpen(false)}/>
			</div>
		</div>
	);
}
