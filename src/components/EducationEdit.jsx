import DatePicker from "./DatePicker";

function EducationEdit({ data, handleUpdate, changeToDone }) {
  return (
    <form>
      <div className="field">
        <label htmlFor="institution">
          Institution Name
          </label>
          <input
          id="institution"
          name="institution"
            type="text"
            value={data.institution}
            onChange={(e) => handleUpdate(e, data.id)}
          ></input>
        
      </div>
      <div className="field">
        <label htmlFor="degree">
          Degree
          </label>
          <input
          id="degree"
          name="degree"
            type="text"
            value={data.degree}
            onChange={(e) => handleUpdate(e, data.id)}
          ></input>
        
      </div>
      <DatePicker data={data} handleUpdate={handleUpdate} ></DatePicker>
      <button type="button" onClick={() => changeToDone(data.id)}>
        Done
      </button>
    </form>
  );
}

export default EducationEdit;
