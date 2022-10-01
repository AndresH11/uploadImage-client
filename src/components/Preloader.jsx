import "../css/Preloader.css";

const Preloader = () => {
  return (
    <div className="reloader__container">
      <p className="reloader__text">Uploading...</p>
      <div className="reloader__externalBar">
        <div className="reloader__internalBar"></div>
      </div>
    </div>
  );
};

export default Preloader;