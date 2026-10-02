function EducationDone({ data, changeToEdit, deleteEntry }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return (
    <>
      <p>
      {months[data.startMonth]}{data.startYear} - {months[data.endMonth]}{data.endYear}
      </p>
      <div>
        {data.institution}, {data.degree}
      </div>
      <button onClick={() => deleteEntry(data.id)}>delete</button>
      <button onClick={() => changeToEdit(data.id)}>edit</button>
    </>
  );
}

export default EducationDone;
