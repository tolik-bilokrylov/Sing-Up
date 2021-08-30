import React from 'react';
import "./ModalInfo.scss";

export function ModalInfo({ active, setActive }) {
  return (
    <div
      className={active ? "modal modal--active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content modal__content--active" : "modal__content"}
        onClick={element => element.stopPropagation()}
      >
        <h2 className="modal__title">Privacy and Disclosures</h2>
        <ul>
          <li>Some info</li>
          <li>Some info</li>
          <li>Some info</li>
          <li>Some info</li>
          <li>Some info</li>
        </ul>
        <button
          className="modal__button"
          type="button"
          onClick={() => setActive(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
};