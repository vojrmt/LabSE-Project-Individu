import './BoardContent.css';
import Column from '../Column/Column';
import { initData } from '../../actions/initData';
import { useState, useEffect, useRef } from 'react';

const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    const [isShowAddList, setIsShowAddList] = useState(false);
    const inputRef = useRef(null);
    const [valueInput, setValueInput] = useState("");

    useEffect(()=> { 
        const boardInitData = initData.boards.find(item => item.id === 'board-1');
        if(boardInitData){
            setBoard(boardInitData);
            setColumns(boardInitData.columns)
        }

        if(isShowAddList === true && inputRef && inputRef.current){
            inputRef.current.focus();
        }

    }, [isShowAddList]);

    const handleAddList = () => {
        if(!valueInput) {
            if(inputRef && inputRef.current)
                inputRef.current.focus();
            return;
        }
        
        const _columns = columns
        _columns.push({
            id: 'column-'+ (columns.length+1),
            boardId: 'board-1',
            title: valueInput,
            tasks: []
        });
        console.log(_columns)

        setColumns(_columns);
    }
    
    return (
        <>
        
        <div className="board-columns">
            <div className="board-columns">
                {columns && columns.length > 0 && columns.map((column, index) => {
                    return (
                        <Column key={column.id} column={column}/>
                    )
                })}

                {isShowAddList === false ?
                    <div className='add-new-column' onClick={() => setIsShowAddList(true)}>
                        <p>Add another column</p>
                    </div>
                    :
                    <div className='content-add-column'>
                        <input type="text" ref={inputRef} value={valueInput} onChange={(event)=> setValueInput(event.target.value)}/>
                        <div>
                            <button className='button' onClick={() => handleAddList()}>Add list</button>
                            <button className='cancel' onClick={() => setIsShowAddList(false)}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
          
        </div>

        </>
    )
}

export default BoardContent;