<?php
// Include the database configuration
require_once 'db_config.php';

// Fetch class roster from the database
$query = "SELECT * FROM students";
$result = mysqli_query($conn, $query);
$roster = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Class Roster</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>Class Roster</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
        </tr>
        <?php foreach ($roster as $student): ?>
            <tr>
                <td><?= $student['id']; ?></td>
                <td><?= $student['name']; ?></td>
                <td>
                    <a href="edit_student.php?id=<?= $student['id']; ?>">Edit</a>
                    <a href="delete_student.php?id=<?= $student['id']; ?>">Delete</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
    <a href="add_student.php">Add Student</a>
</body>
</html>
