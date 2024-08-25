# Modern Front-End Boilerplate
[![License](https://img.shields.io/github/license/chrlzs/modern-front-end-boilerplate)](https://github.com/chrlzs/modern-front-end-boilerplate/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/chrlzs/modern-front-end-boilerplate)](https://github.com/chrlzs/modern-front-end-boilerplate/graphs/contributors)
[![Stars](https://img.shields.io/github/stars/chrlzs/modern-front-end-boilerplate)](https://github.com/chrlzs/modern-front-end-boilerplate/stargazers)
[![Forks](https://img.shields.io/github/forks/chrlzs/modern-front-end-boilerplate)](https://github.com/chrlzs/modern-front-end-boilerplate/network/members)

## Project Description

The aim of this project is to establish a foundation for a simple web project that:

- Is free from any back-end dependencies.
- Does not rely on JavaScript frameworks and libraries such as React, Angular, or Axios.
- Avoids CSS frameworks and preprocessors like Tailwind and Sass.

Many of these frameworks and libraries were developed before native solutions were available. Today, modern HTML, CSS, and JavaScript provide most of the necessary functionality natively, eliminating the need for third-party dependencies.

While this boilerplate may not be suitable for large, complex projects, it serves as a solid foundation for simpler projects. It offers a more straightforward and efficient approach, avoiding the complexity and learning curve associated with larger frameworks.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/chrlzs/modern-front-end-boilerplate.git
    ```
2. Navigate to the project directory:
    ```sh
    cd modern-front-end-boilerplate
    ```
3. Open `index.html` in your browser to see the project in action.

## Usage

- The project uses a virtual DOM to efficiently update the UI.
- It includes an example of using the Intersection Observer API to detect when elements are in view.
- It fetches data from an external API and dynamically renders it on the page.

## Running the Project

To run the project locally, you can use a simple HTTP server. Here are a few methods:

### Using Python's HTTP Server

If you have Python installed, you can use its built-in HTTP server:

1. Open a terminal in the project directory.
2. Run the following command:
    ```sh
    python -m http.server
    ```
3. Open your browser and navigate to `http://localhost:8000`.

### Using Node.js HTTP Server

If you have Node.js installed, you can use the `http-server` package:

1. Install `http-server` globally:
    ```sh
    npm install -g http-server
    ```
2. Open a terminal in the project directory.
3. Run the following command:
    ```sh
    http-server
    ```
4. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:8080`).

### Using Live Server Extension (Visual Studio Code)

If you are using Visual Studio Code, you can use the Live Server extension:

1. Install the Live Server extension from the VS Code marketplace.
2. Open the project directory in VS Code.
3. Right-click on `index.html` and select "Open with Live Server".

## Project Structure

```
modern-front-end-boilerplate/
├── css/
│   └── styles.css
├── js/
│   ├── components.js
│   ├── main.js
│   └── virtualDOM.js
├── index.html
└── README.md
```


- `index.html`: The main HTML file.
- `css/styles.css`: The stylesheet for the project.
- `js/components.js`: Contains functions for rendering components.
- `js/main.js`: The main JavaScript file that initializes the app.
- `js/virtualDOM.js`: Contains functions for creating and diffing the virtual DOM.

## Features

- **Virtual DOM**: Efficiently updates the UI by only re-rendering parts that have changed.
- **Intersection Observer**: Detects when elements are in view and logs them to the console.
- **Fetch API**: Fetches data from an external API and dynamically renders it on the page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
