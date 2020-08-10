export default class Image {
	async getResults () {
		await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.Unsplash_Access_Key}`)
			.then((res) => res.json())
			.then((data) => {
				const image = data;
				this.imageURL = image.urls.regular;
				this.image_location = image.links.html;
				this.user = image.user.name;
				this.userPortURL = image.user.portfolio_url;
			})
			.catch((error) => {
				alert(error);
				console.error('Error processing image:', error);
			});
		await fetch('http://quotes.rest/qod/categories.json')
			.then((cat) => cat.json())
			.then((cat_data) => {
				this.categories = cat_data.contents.categories;
			})
			.catch((error) => {
				alert(error);
				console.error('Error in processing categories:', error);
			});
	}
}
