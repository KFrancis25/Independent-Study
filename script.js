// script.js

// Login page logic
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // TO DO: Implement login authentication logic here
  // For now, just redirect to home page
  window.location.href = 'home.html';
});

// Home page logic
document.getElementById('create-note-btn').addEventListener('click', () => {
  const stickyNoteContainer = document.getElementById('sticky-notes-container');
  const stickyNote = document.createElement('div');
  stickyNote.className = 'sticky-note';
  stickyNote.innerHTML = '<input type="text" placeholder="Type something...">';
  stickyNoteContainer.appendChild(stickyNote);
});

// Account page logic
document.addEventListener('DOMContentLoaded', () => {
  const usernameDisplay = document.getElementById('username-display');
  // TO DO: Implement logic to display username here
  usernameDisplay.textContent = 'John Doe'; // Replace with actual username
});

// Signup page logic
document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  // TO DO: Implement signup logic here
  // For now, just redirect to home page
  window.location.href = 'home.html';
});

// Note page logic
document.getElementById('save-note-btn').addEventListener('click', () => {
  const noteContent = document.getElementById('note-content').value;
  const currentPageIndex = parseInt(window.location.hash.substring(1));
  diaryPages[currentPageIndex].content = noteContent;
  localStorage.setItem('diaryPages', JSON.stringify(diaryPages));
  alert('Note saved!');
});

// Home page logic
document.getElementById('create-note-btn').addEventListener('click', () => {
  window.location.href = 'note.html';
});