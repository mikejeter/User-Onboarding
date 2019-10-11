import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";

const UserForm = props => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      if (props.status) {
        setUsers([...users, props.status]);
      }
    }, [props.status]);
  
    return (
      <div className="user-form">
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          {props.touched.name && props.errors.name && (
            <p className="error">{props.errors.name}</p>
          )}
          <Field type="text" name="email" placeholder="Email" />
          {props.touched.email && props.errors.email && (
            <p className="error">{props.errors.email}</p>
          )}
          <Field type="text" name="password" placeholder="Password" />
          {props.touched.password && props.errors.password && (
            <p className="error">{props.errors.password}</p>
          )}
          <label className="checkbox-container">
            <Field
              type="checkbox"
              name="tos"
              checked={props.values.tos}
            />
            Terms of Service
            <span className="checkmark" />
          </label>
          <button type="submit">Submit!</button>
        </Form>
        {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))}
    </div>
  );
};