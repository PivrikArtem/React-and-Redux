import React, { Component } from 'react';
import { upDateTask } from './Services.js'
import { removeTask } from './Services.js'
import img from './imgs/1.gif'
import './ToDoList.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            title: props.task.title
            
        }
        this.parentCallback = props.deleteCallback;
        this.parentUpdateCallback = props.updateCallback
        this.parentloadingPage=props.loadingCallback;
        
    }
  

    deleteTask(e) {
        var task = { ...this.props.task };
        this.parentloadingPage(task);
        removeTask(task.id, 123)
            .then(data => {
                this.parentCallback(task.id);
                this.parentloadingPage(task);
            })
    }

    toggleTaskStatus(e) {
        var task = { ...this.props.task };
        task.isDone = !task.isDone;
        this.parentloadingPage(task);

        upDateTask(123, task.id, task.isDone, null)
            .then(data => {
                this.parentUpdateCallback(task);
                this.parentloadingPage(task);
            })
    }
    goToEditMode() {
        this.setState({
            editMode: true
        })
    }
    changeTitle(e) {
        this.setState({
            title: e.currentTarget.value
        })
    }
    onEnterSaveTitle(e) {
        if (e.key === 'Enter') { this.saveTitle(e) }
    }
    saveTitle(e) {
        const newTitle = e.currentTarget.value;
        var task = { ...this.props.task };
        task.title = newTitle;
        this.parentloadingPage(task); 

        upDateTask(123, task.id, null, task.title)
            .then(data => {
                this.setState({
                    editMode: false
                });
                this.parentUpdateCallback(task);
                this.parentloadingPage(task);
            })
    }

    render() {

        var { isDone } = this.props.task;
        var { title } = this.state;

        var displayElement = '';
        if (this.state.editMode) {
            displayElement = <input value={title} onChange={this.changeTitle.bind(this)}
                onBlur={this.saveTitle.bind(this)} onKeyPress={this.onEnterSaveTitle.bind(this)} />
        } else {
            displayElement = <span onDoubleClick={this.goToEditMode.bind(this)}>{title}</span>
        }
        return (
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                <img src={img} className={this.props.task.isInProgress ? "img-task-blok" : "img-task"} />
                <input type='checkbox' checked={isDone} onClick={this.toggleTaskStatus.bind(this)} />

                {displayElement}

                <span className='delete' onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        )
    }
}
export default Task;

