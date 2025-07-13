export function CoreConcepts(props_value) {
  return (
    <li>
      <img src={props_value.image} alt={props_value.title} />
      <h3>{props_value.title}</h3>
      <p>{props_value.description}</p> 
    </li>
  );
}

// export function CoreConcepts({ image, title = "Hello!", description }) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
