# Insert Timestamp

**Insert Timestamp** is a lightweight VS Code extension that quickly inserts the **current date and time** at the cursor. It works in **any editor**, including **Jupyter Notebook (.ipynb) cells**, making it perfect for logging, note-taking, and documenting edits.

---

## Features

* Insert the current timestamp in `YYYY-MM-DD HH:mm:ss` format.
* Works in all editors, including `.py` files and Jupyter Notebook cells.
* Assign a **custom keyboard shortcut** for fast insertion.
* Configure the **timezone** via extension settings (e.g., `UTC`, `UTC+8`, `local`).

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
```

> ⚠️ On Linux, `Ctrl+Alt+T` opens the terminal by default, so a different shortcut is recommended.

### Command Palette

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Search for `Insert Timestamp`.
3. Press `Enter` to insert the timestamp at the cursor.

---
Here’s a refined version of your **Installation** section reflecting that users can install directly from VS Code, with a fallback to the Marketplace if needed:

---

## Installation

### Install Directly in VS Code

1. Open VS Code.
2. Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for **Insert Timestamp**.
4. Click **Install**.

> If you cannot access the Marketplace due to network restrictions, you can download the extension manually from the VS Code Marketplace.

### Manual Installation via VSIX (Fallback)

1. Download the `.vsix` file from the [Marketplace page](https://marketplace.visualstudio.com/items?itemName=ZelinYang21.insert-timestamp).
2. Install it using the command:

```bash
code --install-extension insert-timestamp-0.0.1.vsix
```

This ensures you can use the extension even if direct installation in VS Code isn’t accessible.

---

## Customization

* Change the keyboard shortcut via **File → Preferences → Keyboard Shortcuts**.
* Configure the timezone in VS Code Settings:

  1. Open **Settings → Extensions → Insert Timestamp → Timezone**.
  2. Enter a value such as `UTC`, `UTC+8`, `UTC-5`, or `local`.

The timestamp will automatically adjust according to your selected timezone.

---

## Contributing

Feel free to fork the repository and submit PRs. Suggestions for new formats, automatic logging, or other enhancements are welcome!

---

## License

MIT License © ZelinYang21

