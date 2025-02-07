const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Membuat URL untuk Instagram dengan pesan otomatis
    const instagramUrl = "https://www.instagram.com/yngviana/";
    const message = encodeURIComponent("kapan"); // Encode pesan untuk URL
    
    // Membuka Instagram dalam aplikasi (mobile) atau web (desktop)
    window.location.href = `instagram://user?username=yngviana&message=${message}`;
    
    // Fallback untuk desktop/browser jika aplikasi tidak terinstall
    setTimeout(() => {
        window.location.href = instagramUrl;
    }, 500);
}