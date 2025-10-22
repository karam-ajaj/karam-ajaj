# GitHub Badge Page

This project is designed to create a badge page that generates dynamic badges based on user input. The application is built using TypeScript and utilizes EJS for templating.

## Project Structure

```
github-badge-page
├── src
│   ├── app.ts               # Entry point of the application
│   ├── lib
│   │   └── badgeReadme.ts   # Logic for generating badges
│   ├── templates
│   │   └── index.ejs        # EJS template for the badge page
│   └── types
│       └── index.ts         # Type definitions for the application
├── public
│   └── styles
│       └── main.css         # CSS styles for the badge page
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pemtajo/badge-readme.git
   cd badge-readme
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

Once the application is running, navigate to `http://localhost:3000` in your browser. You will see the badge generation interface where you can input your desired badge parameters.

## Examples

- To create a badge for a GitHub repository, input the repository name and select the desired badge style.
- The generated badge can be used in your README files or other documentation.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.