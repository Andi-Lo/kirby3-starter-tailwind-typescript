declare const lazyload: any;

function init() {
  window.addEventListener('load', () => {
      // init lazyloading
      
      const images: Element[] = [
        ...document.querySelectorAll('.lazyload'),
        ...document.querySelectorAll('img[loading="lazy"]'),
      ];
      lazyload(images);
    }, false);
}

init();