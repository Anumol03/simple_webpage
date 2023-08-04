//display  modal on click
 
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "unset";
        })

        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "none";
    }
}


//copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elemntToCopy = copy.previousElementSibling;
        elemntToCopy.select();
        document.execCommand("copy");
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const messageList = document.getElementById("message-list");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
      const message = messageInput.value;
      if (message.trim() !== "") {
        appendMessage("User", message);
        messageInput.value = "";
      }
    });

    function appendMessage(sender, content) {
      const messageItem = document.createElement("li");
      messageItem.className = "message";
      messageItem.textContent = `${sender}: ${content}`;
      messageList.appendChild(messageItem);
    }
  });
const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}
document.addEventListener("DOMContentLoaded", function() {
   
    const callButton = document.getElementById("call-button");
    callButton.addEventListener("click", function() {
      alert("Live call initiated. Please wait for an agent to connect.");
    });
  });