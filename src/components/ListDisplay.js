import React from 'react'

import List from "./List";
import { observer } from 'mobx-react';

function ListDisplay(props) {
  const { deleteList, filteredLists } = props.store

  return (
    <div>
        <div className="container">
          {filteredLists.map(list => (
            <List key={list.id} list={list}  deleteList={deleteList} />
          ))}
        </div>
    </div>
  )
}

export default observer(ListDisplay)
