export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns:[
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Todo 1',
                    taskOrder: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7' ],
                    tasks: [
                        {id: 'task-1', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1'},
                        {id: 'task-2', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 2'},
                        {id: 'task-3', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 3'},
                        {id: 'task-4', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 4'},
                        {id: 'task-5', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 5'},
                        {id: 'task-6', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 6'},
                        {id: 'task-7', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 7'}
                    ]
                },

                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Todo 2',
                    taskOrder: ['task-8', 'task-9', 'task-10'],
                    tasks: [
                        {id: 'task-8', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 8'},
                        {id: 'task-9', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 9'},
                        {id: 'task-10', boardId: 'board-1', columnId: 'column-2', title: 'Title of card 10'}
                    ]
                },

                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Todo 3',
                    taskOrder: ['task-11', 'task-12', 'task-13'],
                    tasks: [
                        {id: 'task-11', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 11'},
                        {id: 'task-12', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 12'},
                        {id: 'task-13', boardId: 'board-1', columnId: 'column-3', title: 'Title of card 13'}
                    ]
                }
            ]
        }
    ]
}