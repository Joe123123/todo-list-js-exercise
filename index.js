/* eslint-disable func-style */
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];
console.log(tasks);

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
