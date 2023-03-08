import {ListProps} from '../../../../interfaces';
import Image from 'next/image';

const List = ({title, children, handleDrop, id}: ListProps) => {
	
	const handleDragOver = (event: EventTarget) => {
		event.preventDefault();
	};
	
	return (
		<div data-id={id} className="relative flex-1" onDragOver={handleDragOver} onDrop={handleDrop}>
			<div className="absolute inset-0 text-gray-900 flex flex-col gap-4 bg-slate-200 flex-1 rounded p-4">
				<div>
					<h2 className="uppercase font-bold text-gray-900">{title}</h2>
				</div>
				<div className="flex flex-col gap-4 overflow-auto">{children}</div>
				<div className="flex gap-2 border-2 p-1">
					<Image src="/icons/plus.svg" width={20} height={20} alt="Añadir Tarjeta" title="Añadir Tarjeta"/>
					<span>Añadir otra tarjeta</span>
				</div>
			</div>
		</div>
	);
};

export {List};