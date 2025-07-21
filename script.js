document.addEventListener('DOMContentLoaded', () => {

    const movies = [
        {
            title: 'Superman',
            genre: 'Action, Sci-Fi',
            releaseDate: 'July 11, 2025',
            description: 'A new cinematic journey exploring the origin of the Man of Steel, directed by James Gunn.',
            posterUrl: 'images/superman-poster.jpg',
            bannerUrl: 'images/superman-banner.jpg'
            
        },
        {
            title: 'War 2',
            genre: 'Action, Thriller',
            releaseDate: 'August 14, 2025',
            description: 'A high-octane sequel in the YRF Spy Universe, starring Hrithik Roshan and N.T. Rama Rao Jr.',
            posterUrl: 'images/war2-poster.jpg',
            bannerUrl: 'images/war2-banner.jpg'
        },
        {
            title: 'The Smashing Machine',
            genre: 'Biography, Drama, Sport',
            releaseDate: 'TBA 2025',
            description: 'The story of legendary mixed martial arts champion Mark Kerr, starring Dwayne Johnson and Emily Blunt.',
            posterUrl: 'images/smashing-poster.jpg',
            bannerUrl: 'images/smashing-banner.jpg'
        },
       
        {
            title: 'Jurassic World Rebirth',
            genre: 'Action, Adventure, Sci-Fi',
            releaseDate: 'July 2, 2025',
            description: 'A new era of dinosaur adventure begins with a fresh cast led by Scarlett Johansson.',
            posterUrl: 'images/jurassic-poster.jpg',
            bannerUrl: 'images/jurassic-banner.jpg'
        },
        {
            title: 'Sikandar',
            genre: 'Action, Drama',
            releaseDate: 'Eid 2025',
            description: 'Salman Khan stars in this highly anticipated action-entertainer directed by A.R. Murugadoss.',
            posterUrl: 'images/sikander-poster.jpg',
            bannerUrl: 'images/sikander-banner.jpg'
        },
        {
            title: 'Jolly LLB 3',
            genre: 'Comedy, Drama',
            releaseDate: 'September 2025',
            description: 'The beloved courtroom comedy returns, bringing together Akshay Kumar and Arshad Warsi.',
            posterUrl: 'images/jolly-poster.jpg',
            bannerUrl: 'images/jolly-banner.jpg'
        }
    ];

    // --- Dynamic Banner for Homepage ---
    const banner = document.getElementById('banner');
    if (banner) {
        let currentBannerIndex = 0;

        function updateBanner() {
            const movie = movies[currentBannerIndex];
            banner.style.backgroundImage = `url(${movie.bannerUrl})`;
            banner.innerHTML = `
                <div class="banner-content">
                    <h1>${movie.title}</h1>
                    <p>${movie.description}</p>
                    <a href="movies.html" class="btn">Learn More</a>
                </div>
            `;
            currentBannerIndex = (currentBannerIndex + 1) % movies.length;
        }

        updateBanner(); // Initial call
        setInterval(updateBanner, 4000); // Change banner every 7 seconds
    }

    // --- Populate Movie Grids ---
    function populateMovieGrid(containerId, movieList) {
        const grid = document.getElementById(containerId);
        if (grid) {
            grid.innerHTML = '';
            movieList.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');
                movieCard.innerHTML = `
                    <img src="${movie.posterUrl}" alt="${movie.title} Poster">
                    <div class="movie-card-content">
                        <h3>${movie.title}</h3>
                        <p><strong>Genre:</strong> ${movie.genre}</p>
                        <p><strong>Release:</strong> ${movie.releaseDate}</p>
                    </div>
                `;
                grid.appendChild(movieCard);
            });
        }
    }

    // Populate the full grid on movies.html
    populateMovieGrid('movie-grid', movies);

    // Populate the featured grid on index.html with the first 4 movies
    populateMovieGrid('featured-movies-grid', movies.slice(0, 2));

});
