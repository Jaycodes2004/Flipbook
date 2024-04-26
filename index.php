<?php
session_start();

// Database connection settings
$host = "localhost"; // Change this to your database host
$username_db = "your_database_username"; // Change this to your database username
$password_db = "your_database_password"; // Change this to your database password
$database = "your_database_name"; // Change this to your database name

// Create connection
$conn = new mysqli($host, $username_db, $password_db, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if login form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    // Check if username and password are provided
    if (isset($_POST["loginUsername"]) && isset($_POST["loginPassword"])) {
        $username = $_POST["loginUsername"];
        $password = $_POST["loginPassword"];

        // Prepare SQL statement to retrieve user with provided username
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            // Verify password
            if (password_verify($password, $row["password"])) {
                // Set session variable
                $_SESSION["username"] = $username;

                // Redirect to welcome page with username as a query parameter
                header("Location: main.html");
                exit;
            } else {
                echo "Invalid username or password.";
            }
        } else {
            echo "Invalid username or password.";
        }
        $stmt->close();
    } else {
        echo "Please enter both username and password.";
    }
}

// Close connection
$conn->close();
?>
