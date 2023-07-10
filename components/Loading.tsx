const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div
        className="w-9 h-9 rounded-full animate-spin
                    border-4 border-solid border-green-600 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loading;
