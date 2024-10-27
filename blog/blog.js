const articles = [
    {
		id: 1,
		title: 'Diary of a Wimpy Kids',
		date: 'April 1, 2007',
		description:
			'Follow Greg Hefly on his adventures through middleschool Will he fit in or be another social outcast?',
		imgSrc: 'images/wimpy.jpg',
		imgAlt: 'Cover of Diary of a Wimpy Kid',
		ages: '8-12 years old',
		genre: 'Humor',
		stars: '4.7 stars'
	},
    {
		id: 2,
		title: 'Diary of a Wimpy Kid 2 - Rodrick Rules',
		date: 'February 4, 2008',
		description:
			'Follow Gre Hefly and his brother Rodrick as they break the rules ogether; Or do they just follow their own?',
		imgSrc: 'images/wimpy2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '8-12 years old',
		genre: 'Humor',
		stars: '4.7 Stars'
	},{
	
		id: 3,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 4,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const articlesLiteralString = articles.map(article => `
	<div class="book-info">
		<div class="descriptions">
			<p class="date">${article.date}</p>
			<p class="age-range">${article.ages}</p>
			<p class="rating">${article.stars}</p>
			<p class="genre">${article.genre}</p>
		</div>
		<div class="author-image">
			<h2>${article.title}</h2>
			<div class="image-box">
				<img src="${article.imgSrc}" alt="${article.imgAlt}">
			</div>
			<p class="description">${article.description}</p>
		</div>
	</div>
	`).join('');


let container = document.getElementById("left-grid")
// container.innerText += "BRO"
container.innerHTML = articlesLiteralString;