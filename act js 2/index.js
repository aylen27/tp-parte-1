const likeButton = document.querySelector('.like-button');
const likesCountElement = document.querySelector('.likes-count');

let likesCount = 0;

likeButton.addEventListener('click', () => {
    likesCount++;

    if (likesCount === 1) {
        likesCountElement.textContent = '1 like';
    } else {
        likesCountElement.textContent = `${likesCount} likes`;
    }
});