import {CardProps} from '../../../../interfaces';
import Image from 'next/image';

const Card = ({title, user, comments = [], id, setDragged}: CardProps) => {
	
	const handleDragStart = (event: EventTarget) => {
		setDragged({
			data: {
				title,
				user,
				comments,
				id
			},
			list: event.target.closest('[data-id]').dataset.id
		});
	};
	
	return (
		<div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 bg-white text-gray-900 p-2 rounded-sm">
			<div className="flex justify-between">
				<p>{title}</p>
				<span>
					<Image src="/icons/edit.svg" width={20} height={20} alt="Edit" title="Edit"/>
				</span>
			</div>
			<div className="flex justify-between">
				<span className="flex gap-1">
					<Image src="/icons/comments.svg" width={20} height={20} alt="Comments" title="Comments"/>
					{comments.length > 0 ? comments.length : null}
				</span>
				<span>
					<Image src={user.avatar} width={20} height={20} alt="Avatar" title="Avatar"/>
				</span>
			</div>
			Card
		</div>
	);
};

export {Card};