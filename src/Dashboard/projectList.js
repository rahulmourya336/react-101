import todoImagePreview from '../assets/todo-preview.png';
import numberGuessingGamePreview from '../assets/number-guessing-game-preview.png';
import quotesGeneratorPreview from '../assets/quotes-generator-preview.png';
import contactFormPreview from '../assets/fm-contact-form-preview.jpg';
import adviceGeneratorPreview from '../assets/fm-advice-generator.jpg';
import ageCalcPreview from '../assets/fm-age-calc-preview.jpg';
import mortgageCalcPreview from '../assets/fm-mortgage-calc.jpg';

const PROJECT_LIST = [
    {
        name: 'Mortgage Calculator',
        previewLink: mortgageCalcPreview,
        takeaways: ['Form Hooks', 'Validation',],
        routerLink: 'https://fm-mortgage-repayment-calc.vercel.app/',
        showProject: true,
        idx: 6
    },
    {
        name: 'Advice Generator',
        previewLink: adviceGeneratorPreview,
        takeaways: ['Functional Component', 'API',],
        routerLink: 'https://fm-advice-generator-mocha.vercel.app/',
        showProject: true,
        idx: 5
    },
    {
        name: 'Contact Form',
        previewLink: contactFormPreview,
        takeaways: ['Form Hooks', 'validation',],
        routerLink: 'https://fm-contact-form-jade.vercel.app/',
        showProject: true,
        idx: 4
    },
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
        takeaways: ['Life cycle hooks', 'CSS', 'Canvas'],
        routerLink: 'https://react-random-quote.vercel.app/',
        showProject: true,
        idx: 3
    },

];

export default PROJECT_LIST;