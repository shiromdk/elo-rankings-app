import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddPlayerForm = props => {
  const { handleSubmit } = props;
  return(
    <div>
      <form className="form-horizontal" onSubmit= { handleSubmit }>
        <div className="form-group">
          <h2>Add New Player</h2>
        </div>
        
        <div className="form-group">
          <label>First Name</label>
          <Field name="firstname" component="input" type="text" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <Field name="lastname" component="input" type="text" />
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default reduxForm({
  form:'addplayer'
})(AddPlayerForm)
