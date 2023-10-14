import { useEffect, useState } from 'react';

import * as postApi from '../../apis/post-api';
import PostCreateToggle from './PostCreateToggle';
import PostList from './PostList';

export default function PostContainer() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			const res = await postApi.getAllPostIncFriend();
			setPosts(res.data.posts);
		};
		fetchPost();
	}, []);

	return (
		<div className='mx-auto py-4 max-w-152'>
			<div className='mx-2 d-flex flex-column gap-3'>
				<PostCreateToggle />
				<PostList posts={posts}  setPosts={setPosts} />
			</div>
		</div>
	);
}
