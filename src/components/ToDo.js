import { useState } from "react";

const ToDo = () => {
    let [tasks, setTasks] = useState([]);
    let [num,setNum] = useState(1);
    let [taskDet,setTaskDet] = useState('');

    
    let clickHandler = () => {
        // console.log('clicked');
        // tasks.push(taskDet);
        // setTasks(tasks);
        // console.log(tasks);
        let taskObj = {"sno":num, "details": taskDet};
        tasks.push(taskObj);
        setTasks(tasks);
        num++;
        setNum(num);
        
    }
    let onChangeHandler = (e) => {
        setTaskDet(e.target.value);
        // console.log(taskDet);
    }
    return (  
        
        <div className='container-fluid'>
            <div className='table-responsive'>
                    <table className="table table-primary table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tasks</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr className="">
                                <td scope="row">R1C1</td>
                                <td>{taskDet}</td>
                                
                            </tr> */}
                            {
                                tasks.map((elem) => {
                                    return(
                                    <tr key={elem.sno}>
                                      <td>{elem.sno}</td>
                                      <td>{elem.details}</td>
                                    </tr> 
                                 ) })
                            }
                            {/* <tr className="">
                                <td scope="row">Item</td>
                                <td>Item</td>
                             */}
                            {/* </tr> */}
                        </tbody>
                    </table>
                </div>
            
                Task details<input type="text" onChange={onChangeHandler}/>
                <button className="bg-primary" onClick={clickHandler}>Add</button>
            
            </div>
    
    );
}
 
export default ToDo;