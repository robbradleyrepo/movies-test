import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/api';
import styles from '../../styles/MoviesList.module.css';
import ErrorMessage from '../elements/error.jsx';
import PaginationButton from '../elements/PaginationButton';


const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 3;
  const prefixes = /^(The|A|An)\s+/i;

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const data = await fetchMovies();
        const sortedMovies = data.items.sort((a, b) => {
          const titleA = a.title.replace(prefixes, '').trim();
          const titleB = b.title.replace(prefixes, '').trim();
          return titleA.localeCompare(titleB);
        }); // Sort movies ignoring prefixes
        setMovies(sortedMovies);
        setIsLoading(false); // Set loading to false after fetching
        setError(null);
      } catch (error) {
        setIsLoading(false); // Ensure loading is set to false in case of errors
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const nextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const prevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const displayedMovies = movies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.loading_message}>Loading movies, please wait...</div>
      ) : error ? (
        <ErrorMessage message={error} onReload={reloadPage} />
      ) : (
        <>
          <p className={styles.listinfo}>Total entries found: {movies.length}</p>
          <p className={styles.listinfo}>Showing {itemsPerPage} entries per page.</p>
          <p className={styles.listinfo}>Entries sorted alpabetically, discounting title prefixes.</p>
          <ul className={isTransitioning ? styles.transitioning : ''}>
            {displayedMovies.map((movie) => (
              <li key={movie.id} className={styles.li} tabIndex="0">{movie.title}</li>
            ))}
          </ul>
          <p className={styles.pagination_info}>Page {currentPage} of {totalPages}</p>
          <div>
            <PaginationButton
              onClick={prevPage}
              disabled={currentPage === 1}
              ariaLabel="Previous page"
            >
              Previous
            </PaginationButton>
            <PaginationButton
              onClick={nextPage}
              disabled={currentPage === totalPages}
              ariaLabel="Next page"
            >
              Next
            </PaginationButton>
          </div>
        </>
      )}
    </div>
  );
};

export default MoviesList;
