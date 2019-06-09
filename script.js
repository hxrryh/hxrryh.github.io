const tower = document.querySelector('.tower-burger'),
burgerItem = document.querySelectorAll('nav li'),
body = document.body,
ww = window.innerWidth - 100,
wh = window.innerHeight,
t = new TimelineLite({ paused: true });


burgerItem.forEach(e => {
  e.addEventListener('click', () => {
    if (!t.isActive()) {
      addBurgerItem(e);
      t.play();
    }
  });
});

function addBurgerItem(e) {
  const data = e.getAttribute('data-ingredient'),
  dataIcon = e.getAttribute('data-foodicon'),
  ingredient = document.createElement('div'),
  food = document.createElement('div'),
  randomPosition = Math.floor(Math.random() * (ww - 100 + 1)) + 100,
  prevChild = tower.firstChild;
  ;

  food.innerHTML = dataIcon;
  food.setAttribute('class', 'food');
  body.insertBefore(food, body.prevChild);
  ingredient.setAttribute('class', `burger-${data}`);
  tower.insertBefore(ingredient, prevChild);
  t.from(ingredient, .4, { ease: Back.easeOut.config(1.2), y: -50 });
  TweenLite.fromTo(food, 1.5, { x: randomPosition, y: -wh, ease: Back.easeOut.config(1.2) }, { x: randomPosition, y: 0 }, 0);

  if (prevChild && prevChild.classList.contains('bread--top')) {
    const path = [
    { xPercent: '-80', y: 0 },
    { xPercent: '-100', y: tower.offsetHeight >> 1 },
    { xPercent: '-100', y: tower.offsetHeight }];


    t.to([prevChild, ingredient], 0.9, { bezier: { values: path, autoRotate: true, curviness: 2 }, onComplete: () => {
        prevChild.remove();
        ingredient.remove();
      } }, '-=0.3');
  }
}