# Insert Timestamp

**Insert Timestamp** is a lightweight VS Code extension that quickly inserts the **current date and time in UTC+8** at the cursor. Works in **any editor**, including **Jupyter Notebook (.ipynb) cells**, making it perfect for logging, note-taking, and documenting edits.

---

## Features

- Insert the current timestamp in `YYYY-MM-DD HH:mm:ss` format (UTC+8).  
- Works in all editors, including `.py` files and Jupyter Notebook cells.  
- Assign a **custom keyboard shortcut** for fast insertion.  

---

## Usage

### Keyboard Shortcut (Recommended)

Default shortcut:

```

Ctrl+Shift+T

```

1. Place your cursor where you want the timestamp.  
2. Press the shortcut — a timestamp like this will appear:

```

2025-09-08 20:45:12

````

> ⚠️ On Linux, `Ctrl+Alt+T` opens the terminal by default, so a different shortcut is recommended.

### Command Palette

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).  
2. Search for: `Insert Timestamp`  
3. Press `Enter` to insert the timestamp at the cursor.

---

## Installation

### Local Installation via VSIX

1. Package the extension:

```bash
vsce package
````

2. Install the generated `.vsix`:

```bash
code --install-extension insert-timestamp-0.0.1.vsix
```

### From Marketplace (Optional)

Once published, search for **Insert Timestamp** in the VS Code Marketplace.

---

## Customization

* Change the keyboard shortcut in `package.json` or via **File → Preferences → Keyboard Shortcuts**.
* Modify the timestamp format or timezone by editing `src/extension.ts`. The current implementation uses **UTC+8**.

---

## Contributing

Feel free to fork the repository and submit PRs. Suggestions for new formats, automatic logging, or other enhancements are welcome!

---

## License

MIT License © ZelinYang21

