import React from 'react'
import { createContext } from 'react'

const TaskContext = createContext()

export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
  )
}

