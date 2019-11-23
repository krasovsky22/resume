import { delay } from './../../Utils/delay';
import anime from 'animejs';

export async function animateLogo(): Promise<void> {
  /** circles animation */
  const animateCircles = async (): Promise<void> => {
    const bigCircleSelector: string = '.ml8 .circle-big';
    const smallCircleSelector: string = '.ml8 .circle-small';

    await delay(4000);

    // main circle to zoom in
    await anime
      .timeline({ loop: false })
      .add({
        targets: bigCircleSelector,
        scale: [0, 2],
        opacity: [0, 0.5],
        easing: 'easeInOutExpo',
        rotateZ: 60,
        duration: 500
      })
      //main circle to zoom out to normal position
      .add({
        targets: bigCircleSelector,
        scale: [2, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        rotateZ: 120,
        duration: 500
      })
      //small circle
      .add({
        targets: smallCircleSelector,
        scale: [0, 1],
        opacity: [0, 1],
        duration: 400,
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
  const animateMainLogo = async (): Promise<void> => {
    const logoElement = document.querySelector<HTMLElement>('.empty-logo path');

    if (logoElement) {
      await anime.timeline({ loop: false }).add({
        targets: logoElement,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        opacity: [0, 1],
        duration: 2000,
        begin: function(anim): void {
          logoElement.setAttribute('stroke', 'white');
        },
        complete: function(anim): void {
          logoElement.setAttribute('stroke', 'black');
        }
      }).finished;
    }
  };

  await animateCircles();
  await animateMainLogo();
}
