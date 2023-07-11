export const defaultHtml = `<h1>Welcome to my Dev Online Lab!!!</h1>
<p>Feel free to write your own HTML, CSS, Javascript here ~</p>

<div class="counter">
  <span id="count">0</span>
</div>

<button class="btn" onclick="incrementCounter()">Increment</button>

<a class="my-link" href="https://shorturl.asia/sVRDa" target="_blank">Visit my page</a>

`;

export const defaultCss = `body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 50px;
}

h1 {
  color: #333333;
}

.counter {
  margin-top: 30px;
  font-size: 24px;
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}

.my-link {
  margin-top: 50px;
  display: block;
}`;

export const defaultJs = `let countElement = document.getElementById("count");
let count = 0;

const incrementCounter = () => {
  count++;
  countElement.textContent = count;
}`;
