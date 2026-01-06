const NewApplyButton = () => {
  return (
    <button
      className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-bold px-4 py-2 rounded-full text-sm bg-transparent transition-all duration-200"
      onClick={() => {
        // Force navigation - this WILL work
        window.location.href = window.location.origin + window.location.pathname + '#/apply';
      }}
    >
      Apply Now
    </button>
  );
};

export default NewApplyButton;