import { useState } from "react";
import InfoEdit from "./InfoEdit";
import InfoDone from "./InfoDone";
import EducationDone from "./EducationDone";
import EducationEdit from "./EducationEdit";

function App() {
  const [info, setInfo] = useState({});
  const [isInfoDone, setIsInfoDone] = useState(false);
  const [educationData, setEducationData] = useState([]);

  function updateName(e) {
    setInfo({ ...info, fullName: e.target.value });
  }
  function updateEmail(e) {
    setInfo({ ...info, email: e.target.value });
  }
  function updateTelephone(e) {
    setInfo({ ...info, tel: e.target.value });
  }
  function updateInfoSection(e) {
    e.preventDefault();
    setIsInfoDone(!isInfoDone);
  }

  function addEducationEntry() {
    const newId = educationData.length;
    setEducationData((educationData) => [
      ...educationData,
      { id: newId, edit: true },
    ]);
  }

  function updateEducationEntry(e, id, field) {
    setEducationData((educationData) =>
      educationData.map((entry) =>
        entry.id === id ? { ...entry, [field]: e.target.value } : entry
      )
    );
  }
  function toggleEducationEntryEdit(id) {
    setEducationData((educationData) =>
      educationData.map((entry) =>
        entry.id === id ? { ...entry, edit: !entry.edit } : entry
      )
    );
  }

  function deleteEducationEntry(id) {
    setEducationData((educationData) =>
      educationData.filter((entry) => entry.id !== id)
    );
  }

  return (
    <>
      <h1>CV Maker</h1>
      <h2>General Information</h2>
      {isInfoDone ? (
        <InfoDone data={info} changeToEdit={updateInfoSection}></InfoDone>
      ) : (
        <InfoEdit
          data={info}
          handleNameChange={updateName}
          handleEmailChange={updateEmail}
          handleTelephoneChange={updateTelephone}
          changeToDone={updateInfoSection}
        ></InfoEdit>
      )}
      <h2>Education</h2>
      {educationData.map((entry) =>
        entry.edit ? (
          <EducationEdit
            data={entry}
            key={entry.id}
            handleUpdate={updateEducationEntry}
            changeToDone={toggleEducationEntryEdit}
          ></EducationEdit>
        ) : (
          <EducationDone
            data={entry}
            key={entry.id}
            changeToEdit={toggleEducationEntryEdit}
            deleteEntry={deleteEducationEntry}
          ></EducationDone>
        )
      )}
      <button onClick={addEducationEntry} style={{ display: "block" }}>
        Add Education
      </button>
    </>
  );
}

export default App;
