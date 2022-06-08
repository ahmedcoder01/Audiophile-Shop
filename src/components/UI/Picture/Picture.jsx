import React from "react";

function Picture({ sources, className = "" }) {
  const { mobile, tablet, desktop } = sources;

  return (
    <picture className={className}>
      <source media="(min-width:992px)" srcSet={desktop} />
      <source
        media="(min-width: 768px) and (max-width: 991px)"
        srcSet={tablet}
      />
      <source media="(max-width:767px)" srcSet={mobile} />
      <img src={desktop} alt="Product" />
    </picture>
  );
}

export default Picture;
