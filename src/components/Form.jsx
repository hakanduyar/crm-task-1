import "react";
import { FaSave } from "react-icons/fa";

const Form = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <form className="p-4 bg-dark rounded" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label text-white fw-bold" htmlFor="purpose">
            Purpose:
          </label>
          
          <div>
            {["client", "group", "agent"].map((item) => (
              <div className="form-check form-check-inline" key={item}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="purpose"
                  id={item}
                  value={item}
                />
                <label className="form-check-label text-white" htmlFor={item}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold" htmlFor="label">
            Label:
          </label>
          <input
            type="text"
            className="form-control"
            id="label"
            name="label"
          />
          <div className="form-text text-secondary mb-2">
            Please write label here.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold" htmlFor="key">
            Key:
          </label>
          <input type="text" className="form-control" id="key" name="key" />
          <div className="form-text text-secondary mb-2">
            Please write key here.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text-white fw-bold" htmlFor="status">
            Status:
          </label>
         
          <div>
            {["active", "passive"].map((status) => (
              <div className="form-check form-check-inline" key={status}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id={status}
                  value={status}
                />
                <label className="form-check-label text-white" htmlFor={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <FaSave />
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
