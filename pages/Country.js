export default function Country(props) {

  return <li>{props.country?.name}{" "}
    <button onClick={e => props.deletecountry(props.country?.name)} className="delete">🗑</button></li>
}
