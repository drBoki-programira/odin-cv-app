function EducationDone({ data, changeToEdit, deleteEntry }) {
  return (
    <>
      <p>
        {data.from} - {data.to}
      </p>
      <div>
        {data.schoolName}, {data.titleOfStudy}
      </div>
      <button onClick={() => deleteEntry(data.id)}>delete</button>
      <button onClick={() => changeToEdit(data.id)}>edit</button>
    </>
  );
}

export default EducationDone;
