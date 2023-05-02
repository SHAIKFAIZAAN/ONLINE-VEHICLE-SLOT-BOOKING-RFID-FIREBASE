const searchInput = document.querySelector('input[type="text"]');
const postImage = document.querySelectorAll('.post-image');
const likeButtons = document.querySelectorAll('.fa-heart');
const commentSection = document.querySelectorAll('.comments');
const avatar = document.querySelector('.avatar');

// Search function
searchInput.addEventListener('keyup', function(event) {
  const searchQuery = event.target.value.toLowerCase();

  postImage.forEach(function(post) {
    const caption = post.nextElementSibling.querySelector('p').textContent.toLowerCase();

    if (caption.indexOf(searchQuery) != -1) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

// Like function
likeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      button.parentNode.querySelector('p').textContent = parseInt(button.parentNode.querySelector('p').textContent) - 1 + ' likes';
    } else {
      button.classList.add('liked');
      button.parentNode.querySelector('p').textContent = parseInt(button.parentNode.querySelector('p').textContent) + 1 + ' likes';
    }
  });
});

// Comment function
commentSection.forEach(function(section) {
  section.addEventListener('click', function() {
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    section.appendChild(commentInput);
    commentInput.focus();

    commentInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const comment = document.createElement('p');
        comment.textContent = avatar.nextElementSibling.textContent + ' ' + event.target.value;
        section.insertBefore(comment, commentInput);
        event.target.value = '';
        section.removeChild(commentInput);
      }
    });
  });
});
