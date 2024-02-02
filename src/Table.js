import './App.js';
import './App.css';

function Table() {
    const del = (index) => {
        console.log("index = " + index)
        let d = todo.filter((val, id) => {
          console.log("id =", id)
          return id !== index;
        })
        setTodo(d);
        setFinal(d);
      }
    
      const update = (index) => {
        setEdit(index);
        setTask(todo[index].task);
      };
    
      const handlecheck = (index) => {
        const check = [...todo];
        check[index].checked = !check[index].checked;
        setTodo(check);
      }
    return (
        <>
        <table className='' style={{ marginTop: "20px" }} border={1}>
          {
            todo.map((ele, index) => {
              return (
                <tr className='list' key={index}>
                  
                    <td><input type='checkbox' checked={ele.checked} onChange={() => handlecheck(index)} /></td>
                    <td><span style={{ textDecoration: ele.checked ? "line-through" : "" }}>{ele.task}</span></td>
                    <td><input type='button' value={"Del"} className='del' onClick={() => { del(index) }} /></td>
                    <td><input type='button' value={"Edit"} onClick={() => { update(index) }} /></td>
                  
                </tr>
              )
            })
          }
        </table>
        </>
    );
}

export default Table;
