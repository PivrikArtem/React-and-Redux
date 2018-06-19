import React, { Component } from 'react';
import createTask from './Services.js'
import img from './imgs/1.gif'
import './ToDoList.css';

class ToDoListTaskCreator extends Component {
    constructor(props) {

        super(props);

    }

    createNewTask(e) {
        if (e.key === 'Enter' && e.currentTarget.value !== '') {

            this.props.loading();
            const newTaskInput = e.currentTarget;
            
            createTask(newTaskInput.value, 123)
                .then(data => {

                    const NewTask = {
                        title: data.task.title,
                        id: data.task.id,
                        isDone: data.task.done
                    }
                    this.props.onCreat(NewTask);
                    newTaskInput.value = '';
                    this.props.loading();
                })
        }
    }
    render() {
        return (
            <div className='header'>
                <input onKeyPress={this.createNewTask.bind(this)} />
                <img src={img} className={this.props.classLoading} />
            </div>
        );
    }
}

export default ToDoListTaskCreator;

