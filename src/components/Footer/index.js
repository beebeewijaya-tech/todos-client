function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="flex flex-col mt-20">
      <p className="text-black font-semibold text-lg sm:text-xl lg:text-2xl">
        Subscribe to our newsletter
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-1/2 md:w-1/4 mr-2 mt-5 py-2 px-4 rounded shadow-lg"
          placeholder="Your email address"
        />
        <button className="bg-primary hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 text-white py-2 px-6 rounded">
          Subscribe
        </button>
      </form>
    </footer>
  );
}

export default Footer;
