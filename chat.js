function sendMessage() {
  let input = document.getElementById("msgInput");
  let text = input.value.trim();

  if (text === "") return;

  let msgBox = document.getElementById("messages");

  let div = document.createElement("div");
  div.className = "message";
  div.innerText = text;

  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;

  input.value = "";
}