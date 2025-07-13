/**
 * Tabs component allows flexible rendering of button containers.
 *
 * You can pass a ButtonContainer prop as either:
 *   - A React component (e.g., 'div', 'section', or a custom component), using an Uppercase prop name (ButtonContainer).
 *   - Or, you can manually assign a variable (e.g., const ButtonContainer = buttonsContainer) and use it in JSX.
 *
 * The Uppercase prop technique leverages React's convention that Uppercase props are treated as components.
 * This enables dynamic container rendering without extra variable assignment.
 */
export default function Tabs({ children, buttons, ButtonContainer }) {
  // buttonsContainer can be a string or a React component
  // const ButtonContainer = buttonsContainer;
  // or we can directly use it with UpperCase Props parameter like ButtonsContainer instest of buttonsContainer
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
