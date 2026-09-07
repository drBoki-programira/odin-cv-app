function InfoDone({data, changeToEdit}) {
  return (
    <>
    <h2>{data.fullName}</h2>
    <p>{data.email}</p>
    <p>{data.tel}</p>
    <button onClick={changeToEdit}>Edit</button>
    </>
  )
}

export default InfoDone