// Sound notification feature
console.log("Sound system ready!");

// Function to play notification sound (if implemented)
function playNotificationSound() {
    // In future, we can add: new Audio('notification.mp3').play();
    console.log("🔔 Notification sound would play here");
}

document.getElementById('completeBtn').addEventListener('click', function() {
    // Show browser alert - FRONTEND VERSION
    alert("🎯 FRONTEND: Task marked complete!\n\nUI updated successfully\nNotification displayed");
    
    // Play notification sound
    playNotificationSound();
    
    // Update notification message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 10px;">✅</div>
            <h3 style="color: #2E7D32; margin-bottom: 5px;">Task Completed!</h3>
            <p>Design Notification System has been marked as complete.</p>
            <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">
                Notification sent at ${new Date().toLocaleTimeString()}
            </p>
        </div>
    `;
    
    // Add animation
    messageDiv.classList.add('fade-in');
    
    // Change button state
    this.innerHTML = '<span>✓</span> Task Completed!';
    this.style.background = 'linear-gradient(to right, #888, #666)';
    this.disabled = true;
    
    // Add confetti effect (simple version)
    for(let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = '🎉';
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-50px';
            confetti.style.fontSize = '20px';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    }
    
    // Add CSS for confetti animation
    if(!document.querySelector('#confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.innerHTML = `
            @keyframes fall {
                to { transform: translateY(100vh) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
});
