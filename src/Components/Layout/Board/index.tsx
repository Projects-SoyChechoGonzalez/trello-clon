import {List} from '@/Components/Common/List';
import {Card} from '@/Components/Common/Card';
import {DoneList, InProgressList, TodoList} from '../../../../data';
import {useState} from 'react';

const Board = () => {
	
	const [dragged, setDragged] = useState(null);
	const [listOfList, setListOfList] = useState({
		TodoList,
		InProgressList,
		DoneList
	});
	
	const handleDrop = (event: EventTarget) => {
		const list = event.currentTarget.dataset.id;
		const listOfListClone = structuredClone(listOfList);
		
		const newList = listOfListClone[dragged.list].filter(item => item.id !== dragged.data.id);
		listOfListClone[dragged.list] = newList;
		listOfListClone[list].push(dragged.data);
		
		setListOfList(listOfListClone);
	};
	
	
	return (
		<div className="flex flex-col flex-1 p-4 gap-4">
			<div>
				<h1 className="text-2xl font-bold">Development</h1>
			</div>
			<main className="flex flex-1 gap-6">
				<List title="todo" handleDrop={handleDrop} id="TodoList">
					{
						listOfList.TodoList.map((item) => (
							<Card {...item} key={item.id * 1} setDragged={setDragged}/>
						))
					}
				</List>
				<List title="in progress" handleDrop={handleDrop} id="InProgressList">
					{
						listOfList.InProgressList.map((item) => (
							<Card {...item} key={item.id * 2} setDragged={setDragged}/>
						))
					}
				</List>
				<List title="done" handleDrop={handleDrop} id="DoneList">
					{
						listOfList.DoneList.map((item) => (
							<Card {...item} key={item.id * 3} setDragged={setDragged}/>
						))
					}
				</List>
			</main>
		</div>
	);
};

export {Board};