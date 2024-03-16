import "../../styles/spinner.css";

export const Loader = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
