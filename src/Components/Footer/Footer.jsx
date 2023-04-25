function Footer({ todoList, setSelected, setTodoList, selected }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((item) => item.isComplited === false).length}{" "}
        </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => {
              setSelected("all");
              setTodoList((prevState) =>
                prevState.map((item) => {
                  return { ...item, hidden: false };
                })
              );
            }}
            className={selected === "all" ? "selected" : null}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setSelected("active");
              setTodoList((prevState) =>
                prevState.map((item) => {
                  return item.isComplited
                    ? { ...item, hidden: true }
                    : { ...item, hidden: false };
                })
              );
            }}
            className={selected === "active" ? "selected" : null}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setSelected("completed");
              setTodoList((prevState) =>
                prevState.map((item) => {
                  return item.isComplited === false
                    ? { ...item, hidden: true }
                    : { ...item, hidden: false };
                })
              );
            }}
            className={selected === "completed" ? "selected" : null}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
