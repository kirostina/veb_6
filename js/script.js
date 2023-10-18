const viewButtons = document.querySelectorAll('.view-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Перегляд рецепту');
    });
});


deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Видалення рецепту');
    });
});
