const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const footerElement = button.parentElement;
        const likesCountElement = footerElement.querySelector('.likes-count');
 const currentLikesText = likesCountElement.textContent;
        const match = currentLikesText.match(/\d+/);
        let likesCount = match ? parseInt(match[0], 10) : 0;

        likesCount++;

        if (likesCount === 1) {
            likesCountElement.textContent = '1 like';
        } else {
            likesCountElement.textContent = `${likesCount} likes`;
        }
    });
});