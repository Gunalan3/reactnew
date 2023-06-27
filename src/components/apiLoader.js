import React from "react";
import Usereducer from "../customhooks.js/usereducer";

const ApiLoader = () => {
  const url = `https://dummy.restapiexample.com/api/v1/employees}`;
  const { data, loading, error } = Usereducer(url);
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.employee_name}</td>
                  <td>{employee.employee_salary}</td>
                  <td>{employee.employee_age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && error}
    </>
  );
};

export default ApiLoader;
