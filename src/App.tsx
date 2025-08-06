const App = () => {
  const name = "John";

  const x = 10;
  const y = 20;

  const names = ["Alice", "Bob", "Charlie"];

  const loggedIn = true;

  return (
    <>
      <div className="text-5xl">App</div>
      <p>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}.
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
