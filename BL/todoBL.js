const validateTask = (taskData) => {
    if (!taskData.listId || !taskData.task || !taskData.finishDate) {
      throw new Error('Missing required fields in taskData');
    }
      if (typeof taskData.listId !== 'number') {
      throw new Error('Invalid listId format');
    }
      const finishDate = new Date(taskData.finishDate);
    if (isNaN(finishDate)) {
      throw new Error('Invalid finishDate format');
    }
    return taskData;
  };
  
  module.exports = {
    validateTask,
  };
