import React from "react";

export const Thumb = ({ item, onClick, selected }) => {
  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number appearance-none bg-transparent touch-manipulation inline-flex w-40 h-40 shadow-md shadow-black/20 rounded-xl"
      >
        <img className="rounded-xl w-full object-cover" src={item} alt="" />
      </button>
    </div>
  );
};
