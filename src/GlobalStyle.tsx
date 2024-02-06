import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
}
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
body {
  direction: ltr;
  font-family: 'Sora', sans-serif;
}
a {
  text-decoration: none;
}
ul, ol {
  list-style: none;
}
.full-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-center {
  align-items: center;
}
.align-start {
  align-items: start;
}
.align-end {
  align-items: end;
}
.justify-start {
  justify-content: start;
}
.justify-center {
  justify-content: center;
}
.justify-end {
  justify-content: end;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}
.gap-5 {
  gap: 5px;
}
.gap-10 {
  gap: 10px;
}
.mtb-5 {
  margin: 5px 0;
}
.mtb-10 {
  margin: 10px 0;
}
.ptb-5 {
  padding: 10px 0;
}
.ptb-10 {
  padding: 10px 0;
}
.mlr-5 {
  margin: 0 5px;
}
.mlr-10 {
  margin: 0 10px;
}
.plr-5 {
  paddin: 0 5px;
}
.plr-10 {
  padding: 0 10px;
}
`