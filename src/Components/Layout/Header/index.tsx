import Image from 'next/image';

const Header = () => {
	return (
		<header className="bg-black/40">
			<p className="logo">
				<Image src="/SGSLogo.svg" width={40} height={40} alt=""/>
				<a className="uppercase text-textLogo" href="https://www.sergiogonzalez.co" target="_black">
					Sergio González Sánchez
				</a>
			</p>
		</header>
	);
};

export {Header};