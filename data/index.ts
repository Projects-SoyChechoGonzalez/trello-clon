const TodoList = [
	{
		title: 'Añadir nuevas tarjetas',
		id: 123,
		user: {
			name: 'Pepe',
			avatar: '/avatar.png'
		},
		comments: [
			{
				text: 'Este feature tiene prioridad',
				user: {
					name: 'Pepe',
					avatar: '/avatar.png'
				}
			},
			{
				text: 'Super fácil',
				user: {
					name: 'Sergio',
					avatar: '/avatar.png'
				}
			}
		]
	},
	{
		title: 'Creación de tarjetas',
		id: 112344,
		user: {
			name: 'Miguel',
			avatar: '/avatar.png'
		}
	},
	{
		title: 'Añadir usuarios',
		id: 7869,
		user: {
			name: 'Miguel',
			avatar: '/avatar.png'
		}
	}
];

const InProgressList = [
	{
		title: 'Mover Tarjetas',
		id: 7869456,
		user: {
			name: 'Sergio',
			avatar: '/avatar.png'
		}
	}
];

const DoneList = [
	{
		title: 'Implementar el diseño',
		id: 786123,
		user: {
			name: 'Checho',
			avatar: '/avatar.png'
		}
	},
	{
		title: 'Responsive Design',
		id: 78612367678,
		user: {
			name: 'Checho',
			avatar: '/avatar.png'
		}
	},
	{
		title: 'Columnas',
		id: 786666123,
		user: {
			name: 'Checho',
			avatar: '/avatar.png'
		}
	}
];

export {TodoList, InProgressList, DoneList};