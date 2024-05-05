export default function TabButton(props) {
  //   function handleClick() {
  //     console.log(`You clicked on ${props.label}`);
  //   }
  return (
    <li>
      {/* remmeber onClicke funchtion shoud not be handleClick() but handleClick */}
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.label}
      </button>
    </li>
  );
}
