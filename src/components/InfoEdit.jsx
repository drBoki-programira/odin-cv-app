function InfoEdit({
  data,
  handleNameChange,
  handleEmailChange,
  handleTelephoneChange,
  changeToDone,
}) {
  return (
    <form>
      <h2>General Information</h2>
      <div className="field">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={data.fullName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleEmailChange}
        ></input>
      </div>
      <div className="field">
        <label htmlFor="phone">Telephone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={data.tel}
          onChange={handleTelephoneChange}
        ></input>
      </div>
      <button onClick={changeToDone} type="button">
        Done
      </button>
    </form>
  );
}

export default InfoEdit;
