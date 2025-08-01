function ToDo() {
    function callFun(){
        alert("button clicked")
    }
    return (
        <div>
            <h1>Laraib Anwar Todos</h1>
            <img src="src\assets\todo.png" 
            alt=" work" 
            class="photo"
            />
            <ul>
                <li>Learn new concepts</li>
                <li>Complete university task</li>
                <li>Improve learning speed</li>
            </ul>
             

            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default ToDo;