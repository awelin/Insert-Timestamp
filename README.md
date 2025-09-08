# Insert Timestamp

**Insert Timestamp** is a lightweight VS Code extension that lets you quickly insert the current date and time at the cursor. Works in **any editor**, including **Jupyter Notebook (.ipynb) cells**, making it perfect for logging, note-taking, and documenting edits.

---

## Features

- Insert the current timestamp in `YYYY-MM-DD HH:mm:ss` format.
- Works in **all editors**, including `.py` files and `.ipynb` notebook cells.
- Assign a **custom keyboard shortcut** for fast insertion.

---

## Usage

### Method 1: Keyboard Shortcut
By default, the shortcut is:

```

Ctrl+Shift+T

```

Place your cursor where you want the timestamp and press the shortcut — it will insert something like:

```

2025-09-08 20:45:12

````

> ⚠️ On Linux, `Ctrl+Alt+T` opens the terminal by default, so a different shortcut is recommended.

### Method 2: Command Palette
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).  
2. Search for: `Insert Timestamp`  
3. Press `Enter` to insert the timestamp at the cursor.

---

## Installation

### From VSIX (Local)
1. Package the extension:

```bash
vsce package
````

2. Install the `.vsix` file:

```bash
code --install-extension insert-timestamp-0.0.1.vsix
```

### From Marketplace (Optional)

Once published, search for **Insert Timestamp** in the VS Code Marketplace.

---

## Customization

* Change the keyboard shortcut in `package.json` or via **File → Preferences → Keyboard Shortcuts**.
* Modify the timestamp format by editing `src/extension.ts`:

```ts
const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
```

---

## Contributing

Feel free to fork and submit PRs. Suggestions for new formats or auto-insertion features are welcome!

---

## License

MIT License © Zelin Yang