import todoImagePreview from '../assets/todo-preview.png';
import numberGuessingGamePreview from '../assets/number-guessing-game-preview.png';
import quotesGeneratorPreview from '../assets/quotes-generator-preview.png';
import contactFormPreview from '../assets/fm-contact-form-preview.jpg';
import adviceGeneratorPreview from '../assets/fm-advice-generator.jpg';
import ageCalcPreview from '../assets/fm-age-calc-preview.jpg';
import mortgageCalcPreview from '../assets/fm-mortgage-calc.jpg';
import weatherAppPreview from '../assets/weather-app-preview.webp';
import calculatorPreview from '../assets/calculator-preview.png';

const PROJECT_LIST = [
    {
        idx: 9,
        name: 'Calculator',
        previewLink: calculatorPreview,
        projectURL: "https://github.com/rahulmourya336/react-calc",
        routerLink: 'https://react-basic-calc.netlify.app/',
        showProject: true,
        takeaways: ['Styled Components', 'Typescript']
    },
    {
        idx: 8,
        name: 'Age Calc',
        previewLink: ageCalcPreview,
        projectURL: "https://github.com/rahulmourya336/fm-age-calculator-app",
        routerLink: 'https://fm-age-calculator-app-lime.vercel.app/',
        showProject: true,
        takeaways: ['Form Hooks', 'Validation',]
    },
    {
        idx: 7,
        name: 'Weather App',
        previewLink: weatherAppPreview,
        projectURL: "https://github.com/rahulmourya336/react-weather",
        routerLink: 'https://react101-weather.netlify.app/',
        showProject: true,
        takeaways: ['Openweather API',]
    },
    {
        idx: 6,
        name: 'Mortgage Calculator',
        previewLink: mortgageCalcPreview,
        projectURL: "https://github.com/rahulmourya336/fm-mortgage-repayment-calc",
        routerLink: 'https://fm-mortgage-repayment-calc.vercel.app/',
        showProject: true,
        takeaways: ['Form Hooks', 'Validation',]
    },
    {
        idx: 5,
        name: 'Advice Generator',
        previewLink: adviceGeneratorPreview,
        projectURL: "https://github.com/rahulmourya336/fm-advice-generator",
        routerLink: 'https://fm-advice-generator-mocha.vercel.app/',
        showProject: true,
        takeaways: ['Functional Component', 'API',]
    },
    {
        idx: 4,
        name: 'Contact Form',
        previewLink: contactFormPreview,
        projectURL: "https://github.com/rahulmourya336/fm-contact-form",
        routerLink: 'https://fm-contact-form-jade.vercel.app/',
        showProject: true,
        takeaways: ['Form Hooks', 'validation',]
    },
    {
        idx: 1,
        name: 'Todo Application',
        previewLink: todoImagePreview,
        routerLink: '/todo',
        showProject: true,
        takeaways: ['Functional Components', 'Routing']
    },

    {
        idx: 2,
        name: 'Number Guessing Game',
        previewLink: numberGuessingGamePreview,
        routerLink: '/number-guessing',
        showProject: true,
        takeaways: ['Functional Components', 'CSS']
    },
    {
        idx: 3,
        name: 'Random Quotes Generator',
        previewLink: quotesGeneratorPreview,
        projectURL: "https://github.com/rahulmourya336/react-random-quote-generator",
        routerLink: 'https://react-random-quote.vercel.app/',
        showProject: true,
        takeaways: ['Life cycle hooks', 'CSS', 'Canvas']
    },

];

export default PROJECT_LIST;