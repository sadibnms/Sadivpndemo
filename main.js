// Function to open a modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close a modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Event listeners for login & sign-up buttons
document.getElementById("login-btn").addEventListener("click", function() {
  openModal("login-modal");
});

document.getElementById("signup-btn").addEventListener("click", function() {
  openModal("signup-modal");
});

// Close modal when clicking outside of the modal box
window.addEventListener("click", function(event) {
  const loginModal = document.getElementById("login-modal");
  const signupModal = document.getElementById("signup-modal");
  
  if (event.target === loginModal) {
    closeModal("login-modal");
  }
  if (event.target === signupModal) {
    closeModal("signup-modal");
  }
});

// Basic form validation for login (optional)
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form from refreshing page
  
  const username = this.querySelector("input[type='text']").value.trim();
  const password = this.querySelector("input[type='password']").value.trim();
  
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
  } else {
    alert("Login successful (This is just a demo).");
    closeModal("login-modal");
  }
});

// Basic form validation for sign-up (optional)
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents form from refreshing page
  
  const fullName = this.querySelector("input[type='text']").value.trim();
  const email = this.querySelector("input[type='email']").value.trim();
  const password = this.querySelector("input[type='password']").value.trim();
  
  if (fullName === "" || email === "" || password === "") {
    alert("All fields are required.");
  } else {
    alert("Sign-up successful (This is just a demo).");
    closeModal("signup-modal");
  }
});