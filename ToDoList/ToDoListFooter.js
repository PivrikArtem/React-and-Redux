import React, { Component } from 'react';

class ToDoListFooter extends Component {
    handleFilterChanged(e) {
        this.props.onChangeFilter(e.currentTarget.dataset.value);
    }

    render() {
        var { tasks, filter, onClearCompleted } = this.props;
        return (
            <div className='todolist-footer'>

                <div>
                    <span>{tasks.filter((t) => !t.isDone).length}</span>
                </div>
                <div className='buttons'>
                    <button className={filter === 'all' ? 'selected' : ''} data-value='all'
                        onClick={this.handleFilterChanged.bind(this)}>All</button>
                    <button className={filter === 'active' ? 'selected' : ''} data-value='active'
                        onClick={this.handleFilterChanged.bind(this)}>Active</button>
                    <button className={filter === 'completed' ? 'selected' : ''} data-value='completed'
                        onClick={this.handleFilterChanged.bind(this)}>Completed</button>
                </div>
                <div>
                    <span onClick={onClearCompleted}> Clear completed</span>
                </div>

            </div>
        )
    }
}

export default ToDoListFooter;