let count = 1;


function increase() {
  if(read >= Math.pow(10, count)){
    read -= Math.pow(10, count);
    count = count + 1;
    const message = document.querySelector("#message");
    message.textContent = count +"冊を同時に読む";
    document.getElementById('scrollAmount').textContent = `所持read: ${parseInt(read)}`;
    document.getElementById('pay').innerHTML = `本を増やす<br>消費read: ${Math.pow(10, count)}`;
    updateCounter()
  }
}

function decrease() {
  if(count > 1){
    count = count - 1;
    const message = document.querySelector("#message");
    message.textContent = count +"冊を同時に読む";
    document.getElementById('scrollAmount').textContent = `所持read: ${parseInt(read)}`;
    document.getElementById('pay').innerHTML = `本を増やす<br>消費read: ${Math.pow(10, count)}`;
  }
  updateCounter()
}

function updateCounter() {
  var message2 = document.getElementById('novel2');
  if (count >= 2) {
      message2.style.display = 'block';
  } else {
      message2.style.display = 'none';
  }

  var message3 = document.getElementById('novel3');
  if (count >= 3) {
      message3.style.display = 'block';
  } else {
      message3.style.display = 'none';
  }

  var message4 = document.getElementById('novel4');
  if (count >= 4) {
      message4.style.display = 'block';
  } else {
      message4.style.display = 'none';
  }


}

const button = document.querySelector("button");
button.addEventListener("click", createParagraph);



// document.querySelector('#text').innerHTML = text.replace(/\n/g, '<br>')

