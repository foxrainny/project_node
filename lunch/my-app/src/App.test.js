//import { render, screen } from '@testing-library/react';
//import App from './App';

const express = require('express') , http = require('http'), path = require('path') , static = require('serve-static')
;
var app = express()
const port = 3000

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
app.use('/', static(path.join(__dirname, 'html')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
