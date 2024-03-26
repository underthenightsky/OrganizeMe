const Task = require("./TaskModel");
const connectDB = require("./db");
const app = require("./db");
// getting all task created
exports.getTasks = async (req, res) => {
    try {
      // connectDB();
      const tasks = await Task.find().then(Tasks=>res.json(Tasks))
      .catch(error => res.json(err)); 
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.addTask = async (req, res) => {
    const task = new Task({
     
      description : req.body.description,
      priority  : req.body.priority,
      startDate : req.body.startDate,
      endDate : req.body.endDate,
      isComplete: req.body.isComplete,
      creationDate: req.body.creationDate,
      taskId: req.body.taskId
    });  
  try {
    connectDB();
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// exports.geTaskDescription = async (req, res) => {
//     try {
//         const  taskId = req.params.taskId;
//       const expenses = await Task.find(taskId); 
//       res.json(expenses);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

  exports.getTaskById = async (req, res) => {
    const taskId = req.params.id;
  
    try {
      connectDB();
      const task = await Task.findOne({ _id: _id });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(expense);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getCompletedTasks = async (req, res) => {
   
  
    try {
      connectDB();
      const task = await Task.find({ isComplete : true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.deleteTaskByTaskId = async (req, res) => {
    const taskId = req.params.taskId;
    try {
      connectDB();
      const task = await Expense.findOneAndDelete({ _id });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

    exports.updateTaskByTaskId = async (req, res) => {
        // const taskId = req.params.taskId;
        const { name, description, priority, startDate, endDate, isComplete, creationDate, taskId } = req.body;
        try {
          connectDB();
          const task = await Task.findOneAndUpdate  ({ taskId }, 
            { name, description, priority, startDate, endDate, isComplete, creationDate},
             { new: true });
            if (!task) {
                return res.status(404).json({ message: 'Expense not found' });
            }
            res.json(task);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    exports.updateCompletionByTaskId = async (req, res) => {
        // const taskId = req.params.taskId;
        const { taskId } = req.body;
        try {
          connectDB();
          const task = await Task.findOneAndUpdate  ({ taskId }, 
            {  isComplete : true},
             { new: true });
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.json(task);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
   