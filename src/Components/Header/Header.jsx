function Header({ handleSubmit, handleFormInput, items }) {
  const todo = items[0];
  return (
    <section className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          autoFocus
          onChange={handleFormInput}
          value={todo.task}
        />
      </form>
    </section>
  );
}
export default Header;
