import React from "react";

const RenderSmoothImage = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="smooth-image-wrapper">
      <img
        src={src}
        alt={alt}
        className={`smooth-image image-${imageLoaded ? "visible" : "hidden"}`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <div className="loader">
          <div className="pokeball">
            <div className="inner-ball"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderSmoothImage;
