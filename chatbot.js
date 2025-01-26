const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotMessages = document.getElementById("chatbotMessages");

function toggleChat() {
  if (chatbotWindow.style.display === "none" || !chatbotWindow.style.display) {
    chatbotWindow.style.display = "flex";
  } else {
    chatbotWindow.style.display = "none";
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (message) {
    addMessage("user", message); // Display the user's message
    userInput.value = ""; // Clear the input field

    setTimeout(() => {
      const botReply = getBotResponse(message); // Get the bot's response
      if (botReply.redirect) {
        // Redirect for specific questions
        window.location.href = botReply.redirect;
      } else {
        addMessage("bot", botReply.message); // Display the bot's reply
      }
    }, 500); // Simulate typing delay
  }
}

function addMessage(sender, text) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageElement.textContent = text;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the latest message
}

function getBotResponse(message) {
  const responses = {
    "what is stress": {
      message: "Stress is a natural response to challenges or demands. Redirecting to more information...",
      redirect: "stress.html", // Replace with your actual page URL
    },
    "what are methods to relieve stress": {
      message: "There are many ways to relieve stress. Redirecting to a detailed guide...",
      redirect: "relieve-stress.html", // Replace with your actual page URL
    },
    hello: { message: "Hello! How can I assist you today?" },
    hi: { message: "Hi there! How are you feeling today?" },
  };

  const normalizedMessage = message.toLowerCase(); // Normalize the message for case-insensitive matching

  return (
    responses[normalizedMessage] || {
      message: "I'm here to help. Can you ask your question in a different way?",
    }
  );
}
