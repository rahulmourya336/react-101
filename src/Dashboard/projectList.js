import todoImagePreview from '../assets/todo-preview.png';
import numberGuessingGamePreview from '../assets/number-guessing-game-preview.png';
import quotesGeneratorPreview from '../assets/quotes-generator-preview.png';

const PROJECT_LIST = [
    {
        name: 'Todo Application',
        previewLink: todoImagePreview,
        takeaways: ['Functional Components', 'Routing'],
        routerLink: '/todo',
        showProject: true,
        idx: 1
    },

    {
        name: 'Number Guessing Game',
        previewLink: numberGuessingGamePreview,
        takeaways: ['Functional Components', 'CSS'],
        routerLink: '/number-guessing',
        showProject: true,
        idx: 2
    },
    {
        name: 'Random Quotes Generator',
        previewLink: quotesGeneratorPreview,
        takeaways: ['Life cycle hooks', 'CSS'],
        routerLink: '/quotes-generator',
        showProject: true,
        idx: 3
    },

];

export default PROJECT_LIST;