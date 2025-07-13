export default function Tabs({ children, buttons, buttonsContainer }) {
    // buttonsContainer can be a string or a React component
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
