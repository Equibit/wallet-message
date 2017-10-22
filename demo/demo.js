const { create, runTask } = require('worker-task-runner/src/helpers')
const execTask = require('worker-task-runner/src/utils/exec')

// Mapper task will be executed per element:
const data = [1, 2, 3, 4, 5]

const workerUrl = 'worker-task-runner/src/worker'

// Define the main app: create a worker and run a task:
const app =
  create(workerUrl)
    .chain(worker => runTask(worker, 'demo/task')(data))

// Execute the application (see `data.task`):
execTask(app)
