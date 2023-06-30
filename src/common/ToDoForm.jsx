const FormTodo = (props) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props?.addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary my-3" type="submit">
          Add Task
        </Button>
      </div>
    </Form>
  );
};
export default ToDoForm;