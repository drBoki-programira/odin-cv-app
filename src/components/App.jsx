import "../styles/App.css";
import "../styles/editSections.css";
import "../styles/doneSections.css";
import { useState } from "react";
import InfoEdit from "./InfoEdit";
import InfoDone from "./InfoDone";
import EducationDone from "./EducationDone";
import EducationEdit from "./EducationEdit";
import WorkDone from "./WorkDone";
import WorkEdit from "./WorkEdit";

function App() {
  const [infoData, setInfoData] = useState({});
  const [isInfoDone, setIsInfoDone] = useState(false);
  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);

  function updateName(e) {
    setInfoData({ ...infoData, fullName: e.target.value });
  }
  function updateEmail(e) {
    setInfoData({ ...infoData, email: e.target.value });
  }
  function updateTelephone(e) {
    setInfoData({ ...infoData, tel: e.target.value });
  }
  function updateInfoSection() {
    setIsInfoDone(!isInfoDone);
  }

  function addEducationEntry() {
    const newId = crypto.randomUUID();
    setEducationData((educationData) => [
      ...educationData,
      { id: newId, edit: true },
    ]);
  }

  function updateEducationEntry(e, id) {
    const { name, value } = e.target;
    setEducationData((educationData) =>
      educationData.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry
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

  function addWorkEntry() {
    const newId = crypto.randomUUID();
    setWorkData((workData) => [...workData, { id: newId, edit: true }]);
  }

  function updateWorkEntry(e, id) {
    const { name, value } = e.target;
    setWorkData((workData) =>
      workData.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry
      )
    );
  }

  function deleteWorkEntry(id) {
    setWorkData((workData) => workData.filter((entry) => entry.id !== id));
  }

  function toggleWorkEntryEdit(id) {
    setWorkData((workData) =>
      workData.map((entry) =>
        entry.id === id ? { ...entry, edit: !entry.edit } : entry
      )
    );
  }

  return (
    <>
      <header>
        <h1>CV Maker</h1>
      </header>
      <main>
        {isInfoDone ? (
          <InfoDone data={infoData} changeToEdit={updateInfoSection}></InfoDone>
        ) : (
          <InfoEdit
            data={infoData}
            handleNameChange={updateName}
            handleEmailChange={updateEmail}
            handleTelephoneChange={updateTelephone}
            changeToDone={updateInfoSection}
          ></InfoEdit>
        )}
        <hr></hr>
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
        <button className="add-btn" onClick={addEducationEntry}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e2e2e2"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>{" "}
          Add Education
        </button>
        <hr></hr>
        <h2>Employment</h2>
        {workData.map((entry) =>
          entry.edit ? (
            <WorkEdit
              data={entry}
              key={entry.id}
              handleUpdate={updateWorkEntry}
              changeToDone={toggleWorkEntryEdit}
            ></WorkEdit>
          ) : (
            <WorkDone
              data={entry}
              key={entry.id}
              changeToEdit={toggleWorkEntryEdit}
              deleteEntry={deleteWorkEntry}
            ></WorkDone>
          )
        )}
        <button className="add-btn" onClick={addWorkEntry}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#e2e2e2"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>{" "}
          Add Employment
        </button>
      </main>
    </>
  );
}

export default App;
