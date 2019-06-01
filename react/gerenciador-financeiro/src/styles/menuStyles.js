import { createGlobalStyle } from "styled-components";

export const MenuStyles = createGlobalStyle`
#page-wrap {
  text-align: center;
  /* Prevent sidebar from showing a scrollbar on page */
  overflow: auto;
}

#bm-menu-wrap {
  position: fixed !important;
  left: 0 !important;
}

/* Individual item */
.bm-item {
  display: inline-block;

  /* Our sidebar item styling */
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
}

/* Change color on hover */
.bm-item:hover {
  color: #bdc3c7;
}

/* The rest copied directly from react-burger-menu docs */

/* Position and sizing of burger button */
.bm-burger-button {
  position: relative;
  top: 0.6rem;
  left: 1rem;
  height: 30px;
  width: 35px;
  color: white;
  display: block;
  overflow: hidden;
}
/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #fff;
  position: relative !important;
  height: 2px !important;
  top: initial !important;
}

.bm-burger-button > span {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  position: relative;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #e9e9e9;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: black;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.menu-item {
  color: black;
}
`;
