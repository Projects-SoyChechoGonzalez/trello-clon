import {LayoutProps} from '../../../../interfaces';
import {Header} from '@/Components/Layout/Header';

const MainLayout = ({children}: LayoutProps) => {
	return (
		<div className="bg-primary h-screen flex flex-col">
			<Header/>
			{children}
		</div>
	);
};

export {MainLayout};