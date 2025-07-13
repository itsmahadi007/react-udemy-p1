export function TabButton(props) {
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

//  or
export function TabButtonDynamicProps({label, ...props }) {
  //  print ...props
  // console.log(props);
  return (
    <li>
      <button
        {...props}
      >
        {label}
      </button>
    </li>
  );
}