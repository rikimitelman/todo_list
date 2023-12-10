import connection from '../config'; 


const task = connection.define('task', {
  listId: {
    type: String,
    allowNull: false
  },
  task: {
    type: String,
  },
  taskStatus: {
    finishDate: Date,
    allowNull: true
  }
});

export default task;
