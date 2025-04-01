import '../../../styles/movieDetailsHeader.css';

export default function MovieDetailsHeader({searchAllHandler}) {

    return (
        <div className={'movie-details-header'}>
            <p className={'movie-details-header-text'}>netflixroulette</p>
            <img
                src={'/images/buttons/searchButton.png'}
                alt='search icon'
                className={'movie-details-search-icon'}
                aria-label={'search icon'}
                onClick={searchAllHandler}
            />
        </div>
    );
}
