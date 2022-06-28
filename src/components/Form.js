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
    <div className="container">
      <h3 className="heading3">Upload Defect Sheet</h3>
      <form className="formWrap" onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">Enter Name<span>*</span>:</label>
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Please enter your name"
              value={values.firstName}
              onChange={handleChange}
              onKeyDown={handleBlur}
              onBlur={handleBlur}
              name="firstName"
            />
            <span className="errorMsg">{errors.firstName}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email address<span>*</span>:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email id"
              value={values.email}
              onChange={handleChange}
              onKeyDown={handleBlur}
              onBlur={handleBlur}
              name="email"
            />
            <span className="errorMsg">{errors.email}</span>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Send Now
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
      <p className="note">Note: Please rename the file with your name, select the file and click on the "Send Now" button</p>
    </div>
  );
}

export default Form;
