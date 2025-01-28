document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("admission-form");

    // Generate a random ID
    const generateRandomID = () => `MD-${Math.floor(100000 + Math.random() * 900000)}`;
    document.getElementById("id").value = generateRandomID();

    // Set the current date and time
    const now = new Date();
    document.getElementById("admit-time").value = now.toLocaleString();

    // Pre-fill form fields with data from the previous page
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get("firstName") || "";
    const lastName = urlParams.get("lastName") || "";
    const age = urlParams.get("age") || "";
    const contact = urlParams.get("contact") || "";
    const disease = urlParams.get("disease") || "";

    document.getElementById("name").value = `${firstName} ${lastName}`.trim();
    document.getElementById("age").value = age;
    document.getElementById("contact").value = contact;
    document.getElementById("disease").value = disease;

    // Form submission handler
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        form.reset();
    });
});