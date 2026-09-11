function EducationEdit({ data, handleUpdate, changeToDone }) {
  return (
    <form>
      <div className="field">
        <label>
          School name
          <input
            type="text"
            value={data.schoolName}
            onChange={(e) => handleUpdate(e, data.id, "schoolName")}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          Title of study
          <input
            type="text"
            value={data.titleOfStudy}
            onChange={(e) => handleUpdate(e, data.id, "titleOfStudy")}
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

export default EducationEdit;
