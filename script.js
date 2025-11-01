// toggle chatbot
function toggleChat() {
  const cb = document.getElementById("chatbot");
  cb.classList.toggle("open");
}

// send message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // BOT LOGIC
  const msg = text.toLowerCase();

  // 1) greeting
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    addMessage("Hello 👋 Welcome to DhofarCare. We serve home services in Dhofar.", "bot");
    addMessage("How can I help you? You can ask about services, prices, or availability.", "bot");
    return;
  }

  // 2) services
  if (msg.includes("service") || msg.includes("what do you have") || msg.includes("available")) {
    addMessage(
      "We provide: cleaning, AC maintenance, plumbing, electrical, painting & décor, CCTV/smart home, car wash, gardening, moving & furniture.",
      "bot"
    );
    addMessage("All services are for Dhofar areas only ✅", "bot");
    return;
  }

  // 3) price
  if (msg.includes("price") || msg.includes("how much") || msg.includes("cost")) {
    addMessage("Most services start from 5–10 OMR. AC / plumbing / electrical are around 15–25 OMR.", "bot");
    addMessage("Final price depends on your exact area and technician availability.", "bot");
    return;
  }

  // 4) 24/7 / time
  if (msg.includes("time") || msg.includes("open") || msg.includes("24") || msg.includes("available now")) {
    addMessage("Yes ✅ we receive requests 24/7.", "bot");
    addMessage("Please tell me your location in Dhofar (Salalah / Taqah / Mirbat / Thumrait / Rakhyut / Dhalkut).", "bot");
    return;
  }

  // 5) location
  if (msg.includes("salalah") || msg.includes("taqah") || msg.includes("mirbat") || msg.includes("thumrait") || msg.includes("rakhyut") || msg.includes("dhalkut")) {
    addMessage("Great 👍 your area is covered. We will send a technician after confirming the booking.", "bot");
    addMessage("You can also fill the booking form below 👇", "bot");
    return;
  }

  // 6) whatsapp / contact
  if (msg.includes("contact") || msg.includes("whatsapp") || msg.includes("phone")) {
    addMessage("You can contact us on WhatsApp: +968 92 345 678 📱 or call: +968 72 345 678 ☎️", "bot");
    return;
  }

  // default
  addMessage(
    "I didn't fully understand. Please contact us on WhatsApp: +968 92 345 678 or call: +968 72 345 678 for more details.",
    "bot"
  );
}

function addMessage(text, type) {
  const body = document.getElementById("chat-body");
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.innerHTML = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

// BOOKING FORM
const form = document.getElementById("booking-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());

    // TODO: call Firebase here if you want
    console.log("NEW BOOKING:", formData);

    document.getElementById("success-modal").classList.remove("hidden");
    form.reset();
  });
}

function closeModal() {
  document.getElementById("success-modal").classList.add("hidden");
}
