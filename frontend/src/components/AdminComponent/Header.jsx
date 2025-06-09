const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-gray-900 font-semibold text-lg">Panel Admin</h1>
      <div className="flex items-center gap-4 text-gray-500 text-sm select-none">
        <button
          aria-label="Notifications"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <i className="fas fa-bell"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
