import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-10 dark:border-neutral-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-5 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-white md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="w-full flex-row justify-center">
					<SocialLinks />
					{/* <p>&copy; 2023 Company Inc.</p>
					<p>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>{' '}
						·{' '}
						<a href="#" className="hover:underline">
							Terms
						</a>
					</p> */}
				</div>
			</Container>
		</footer>
	);
};
