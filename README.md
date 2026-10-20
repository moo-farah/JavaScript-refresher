# JavaScript Refresher

A personal practice repo for revisiting core JavaScript concepts. Each file is a small, runnable lesson with comments and `console.log` examples — not a packaged app or framework project.

## Requirements

- [Node.js](https://nodejs.org/) (any recent version)

No `npm install` needed. Lessons are plain `.js` files you run directly.

## How to run a lesson

```bash
node lessons/arrays.js
node lessons/functions.js
node arithmetic-operators/control-flow.js
```

## Project structure

```
javaScript-refresher/
├── lessons/                  # Core language topics
│   ├── dynamic-typing.js     # typeof, runtime type changes
│   ├── objects.js            # object literals, nested data, Object methods
│   ├── arrays.js             # mutate, search, map / filter / reduce
│   └── functions.js          # declarations, closures, memoize, debounce, throttle, async/await
└── arithmetic-operators/     # Operators and comparisons
    ├── operators.js          # (in progress)
    └── control-flow.js       # comparison operators (==, ===, >, <, …)
```

## Topics covered

| Area | What’s practiced |
|------|------------------|
| Types | Dynamic typing and `typeof` |
| Objects | Creating, mutating, and nesting objects |
| Arrays | `push` / `pop` / `shift` / `unshift`, `splice`, `sort`, `map`, `filter`, `reduce` |
| Functions | Function expressions, arrow functions, closures |
| Patterns | Memoization, debounce, throttle |
| Async | Promises, `async`/`await`, `fetch`, `Promise.all` |
| Operators | Comparison operators and related control-flow examples |

## Notes

- Lessons are meant to be edited and re-run while learning.
- Some examples (for example network `fetch` calls) need an internet connection.
