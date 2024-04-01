// state: ToDoState = {
//     toDoItems: [],
//     inputText: '',
//   };

//   componentDidMount() {
//     this.fetchTasks();
//   }

//   fetchTasks = () => {
//     db.collection("tasks").get().then((querySnapshot) => {
//       const tasks: ToDoItem[] = [];
//       querySnapshot.forEach((doc) => {
//         tasks.push(doc.data() as ToDoItem);
//       });
//       this.setState({ toDoItems: tasks });
//     });
//   };

//   addTask = () => {
//     const { inputText } = this.state;
//     db.collection("tasks").add({
//       text: inputText,
//       completed: false
//     })
//     .then((docRef) => {
//       console.log("Task added with ID: ", docRef.id);
//       this.fetchTasks(); // Перезагрузить задачи после добавления
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
//   };
