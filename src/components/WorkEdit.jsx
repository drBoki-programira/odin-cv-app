import DatePicker from "./DatePicker";

function WorkEdit({ data, handleUpdate, changeToDone }) {
  return (
    <form>
      <div className="field">
        <label htmlFor="employer">Employer</label>
        <input
          id="employer"
          name="employer"
          type="text"
          value={data.company}
          onChange={(e) => handleUpdate(e, data.id)}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="position">Job position</label>
        <input
          id="position"
          name="position"
          type="text"
          value={data.position}
          onChange={(e) => handleUpdate(e, data.id)}
        ></input>
      </div>
      <DatePicker data={data} handleUpdate={handleUpdate}></DatePicker>
      <button type="button" onClick={() => changeToDone(data.id)}>
        Done
      </button>
    </form>
  );
}

export default WorkEdit;
