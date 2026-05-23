const { read, write } = require("./storage.js");

const add = (task) => {
  const tasks = read();
  const length = tasks.length == 0 ? 1: tasks[tasks.length -1].id + 1
  tasks.push({ id: length, task: task, done: false });
  write(tasks);
};

const list = () => {
  const tasks = read();
  tasks.forEach((task) => {
    console.log(`${task.id}. ${task.task} ${task.done ? "✓" : "✗"}`);
  });
};

const done = (idt) => {
  const tasks = read();
  const item = tasks.find((check) => check.id == Number(idt));
  if (!item) {
    return console.log("id does not exist");
  }

  item.done = true;
  write(tasks);
};

const delT = (idt) => {
  const tasks = read();
  const remaining = tasks.filter((task) => task.id != Number(idt));
  write(remaining);
};

const clear = () => {
  write([]);
};

module.exports = { add, list, done, delT, clear };
