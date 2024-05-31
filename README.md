# 25 Good Guys

Welcome to 25 Good Guys! This project is a comprehensive e-commerce platform where users can buy electric bikes and accessories, or customize their own electric bikes. The project is built with a React frontend, a Node.js backend, and uses MySQL for the database.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Browse Products**: View a list of available electric bikes and accessories from the database.
- **Customize Bikes**: Allow customers to customize their bikes and store their preferences in the database.
- **Authentication System**: Secure user authentication for accessing personalized features.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have the following installed:
- Node.js
- npm (Node package manager)
- MySQL

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/25-good-guys.git
    cd 25-good-guys
    ```

2. Navigate to the backend directory and install dependencies:
    ```sh
    cd backend
    npm install
    ```

3. Set up the MySQL database:
    - Create a new MySQL database.
    - Update the database configuration in the `.env` file with your database credentials:
        ```plaintext
        DB_HOST=your_database_host
        DB_USER=your_database_user
        DB_PASSWORD=your_database_password
        DB_NAME=your_database_name
        ```

4. Run the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

2. Start the React development server:
    ```sh
    npm start
    ```

## Usage
Once the installation is complete, you can use the application by navigating to [http://localhost:3000](http://localhost:3000) in your web browser. From there, you can browse available electric bikes and accessories, customize bikes, and make purchases.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/your-username/25-good-guys](https://github.com/your-username/25-good-guys)