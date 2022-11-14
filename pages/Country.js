export default function Country(props) {
  if(!props.country) return <></> // when rendering on the server.
  return <li>{props.country.name}{" "}
    <button onClick={e => props.deletecountry(props.country.name)} className="delete">🗑</button></li>
}
