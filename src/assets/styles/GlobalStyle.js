import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Raleway', sans-serif;
		box-sizing: border-box;
		background-color: #8C11BE;
	}

    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
	background: #A328D6;
	border-radius: 5px;
	border-style: none;
	font-family: 'Raleway';
	font-size: 20px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #FFFFFF;
	padding: 0 20px;
	height: 46px;
	width: 326px;
}

input {
	background: #FFFFFF;
	border: none;
	border-radius: 5px;
	height: 58px;
	width: 326px;
	margin-bottom: 13px;
	padding: 0 10px;
	font-family: 'Raleway';
	font-size: 20px;
	display: flex;
	align-items: center;
}
`

export default GlobalStyle