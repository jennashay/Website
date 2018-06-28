let header = document.querySelector('header');
//      let lastPos = document.body.scrollTop;
//      window.onscroll = () => {
//        e.preventDefault();
//        if (document.body.scrollTop > lastPos) {
//          header.classList.add('hide');
//          header.classList.remove('unhide');
//        } else {
//          header.classList.add('unhide');
//          header.classList.remove('hide');
//        }
//        lastPos = document.body.scrollTop;
//      };

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

//            header.classList.add('hide')
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        block: 'start',
          behavior: 'smooth'
      });
  });
});