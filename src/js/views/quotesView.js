import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
	elements.searchInput.value = '';
};

export const clearResults = () => {
	elements.quoteArea.innerHTML = '';
	elements.category.innerHTML = '';
	elements.date.innerHTML = '';
	elements.tags.innerHTML = '';
	elements.quote_link.innerHTML = '';
	elements.quote_img_link.innerHTML = '';
};

export const renderQuote = (quote) => {
	let tags = '';
	const markup_quote = `
	<p class="mb-0 quote">
		${quote.quote}
	</p>
	<footer class="blockquote-footer quote-footer text-white">${quote.author}</footer>
	`;
	const markup_quote_link = `
		<a href = ${quote.link} target = '_blank''>QUOTE LINK</a>
	`;
	const markup_quote_img_link = `
		<a href = ${quote.backgroundURL} target = '_blank''>IMAGE LINK</a>
	`;
	elements.quoteArea.insertAdjacentHTML('afterbegin', markup_quote);

	elements.category.textContent = quote.category.toUpperCase();
	elements.date.textContent = quote.date;
	quote.tags.forEach((e) => {
		tags = tags + e.toUpperCase() + ' | ';
	});
	elements.tags.textContent = tags;
	elements.quote_link.insertAdjacentHTML('afterbegin', markup_quote_link);
	elements.quote_img_link.insertAdjacentHTML('afterbegin', markup_quote_img_link);
	elements.quote_container.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.01), rgba(255,255,255,0.01)),url(${quote.backgroundURL})`;
};
