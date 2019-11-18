import anime from 'animejs';

const animation = async (): Promise<void> => {
  /** circles animation */
  const animateCircles = async (): Promise<void> => {
    const bigCircleSelector: string = '.ml8 .circle-big';
    const smallCircleSelector: string = '.ml8 .circle-small';

    // main circle to zoom in
    await anime
      .timeline({ loop: false })
      .add({
        targets: bigCircleSelector,
        scale: [0, 2],
        opacity: [1, 0.5],
        easing: 'easeInOutExpo',
        rotateZ: 60,
        duration: 1000
      })
      //main circle to zoom out to normal position
      .add({
        targets: bigCircleSelector,
        scale: [2, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        rotateZ: 120,
        duration: 1000
      })
      //small circle
      .add({
        targets: smallCircleSelector,
        scale: [0, 1],
        duration: 600,
        easing: 'easeInOutExpo',
        offset: '-=1000'
      }).finished;

    //start spinning on big cicle
    anime({
      targets: bigCircleSelector,
      rotateZ: 0,
      duration: 8000,
      easing: 'linear',
      loop: true
    });

    //start spinning on small circle
    anime({
      targets: smallCircleSelector,
      rotateZ: 60,
      duration: 8000,
      easing: 'linear',
      loop: true
    });
  };

  /** logo animation */
  const animateMainLogo = (): void => {
    const logoElement = document.querySelector<HTMLElement>('#logo path');

    if (logoElement) {
      anime
        .timeline({ loop: false })
        .add({
          targets: logoElement,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          opacity: [0, 1],
          duration: 2000,
          begin: function(anim): void {
            logoElement.setAttribute('stroke', 'white');
          },
          complete: function(anim): void {
            logoElement.setAttribute('fill', 'url(#logo-gradient-fill)');
            logoElement.setAttribute('stroke', 'black');
          }
        })
        .add({
          targets: logoElement,
          duration: 1000,
          easing: 'linear',
          complete: function(anim): void {
            logoElement.setAttribute('fill', 'url(#logo-gradient-fill)');
            logoElement.setAttribute('stroke', 'black');
          }
        });
    }
  };

  await animateCircles();
  animateMainLogo();
};

export default animation;
