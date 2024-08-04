document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelectorAll('.growth');

    progressBar.forEach((bar) => {
        var parent = bar.parentElement.parentElement;
        // eventlistener needed
        if(parent.style.display !== 'none'){
            var v = parent.getAttribute('data-value');
            bar.style.width = v;
        }
        else{
            bar.style.width = '0%';
        }
    });
});
