import { useState } from "react";
import InfoEdit from "./InfoEdit";
import InfoDone from "./InfoDone";

function App() {
  const [info, setInfo] = useState({});
  const [isInfoDone, setIsInfoDone] = useState(false);

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

  return (
    <>
      <h1>CV Maker</h1>
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
    </>
  );
}

export default App;
