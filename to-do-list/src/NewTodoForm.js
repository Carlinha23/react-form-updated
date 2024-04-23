import React, {useState} from "react";
import Todo from "./Todo";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">To do</label>
            <input
            name="task"
            placeholder="Task"
            value={formData.task}
            onChange={handleChange}
            />
            <button>Add To do</button>
        </form>
        
    )
}

export default NewTodoForm;
