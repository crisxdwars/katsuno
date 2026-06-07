const a1a1 = document.getElementById('toast');

function e_button(a1a1, toastClose, delayMs = 2000) {
    const open = a1a1.classList.toggle('toastClose');
    if (open) {
        setTimeout(() => a1a1.classList.remove('toastClose'), delayMs);
    }
}
