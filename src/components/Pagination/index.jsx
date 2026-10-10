function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div>
            <span>
                Trang {currentPage}/{totalPages}
            </span>
            <br />
            {/* first */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            >
                First
            </button>

            {/* pre */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        disabled={currentPage === page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                );
            })}

            {/* next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>

            {/* Last */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(totalPages)}
            >
                Last
            </button>
        </div>
    );
}

export default Pagination;
