export const Pending = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  );
};
