import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddMatchForm = (props) => {
  const { handleSubmit , players , error , pristine, reset, submitting } = props;
  let playerOptions = players.map(players =>{
    return <option key={players._id} value={players._id}>{players.firstname+" "+players.lastname}</option>
  });
  return(
    <div>
      <form className="form-horizontal" onSubmit= { handleSubmit }>
        <div className="form-group">
          <h2>Add Match Results</h2>
        </div>
        <div className="form-group">
          <label>Select Player One</label>
          <Field name="playerone" component="select">
            <option>Select Player One</option>
            {playerOptions}
          </Field>
        </div>
        <div className="form-group">
          <label>Select Player Two</label>
          <Field name="playertwo" component="select">
            <option>Select Player One</option>
            {playerOptions}
          </Field>
        </div>
        <div className="form-group">
        <label>Result</label>
        <Field name="result" component="select">
          <option />
          <option value="onewin">1-0</option>
          <option value="draw">Draw</option>
          <option value="twowin">0-1</option>
        </Field>
        </div>
        <div className="form-group">
          {error && <strong>{error}</strong>}
        </div>
        <div className="form-group">

          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>
    </div>
  )
}


export default reduxForm({
  form:'addmatch'
})(AddMatchForm)
