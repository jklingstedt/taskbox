import React from 'react'
import { shape, string, func } from 'prop-types'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => (
    <div className={`list-item ${state}`}>
        <label className="checkbox">
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled
                name="checked"
            />
            <span
                className="checkbox-custom"
                onClick={() => onArchiveTask(id)}
            />
        </label>
        <div className="title">
            <input
                type="text"
                value={title}
                readOnly
                placeholder="Input title"
            />
        </div>

        <div className="actions" onClick={event => event.stopPropagation()}>
            {state !== 'TASK_ARCHIVED' && (
                // eslint-disable-next-line
                <a onClick={() => onPinTask(id)}>
                    <span className="icon-star" />
                </a>
            )}
        </div>
    </div>
)

Task.defaultProps = {
    task: {
        id: ''
    }
}

Task.propTypes = {
    task: shape({
        id: string.isRequired,
        title: string.isRequired,
        state: string.isRequired
    }).isRequired,
    onArchiveTask: func.isRequired,
    onPinTask: func.isRequired
}

export default Task
