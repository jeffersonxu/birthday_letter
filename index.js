var intro = new Typed('.intro', {
    typeSpeed: 48,
    strings: ['Happy Birthday Carter'],
    showCursor: false
});

var el = document.getElementById('final');

var typed = new Typed('#typed', {
    typeSpeed: 20,
    stringsElement: '#typed-strings',
    showCursor: false,
    onComplete: (self) => {
        el.classList.remove('hidden');
    }
});
