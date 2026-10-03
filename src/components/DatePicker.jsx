import "../styles/DatePicker.css"

export default function DatePicker({ data, handleUpdate }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 80 }, (_, idx) => idx + 1950);

  return (
    <div className="date">
      <label>
        Start Date
        <div className="selection">
          <div className="select-container">
            <select
              name="startMonth"
              defaultValue={data.startMonth || ""}
              onChange={(e) => handleUpdate(e, data.id)}
            >
              <option value="" disabled hidden>
                Select Month
              </option>
              {months.map((month, idx) => (
                <option key={idx} value={idx}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select
              name="startYear"
              defaultValue={data.startYear || ""}
              onChange={(e) => handleUpdate(e, data.id)}
            >
              <option value="" disabled hidden>
                Select Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </label>
      <label>
        End Date
        <div className="selection">
          <div className="select-container">
            <select
              name="endMonth"
              defaultValue={data.endMonth || ""}
              onChange={(e) => handleUpdate(e, data.id)}
            >
              <option value="" disabled hidden>
                Select Month
              </option>
              {months.map((month, idx) => (
                <option key={idx} value={idx}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="select-container">
            <select
              name="endYear"
              defaultValue={data.endYear || ""}
              onChange={(e) => handleUpdate(e, data.id)}
            >
              <option value="" disabled hidden>
                Select Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </label>
    </div>
  );
}
