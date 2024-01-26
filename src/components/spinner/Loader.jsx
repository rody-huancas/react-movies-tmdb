import "../../styles/spinner.css";

export const Loader = () => {
  return (
    <div className="absolute h-1/3 bottom-1/2 left-1/2 right-1/2">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
