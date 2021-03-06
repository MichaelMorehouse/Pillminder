import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CreatePill = props => {
  const { handleSubmit, pillViewstate, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Medication</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Medication Name"
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
            placeholder="Count"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        <button type="button" disabled={submitting} onClick={()=>pillViewstate('')}>
          Back to Details
        </button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'create-pill' })(CreatePill)