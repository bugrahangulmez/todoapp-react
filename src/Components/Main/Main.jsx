function Main({ handleDelete, handleCompletedAll, todoList, handleToggle }) {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleCompletedAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((task, index) => {
          return (
            <li
              className={task.isComplited === true ? "completed" : null}
              key={index}
              hidden={task.hidden}
            >
              <div className="view">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={task.isComplited}
                  onChange={(e) => {
                    handleToggle(task, e);
                  }}
                />
                <label htmlFor="">{task.task}</label>
                <button
                  onClick={() => {
                    handleDelete(task);
                  }}
                  className="destroy"
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Main;
