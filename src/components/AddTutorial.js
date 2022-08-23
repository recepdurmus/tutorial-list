import React, { useState } from "react";

const AddTutorial = ({addTutorial}) => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    addTutorial({title:title, description:desc})
    setTitle("")
    setDesc("")
  }
  return (
    <div className="container text-center mt-5">
      <h1 className="display-5 text-success" for="title">
        Add Tutorial
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="w-50 m-auto">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
            required
          />
          <label htmlFor="desc" className="m-2">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter your description"
            required
          />
        </div>
        <button className="btn btn-danger m-3">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
