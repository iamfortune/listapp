import React from 'react'
import { observer } from 'mobx-react'

function List(props) {
  return (
    <div className="card">
      <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <p className={`title ${props.list.done ? "text-secondary" : ""}`}>{props.list.value}</p>
            <div>
            <button onClick={props.deleteList.bind(this, props.list)} className="btn btn-danger font-weight-bold py-2 px-5 ml-2">Delete</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default observer(List)
