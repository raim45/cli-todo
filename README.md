# cli-todo

A simple todo app that lives in your terminal. Add tasks, mark them done, or delete them , all from the command line. No database, no UI, just Node.js and your terminal.

## Run Locally

Clone the project

```bash
git clone https://github.com/raim45/cli-todo.git
cd cli-todo
```

## Usage/Examples

```bash
node todo.js <command> <argument>
```

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `add <task>` | Add a new todo | `node todo.js add "watch anime"` |
| `list` | List all todos | `node todo.js list` |
| `done <id>` | Mark a todo as complete | `node todo.js done 1` |
| `del <id>` | Delete a todo | `node todo.js del 1` |
| `clear` | Delete all todos | `node todo.js clear` |