import PostAction from './PostAction';
import PostAuthor from './PostAuthor';
import PostContent from './PostContent';
import PostDropdown from './PostDropdown';
import PostResponse from './PostResponse';
import useAuth from '../../hooks/useAuth';

export default function Post({ post, setPosts }) {
	const { authenticatedUser } = useAuth();

	return (
		<div className='border bg-white shadow-sm px-3 rounded-lg tw-pt-3'>
			<div className='d-flex justify-content-between'>
				<PostAuthor post={post} />
				{post.User.id === authenticatedUser.id && <PostDropdown setPosts={setPosts}  post={post} />}
			</div>
			<PostContent post={post} />
			<PostResponse />
			<hr className='hr-sm my-0' />
			<PostAction />
		</div>
	);
}
