import React from 'react';

const Testing = () => {
  const submit = event => {
    event.preventDefault();
    console.log(event.target[0].checked);
  };
  return (
    <div className="row">
      {/* <div className="column1">
        <form onSubmit={submit}>
          <input
            type="radio"
            className="red"
            id="color"
            name="color"
            value="red"
            defaultChecked
          />
          <input
            type="radio"
            className="green"
            name="color"
            id="color"
            value="green"
          />
          <input
            type="radio"
            className="yellow"
            name="color"
            id="color"
            value="yellow"
          />
          <br />
          <br />
          <label>Title: </label>
          <input type="text" name="title" />
          <br />
          <br />
          <label>Sub Title: </label>
          <input type="text" name="subtitle" />
          <br />
          <br />
          <input type="submit"></input>
        </form>
      </div>
      <div className="column2">Column2 </div> */}
      <div className="blue red">sas</div> <div className="red blue">dgggf</div>
    </div>
  );
};
export default Testing;
