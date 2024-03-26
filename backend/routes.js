// expenseRoutes.js
const express = require('express');
const router = express.Router();
const {updateCompletionByTaskId,addTask
,deleteTaskByTaskId , getCompletedTasks
, getTaskById, getTasks,updateTaskByTaskId
} = require('./api');


router.get('/get-tasks', getTasks);
router.get('/get-task/:id', getTaskById);
// router.get('/filter', getTaskById);
router.get('/get-completed', getCompletedTasks);
router.delete('/delete/:taskId',deleteTaskByTaskId);
router.put('/update', updateTaskByTaskId);

router.post('/add-task', addTask);

module.exports = router;