document.addEventListener("DOMContentLoaded", () => {
    // Section 1: Folder Selection and Display
    const chooseFolderButton = document.getElementById("choose-folder");
    const folderInput = document.getElementById("folder-input");
    const folderContents = document.getElementById("folder-contents");
  
    // Trigger folder input when "Choose Folder" button is clicked
    chooseFolderButton.addEventListener("click", () => {
      folderInput.click();
    });
  
    // Display folder contents when files are selected
    folderInput.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);
      folderContents.innerHTML = ""; // Clear previous contents
  
      files.forEach((file) => {
        const fileElement = document.createElement("div");
        fileElement.classList.add("file-item");
  
        fileElement.innerHTML = `
          <p class="file-name">${file.name}</p>
          <p class="file-meta">Size: ${(file.size / 1024).toFixed(2)} KB</p>
          <p class="file-meta">Path: ${file.webkitRelativePath}</p>
        `;
  
        folderContents.appendChild(fileElement);
      });
    });
  
    // Section 2: Footer Button Functionalities
    const buttons = document.querySelectorAll("footer button");
  
    // Home Button (1st Button)
    if (buttons[0]) {
      buttons[0].addEventListener("click", () => {
        alert("Navigating to Home...");
        window.location.href = "/"; // Redirect to homepage
      });
    }
  
    // Upload Button (2nd Button)
    if (buttons[1]) {
      buttons[1].addEventListener("click", () => {
        alert("Opening Upload Section...");
        const uploadSection = document.querySelector("#choose-folder");
        if (uploadSection) {
          uploadSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Search Button (3rd Button)
    if (buttons[2]) {
      buttons[2].addEventListener("click", () => {
        alert("Focusing on Search...");
        const searchInput = document.querySelector("header input");
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  
    // Settings Button (4th Button)
    if (buttons[3]) {
      buttons[3].addEventListener("click", () => {
        alert("Opening Settings...");
        // Add settings logic here
      });
    }
  
    // Add Button (+ Button)
    const addButton = document.querySelector(".add-btn");
    if (addButton) {
      addButton.addEventListener("click", () => {
        alert("Adding new items...");
        // Add new item logic here
      });
    }
  
    // Section 3: Notifications Button Functionality
    const notificationsButton = document.querySelector(".tabs button:nth-child(2)");
  
    notificationsButton.addEventListener("click", () => {
      alert("You have no new notifications at the moment.");
      // Replace with dynamic notification display logic if required
    });
  });