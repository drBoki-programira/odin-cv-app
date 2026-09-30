function WorkDone({ data, changeToEdit, deleteEntry }) {
  return (
    <>
      <p>
        {data.from} - {data.to}
      </p>
      <div>
        {data.company}, {data.position}
      </div>
      <button onClick={() => deleteEntry(data.id)}>delete</button>
      <button onClick={() => changeToEdit(data.id)}>edit</button>
    </>
  );
}

export default WorkDone;
