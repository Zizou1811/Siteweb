// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add animation on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.container > section').forEach(section => {
        section.classList.add('animate__animated', 'animate__fadeIn');
    });
});
// Comment form submission
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const comment = this.comment.value;

    // Create a new comment element
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;

    // Append the new comment to the comment list
    document.getElementById('comment-list').appendChild(commentItem);

    // Clear the form
    this.reset();
});
