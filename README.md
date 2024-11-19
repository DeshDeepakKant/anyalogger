# AnyaLogger 📊

**AnyaLogger** is a customizable, lightweight logging library built to simplify logging in Python projects. With intuitive setup and powerful features, AnyaLogger offers various log levels, customizable formatting, and flexible output options, making it an ideal choice for developers looking to implement efficient logging without overhead.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration Options](#configuration-options)
- [Advanced Usage](#advanced-usage)
- [Customization Guide](#customization-guide)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features ✨

- **Multiple Log Levels**: Provides the full range of log levels, including `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`, allowing you to filter and control log output.
- **Flexible Output**: Logs can be directed to both the console and a file, making it easy to maintain records.
- **Color-Coded Console Output**: Each log level is color-coded for easy identification in the terminal.
- **Customizable Log Formats**: Adjust the log format to include timestamps, log levels, and custom messages.
- **Log Rotation**: Option for file size-based log rotation, allowing for efficient log management.
- **Minimal Setup**: Easily add and configure AnyaLogger in any project with minimal setup.
  
---

## Installation 💻

To use AnyaLogger, first clone the repository and include it in your project. You can also install it using a package manager if it’s available on PyPI.

### Clone from GitHub

```bash
git clone https://github.com/DeshDeepakKant/AnyaLogger.git
cd AnyaLogger
```

If there are any dependencies, they can be installed using:

```bash
pip install -r requirements.txt
```

---

## Getting Started 🚀

AnyaLogger is designed for quick setup. Here’s a simple example of getting started:

### Basic Usage

```python
from anyalogger import AnyaLogger

# Initialize AnyaLogger
logger = AnyaLogger(log_level="DEBUG", log_to_file=True, log_filename="app.log")

# Log messages at various levels
logger.debug("Debugging information for troubleshooting.")
logger.info("General information about application flow.")
logger.warning("Warning: Check this condition!")
logger.error("An error occurred that needs attention.")
logger.critical("Critical failure: System shutting down!")
```

---

## Configuration Options 🔧

AnyaLogger can be configured with the following parameters to suit your needs:

- **`log_level`**: Minimum level of logs to display (e.g., `"DEBUG"`, `"INFO"`, `"WARNING"`, `"ERROR"`, `"CRITICAL"`).
- **`log_to_file`**: Enable/disable file logging. Default is `False`.
- **`log_filename`**: The filename for storing logs if `log_to_file` is set to `True`. Default is `"anyalogger.log"`.
- **`max_file_size`**: (Optional) Set maximum file size (in bytes) before triggering log rotation.
- **`backup_count`**: (Optional) Number of backup files to keep when log rotation is enabled.

### Example Configuration

```python
logger = AnyaLogger(
    log_level="INFO", 
    log_to_file=True, 
    log_filename="app.log", 
    max_file_size=1024*1024,  # 1MB
    backup_count=3
)
```

This configuration creates a log file that will rotate once it reaches 1MB, keeping up to 3 backup files.

---

## Advanced Usage ⚙️

### Custom Log Formats

You can modify the default log format to include elements like timestamps, process IDs, or custom messages. The format string is customizable in `anyalogger.py`.

```python
logger = AnyaLogger(
    log_level="DEBUG",
    log_format="{time} - {level} - {message}"
)
```

The above example will output logs in the format:
```
2023-10-10 14:32:45 - INFO - Application started successfully.
```

### Log Rotation

Log rotation prevents log files from growing indefinitely. Specify `max_file_size` and `backup_count` to enable file rotation.

### Color-Coded Console Output

AnyaLogger’s console output includes color codes to make it easier to distinguish log levels:

- **DEBUG**: Gray
- **INFO**: Green
- **WARNING**: Yellow
- **ERROR**: Red
- **CRITICAL**: Bold Red

---

## Customization Guide 🎨

AnyaLogger allows full customization. Modify the core attributes in `anyalogger.py` to suit your style:

- **Adding New Log Levels**: Extend the `LogLevel` class to add custom levels.
- **Changing Colors**: Customize color codes in the `ConsoleFormatter` section.
- **Custom File Handlers**: Implement custom handlers for unique logging requirements.

---

## Examples 📝

### Example 1: Simple Console Logger

```python
logger = AnyaLogger(log_level="INFO")
logger.info("Just logging to the console!")
```

### Example 2: Dual Output with Rotation

```python
logger = AnyaLogger(
    log_level="DEBUG",
    log_to_file=True,
    log_filename="application.log",
    max_file_size=500000,  # 500 KB
    backup_count=2
)

logger.debug("This will be stored in application.log and also printed in the console.")
```

### Example 3: Custom Log Format and Colors

```python
logger = AnyaLogger(
    log_level="WARNING",
    log_format="{time} | {level} | {message}",
)

logger.warning("This warning is displayed with a custom format!")
```

---

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Make sure your code follows the repository’s coding guidelines.

---

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments 🙌

Special thanks to all contributors and users who have helped shape AnyaLogger. Your feedback and support are instrumental in making this library better with each update.

