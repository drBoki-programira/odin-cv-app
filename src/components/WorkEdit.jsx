function WorkEdit({ data, handleUpdate, changeToDone }) {
  return (
    <form>
      <div className="field">
        <label>
          Company name
          <input
            type="text"
            value={data.company}
            onChange={(e) => handleUpdate(e, data.id, "company")}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          Job position
          <input
            type="text"
            value={data.position}
            onChange={(e) => handleUpdate(e, data.id, "position")}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          From
          <input
            type="date"
            value={data.from}
            onChange={(e) => handleUpdate(e, data.id, "from")}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          To
          <input
            type="date"
            value={data.to}
            onChange={(e) => handleUpdate(e, data.id, "to")}
          ></input>
        </label>
      </div>
      <button type="button" onClick={() => changeToDone(data.id)}>
        Done
      </button>
    </form>
  );
}

export default WorkEdit;
