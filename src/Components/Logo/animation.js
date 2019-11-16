import anime from 'animejs';

function delay(t) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, t);
  });
}

const animation = async () => {
  const animateCircles = async () => {
    const bigCircleSelector = '.ml8 .circle-big';
    const smallCircleSelector = '.ml8 .circle-small';

    anime
      .timeline({ loop: false })
      .add({
        targets: bigCircleSelector,
        scale: [0, 2],
        opacity: [1, 0.5],
        easing: 'easeInOutExpo',
        rotateZ: 60,
        duration: 1000
      })
      .add({
        targets: bigCircleSelector,
        scale: [2, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        rotateZ: 120,
        duration: 1000
      })
      .add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 600,
        easing: 'easeInOutExpo',
        offset: '-=1000'
      })
      .add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 600,
        offset: '-=550'
      });

    await delay(2000);

    anime({
      targets: bigCircleSelector,
      rotateZ: 0,
      duration: 8000,
      easing: 'linear',
      loop: true
    });

    anime({
      targets: smallCircleSelector,
      rotateZ: 60,
      duration: 8000,
      easing: 'linear',
      loop: true
    });

    await delay(200);
  };

  const animateMainLogo = async () => {
    const logoPath = document.querySelector('#logo path');

    anime
      .timeline({ loop: false })
      .add({
        targets: logoPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 2000,
        begin: function(anim) {
          logoPath.setAttribute('stroke', 'white');
        },
        complete: function(anim) {
          logoPath.setAttribute('fill', 'url(#logo-gradient-fill)');
          logoPath.setAttribute('stroke', 'black');
        }
      })
      .add({
        targets: logoPath,
        duration: 1000,
        easing: 'linear',
        complete: function(anim) {
          logoPath.setAttribute('fill', 'url(#logo-gradient-fill)');
          logoPath.setAttribute('stroke', 'black');
        }
      });
  };

  await animateCircles();
  await animateMainLogo();
};

export default animation;
