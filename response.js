// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");
  
    if (!name || !email || !email.includes("@")) {
      message.textContent = "Please enter a valid name and email.";
      message.style.color = "red";
    } else {
      message.textContent = "Form submitted successfully!";
      message.style.color = "green";
      this.reset();
    }
  });
  
  // To-Do List
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
  