import React from 'react'

const DeletePill = props => {
  const { onDelete, onDecline } = props

  return (
    <div>
      Are you sure?
      <button onClick={onDelete}>Yes</button>
      <button onClick={onDecline}>No</button>
    </div>
  )
}

export default DeletePill