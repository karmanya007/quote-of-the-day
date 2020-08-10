export const elements = {
	searchForm      : document.querySelector('.form-horizontal'),
	searchInput     : document.querySelector('.search-bar'),
	quoteArea       : document.querySelector('.blockquote'),
	category        : document.querySelector('.category'),
	date            : document.querySelector('.date'),
	tags            : document.querySelector('.tags'),
	quote_link      : document.querySelector('#quote_link'),
	quote_img_link  : document.querySelector('#quote_img_link'),
	quote_container : document.querySelector('.quote_container'),
	image_container : document.querySelector('.unsplash'),
	photo_link      : document.querySelector('#photo_link'),
	portfolio       : document.querySelector('#portfolio'),
	catagory_eg     : document.querySelector('.catagory-eg'),
	bottom          : document.querySelector('.bottom'),
	footer          : document.querySelector('.Footer')
};

export const renderLoader = (parent) => {
	const loader = `
        <div class="d-flex justify-content-center loader">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    `;
	parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
	const loader = document.querySelector('.loader');
	if (loader) loader.parentElement.removeChild(loader);
};
