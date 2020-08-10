import { elements } from './base';

export const renderImage = (image) => {
	elements.image_container.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.001), rgba(255,255,255,0.001)),url(${image.imageURL})`;
	const markup_photo_link = `
        <a href = ${image.image_location} target = '_blank''>PHOTO</a>
    `;
	const markup_portfolio = `
        <a href = ${image.userPortURL} target = '_blank''>By ${image.user}</a>
    `;
	elements.photo_link.insertAdjacentHTML('afterbegin', markup_photo_link);
	elements.portfolio.insertAdjacentHTML('afterbegin', markup_portfolio);

	for (const property in image.categories) {
		elements.catagory_eg.insertAdjacentHTML('beforeend', `<div class="ml-2 bd-highlight">${property}</div>`);
	}
};
