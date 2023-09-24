import profileImage from '../assets/profileImage.png';

export default function Avatar({ src, size, borderSize, borderColor }) {
	// const classes = 'border border-1 border-white';
	const classes = ` ${borderSize ? 'border border-' + borderSize : ''} ${
		borderColor ? 'border-' + borderColor : ''
	}  `;

	return (
		<img
			src={src || profileImage}
			className={`rounded-circle cursor-pointer ${classes}`}
			alt='user'
			width={size}
			height={size}
		/>
	);
}
