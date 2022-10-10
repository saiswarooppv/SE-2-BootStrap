import React from "react";

function Navigation({ navItems, userName, onUserNameChange }) {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <div className="container d-flex">
        <div className="d-flex">
          <div className="me-2 bg-black rectangle d-flex justify-content-center align-items-center">
            <span role="button" onClick={navItems[0].onClick} className="text-white fs-3 fw-bold my-0">
            &nbsp;Newscatcher&nbsp;
            </span>
          </div>
        </div>
        <div className="mx-auto">
          <input
            type="text" 
            placeholder="Enter your name!!"
            value={userName}
            className="border rounded p-1 align-items-center"
            onChange={(e) => onUserNameChange(e.target.value) }
          />
        </div>
        <div className="padding-left:525px !important">
          {navItems.map(({ id, title, onClick }) => (
            <span key={id} role="button" onClick={onClick} className="p-2 my-0">
              {title}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Navigation;
