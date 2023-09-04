// Sample data for classes (you can fetch this from a backend)
const classes = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Science" },
    { id: 3, name: "History" }
];

// Function to dynamically display classes
function displayClasses() {
    const classesList = document.querySelector("ul");
    classes.forEach(classItem => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="class.html?id=${classItem.id}">${classItem.name}</a>`;
        classesList.appendChild(li);
    });
}

// Call the function to display classes when the page loads
window.onload = displayClasses;
