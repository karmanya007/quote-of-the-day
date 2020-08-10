import Quotes from './models/Quotes';
import { elements, renderLoader, clearLoader } from './views/base';
import * as quotesView from './views/quotesView';
import * as imageView from './views/imageView';
import Image from './models/Image';

const state = {};

// Search controller
const controlQuotes = async () => {
	const query = quotesView.getInput();

	if (query) {
		state.quote = new Quotes(query);
		elements.bottom.style.display = 'block';
		elements.footer.style.display = 'block';
		quotesView.clearInput();
		quotesView.clearResults();
		renderLoader(elements.quoteArea);
		try {
			await state.quote.getResults();
			clearLoader();
			quotesView.clearResults();
			quotesView.renderQuote(state.quote);
		} catch (error) {
			alert('Error processing the query');
			clearLoader();
			quotesView.clearResults();
		}
	}
};

elements.searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	controlQuotes();
	window.location.href = '#focus';
});

// Image and categories Controller

window.addEventListener('load', async () => {
	state.image = new Image();
	try {
		await state.image.getResults();
		imageView.renderImage(state.image);
	} catch (error) {
		alert(error);
		console.error('Error!', error);
	}
});
