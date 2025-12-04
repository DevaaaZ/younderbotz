export default function About({ details }) {
  return (
    <div className="page">
      <h2>About Details</h2>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{details.name}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{details.degree}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{details.age}</td>
          </tr>
          <tr>
            <td>Tech</td>
            <td>
              <ul>
                {details.tech.map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
