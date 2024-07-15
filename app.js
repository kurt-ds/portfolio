const buttons = document.querySelectorAll('.skill-buttons>button');
const skills = document.querySelectorAll('.skills-container>div');


buttons.forEach(button => {
  button.addEventListener('click', function() {
    const contentId = this.id.split("-")[0] + "-skills";
    console.log(contentId);

    // Remove active class from all buttons *except* the clicked one
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Hide all content elements
    skills.forEach(skill => skill.classList.add('hidden'));

    document.getElementById(contentId).classList.remove('hidden');
  });
});


console.log(buttons);