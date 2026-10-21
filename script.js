const toast = document.getElementById('toast');
let toastTimer;
function notify(message) {
  toast.firstChild.textContent = message + ' ';
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2700);
}
document.querySelectorAll('.download, #heroDownload').forEach(button => {
  button.addEventListener('click', () => notify(`${button.dataset.title || 'Celestial Drift'} download started`));
});
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filters .selected').classList.remove('selected');
    button.classList.add('selected');
    notify(`Showing ${button.textContent} wallpapers`);
  });
});
document.getElementById('previewBtn').addEventListener('click', () => {
  document.querySelector('#live').scrollIntoView({behavior:'smooth'});
  setTimeout(() => notify('Live wallpaper preview is playing'), 650);
});
toast.querySelector('b').addEventListener('click', () => toast.classList.remove('show'));
