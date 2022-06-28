import React from "react";

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">Username *</label>
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter your username"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
            />
            <span>{errors.firstName}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">
            Email address *</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email id"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            <span>{errors.email}</span>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        {/* <div className="form-group">
          <label htmlFor="last-name-input">
            Last name *
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
            //   required
            />
            {touched.lastName && errors.lastName}
          </label>
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="age">
            Age *
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={values.age || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              name="age"
              min="0"
            //   required
            />
            {touched.age && errors.age}
          </label>
        </div> */}

      </form>
    </div>
  );
}

export default Form;
