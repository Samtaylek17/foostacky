import { Modal } from '@components/common';
import { CourseHero, Curriculum, Keypoints } from '@components/course';
import { BaseLayout } from '@components/layout';
import { getAllCourses } from '@content/courses/fetcher';

export default function Course() {
	return (
		<>
			<div className='py-4'>
				<CourseHero />
			</div>

			<Keypoints />

			<Curriculum />

			<Modal />
		</>
	);
}

export function getStaticPaths() {
	const { data } = getAllCourses();
	return {
		paths: data.map((c) => ({ params: { slug: c.slug } })),
		fallback: false,
	};
}

Course.Layout = BaseLayout;
