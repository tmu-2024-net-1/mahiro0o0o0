let count = 0;

function increase() {
  count = count + 1;
  const message = document.querySelector("#message");
  message.textContent = count +"冊を同時に読む";
  updateCounter()
}

function decrease() {
  if(count > 1){
    count = count - 1;
    const message = document.querySelector("#message");
    message.textContent = count +"冊を同時に読む";
  }
  updateCounter()
}

function updateCounter() {
  var message = document.getElementById('novel2');
  if (count >= 2) {
      message.style.display = 'block';
  } else {
      message.style.display = 'none';
  }
}

const button = document.querySelector("button");
button.addEventListener("click", createParagraph);

// document.querySelector('#text').innerHTML = text.replace(/\n/g, '<br>')