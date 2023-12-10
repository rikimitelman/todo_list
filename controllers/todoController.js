const sql = require('mssql');
const config = require('../config');
// const validation = require('../BL/todoBL');


const getAllTasks = async (req, res) => {
  try {
    await sql.connect(config);
    const request = new sql.Request();

    const query = `SELECT * FROM todo_list.todo`;
    validateTask(query);
    const result = await request.query(query);

    return res.status(200).json({
      success: true,
      message: 'Tasks received successfully',
      tasks: result.recordset,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to receive tasks' });
  }
};

const getTaskByName = async (req, res) => {
  try {
    const taskName = req.params.name;

    await sql.connect(config);
    const request = new sql.Request();

    const query = `SELECT * FROM todo_list.todo WHERE taskName = @name`;
    request.input('name', sql.NVarChar, taskName);
    const result = await request.query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task received successfully',
      task: result.recordset[0],
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'Failed to receive task' });
  }
};

module.exports = {
  getAllTasks,
  getTaskByName,
};
