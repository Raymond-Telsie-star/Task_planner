document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const duration = document.getElementById('taskDuration').value.trim();

    if (!title || !description || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Task "${title}" added successfully!`);
    form.reset();
  });
});
