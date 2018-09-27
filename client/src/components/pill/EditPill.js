import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditPill = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Medication</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <label>Current Available Count</label>
        <div>
          <Field
            name="count"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Edit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'edit-pill' })(EditPill)