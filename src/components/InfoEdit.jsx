function InfoEdit({
  data,
  handleNameChange,
  handleEmailChange,
  handleTelephoneChange,
  changeToDone,
}) {
  return (
    <form>
      <div className="field">
        <label>
          Name
          <input
            type="text"
            value={data.fullName}
            onChange={handleNameChange}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          Email address
          <input
            type="email"
            value={data.email}
            onChange={handleEmailChange}
          ></input>
        </label>
      </div>
      <div className="field">
        <label>
          Telephone number
          <input
            type="tel"
            value={data.tel}
            onChange={handleTelephoneChange}
          ></input>
        </label>
      </div>
      <button onClick={changeToDone} type="button">Submit</button>
    </form>
  );
}

export default InfoEdit;
