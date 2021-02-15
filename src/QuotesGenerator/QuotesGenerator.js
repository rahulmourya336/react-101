import React, { Component } from 'react';
import QUOTES from './QuoteList.json';
import './QuotesGenerator.css';
import html2canvas from 'html2canvas';

class QuotesGenerator extends Component {
    randomImageURL = ['https://picsum.photos/1200/720/?blur', 'https://picsum.photos/1200/720?grayscale&blur'];
    state = {
        imageURL: this.randomImageURL[0],
        quote: {
            title: '',
            author: ''
        }
    };
    render() {
        return (
            <>
                <div className="container p-4">
                    <div className="row">
                        <div className="col">
                            <h1>Quotes Generator</h1>
                        </div>
                        <div className="col text-end">
                            <button className="btn btn-primary text-right align-self-center" onClick={this.init.bind(this)}>Random Quote</button>
                        </div>
                    </div>
                    <div className="position-relative mt-4">
                        <div id="quoteImage">
                            <img src={this.state.imageURL} alt="quotes image" className="img-thumbnail" />
                            <blockquote className="position-absolute top-50">{this.state.quote.text} - <cite>{this.state.quote.author || 'Anonymus'}</cite></blockquote>
                        </div>
                        <button className="btn btn-primary position-absolute bottom-0 end-0" onClick={this.downloadAsImage.bind(this, 'quoteImage')}><span className="material-icons">
                            file_download
                        </span></button>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount() {
        this.init();
    }

    init() {
        this.initImageURL();
        this.generateQuote();
    }

    downloadAsImage(div) {
        html2canvas(document.getElementById(div), {useCORS: true, letterRendering: 1, allowTaint : true}).then(function (canvas) {
            document.body.appendChild(canvas);
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = `Quote${Date.now()}.jpg`;
            a.click();
            document.body.removeChild(canvas);
        });
    }

    initImageURL() {
        const index = this.generateRandomNumber(this.randomImageURL);
        console.log('imageURL', index);
        this.setState({ imageURL: this.randomImageURL[index] + '&hash' + Date.now() });
    }

    generateQuote() {
        const index = this.generateRandomNumber(QUOTES);
        this.setState({ quote: { ...QUOTES[index] } });
        console.log(this.state);
    }

    generateRandomNumber(list) {
        const totalQuotes = list.length;
        const randomIndex = Math.ceil(Math.random() * totalQuotes - 1);
        console.log(randomIndex, this.state);
        return randomIndex;

    }
}

export default QuotesGenerator;