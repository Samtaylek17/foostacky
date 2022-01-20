import Link from 'next/link';

export default function Navbar() {
	return (
		<section>
			<div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
				<nav className='relative' aria-label='Global'>
					<div className='flex justify-between'>
						<div>
							<Link href='/'>
								<a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>Home</a>
							</Link>

							<Link href='/'>
								<a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>Marketplace</a>
							</Link>
							<Link href='/'>
								<a className='font-medium mr-8 text-gray-500 hover:text-gray-900'>Blogs</a>
							</Link>
						</div>
						<div>
							<a href='/' className='font-medium mr-8 text-gray-500 hover:text-gray-900'>
								Wishlist
							</a>
							<a href='#' className='font-medium mr-8 text-indigo-600 hover:text-indigo-500'>
								Log in
							</a>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
}