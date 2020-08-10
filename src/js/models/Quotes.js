export default class Search {
	constructor (query) {
		this.query = query;
	}
	async getResults () {
		await fetch(`http://quotes.rest/qod.json?category=${this.query}`)
			.then((res) => res.json())
			.then((data) => {
				const result = data.contents.quotes[0];
				this.quote = result.quote;
				this.author = result.author;
				this.backgroundURL = result.background;
				this.category = result.category;
				this.date = result.date;
				this.link = result.permalink;
				this.tags = result.tags;
			})
			.catch((error) => {
				alert(error);
				console.error('Error:', error);
			});
	}
}
