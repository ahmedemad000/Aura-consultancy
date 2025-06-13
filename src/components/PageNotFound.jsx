import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <img
        src="https://png.pngtree.com/png-clipart/20210627/original/pngtree-internet-website-webpage-error-page-404-png-image_6457525.jpg"
        alt="Construction Site"
        className="max-w-full h-auto md:max-w-lg mb-5 rounded-lg shadow-md"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Oops! It looks like this page is still under construction.
      </p>
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;