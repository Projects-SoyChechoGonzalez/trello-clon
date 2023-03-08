interface UserInterface {
	name: string,
	avatar: string
}

interface ListProps {
	children: JSX.Element | JSX.Element[];
	title: string;
	onDrop: {};
	handleDrop?: {};
	id: string;
}

interface CardProps {
	title: string;
	user: UserInterface;
	comments: number[];
	id: string;
	setDragged: null;
}

export type {UserInterface, ListProps, CardProps};