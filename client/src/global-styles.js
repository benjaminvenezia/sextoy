import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
}

/* fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  font-size: 100%;
} /*16px*/

:root {
  --primary: #F6EBD8;

  /* colors */
  --primary-50: #e0fcff;
  --primary-100: #bef8fd;
  --primary-200: #87eaf2;
  --primary-300: #54d1db;
  --primary-400: #38bec9;
  --primary-500: #2cb1bc;
  --primary-600: #14919b;
  --primary-700: #0e7c86;
  --primary-800: #0a6c74;
  --primary-900: #044e54;

  /* grey */
  --grey-50: #f0f4f8;
  --grey-100: #d9e2ec;
  --grey-200: #bcccdc;
  --grey-300: #9fb3c8;
  --grey-400: #829ab1;
  --grey-500: #627d98;
  --grey-600: #486581;
  --grey-700: #334e68;
  --grey-800: #243b53;
  --grey-900: #102a43;
  /* rest of the colors */
  --black: #000;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  /* fonts  */
  --headingFont: 'Montserrat', Sans-Serif;
  --bodyFont: 'Montserrat', Sans-Serif;
  --small-text: 0.875rem;
  --extra-small-text: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--black);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 500px;
  --fluid-width: 90vw;
  --breakpoint-lg: 992px;
  --nav-height: 3rem;
  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
  background: var(--backgroundColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
  color: var(--textColor);
}

p {
  margin-bottom: 1.5rem;
  max-width: 40em;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: var(--letterSpacing);
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text-small {
  font-size: var(--small-text);
}

a {
  text-decoration: none;
  letter-spacing: var(--letterSpacing);
}
a,
button {
  line-height: 1.15;
}
button:disabled {
  cursor: not-allowed;
}
ul {
  list-style-type: none;
  padding: 0;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}

/* alerts */
.alert {
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: var(--borderRadius);
  text-align: center;
  letter-spacing: var(--letterSpacing);
}

.alert-danger {
  color: var(--red-dark);
  background: var(--red-light);
}
.alert-success {
  color: var(--green-dark);
  background: var(--green-light);
}

.form {
  width: 90vw;
  max-width: var(--fixed-width);
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  transition: var(--transition);
}
.form:hover {
  box-shadow: var(--shadow-4);
}
.form-label {
  display: block;
  font-size: var(--smallText);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}
.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: var(--borderRadius);
  background: var(--backgroundColor);
  border: 1px solid var(--grey-200);
}
.form-input,
.form-select,
.btn-block {
  height: 35px;
}
.form-row {
  margin-bottom: 1rem;
}


.remove-animation {
  transform: translateY(-3000px);
  transition: 2s;
  transition-timing-function: cubic-bezier(0.35, 0.1, 0.85, 2);
}

.remove-animation video{
  opacity: 0;
  transition: .3s;
}

.remove-animation button{
  opacity: 0;
  transition: .3s;
}

.remove-animation p{
  opacity: 0;
  transition: .3s;
}

`

export default GlobalStyles
