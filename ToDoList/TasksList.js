import React, { Component } from 'react';
import Task from './Task.js';

class TasksList extends Component {
   
    render() {
        return (
            <div className='tasks'>
                {this.props.tasks.map((task) => {
                    return <Task task={task} deleteCallback={this.props.onDelete}
                        updateCallback={this.props.onUpdate} loadingCallback={this.props.onloading} key={task.id} />
                })
                }
            </div>

        );
    }
}

export default TasksList;

