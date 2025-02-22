'use strict';

(function() {
  function init() {
    var shepherd = setupShepherd();
    setTimeout(function() {
      shepherd.start();
    }, 400);
  }

  function setupShepherd() {
    var prefix = 'demo-';
    var shepherd = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'class-1 class-2',
        scrollTo: {
          behavior: 'smooth',
          block: 'center'
        },
        showCancelLink: true,
        tippyOptions: {
          maxWidth: 500
        }
      },
      classPrefix: prefix,
      styleVariables: {
        shepherdThemePrimary: '#00213b',
        shepherdThemeSecondary: '#e5e5e5'
      },
      useModalOverlay: true
    });
    shepherd.addStep({
      text: '\n         <p>\n           Shepherd is a JavaScript library for guiding users through your app.\n           It uses <a href="https://atomiks.github.io/tippyjs//" data-test-tippy-link>Tippy.js</a>,\n           another open source library, to render dialogs for each tour "step".\n         </p>\n        \n         <p>\n           Among many things, Tippy makes sure your steps never end up off screen or cropped by an overflow.\n           (Try resizing your browser to see what we mean.)\n         </p>\n         <p>\n           It also offers a robust API for styling animations of steps\n           as they enter and exit the view.\n         </p>',
      attachTo: {
        element: '.hero-welcome',
        on: 'bottom'
      },
      buttons: [
        {
          action: shepherd.cancel,
          secondary: true,
          text: 'Exit'
        },
        {
          action: shepherd.next,
          text: 'Next'
        }
      ],
      id: 'welcome'
    });
    shepherd.addStep({
      title: 'Including',
      text: 'Including Shepherd is easy! Just include shepherd.js. The styles are bundled with the JS.',
      attachTo: {
        element: '.hero-including',
        on: 'bottom'
      },
      buttons: [
        {
          action: shepherd.back,
          secondary: true,
          text: 'Back'
        },
        {
          action: shepherd.next,
          text: 'Next'
        }
      ],
      id: 'including'
    });
    shepherd.addStep({
      title: 'Creating a Shepherd Tour',
      text: 'Creating a Shepherd tour is easy. too! ' + 'Just create a \`Tour\` instance, and add as many steps as you want.',
      attachTo: {
        element: '.hero-example',
        on: 'right'
      },
      buttons: [
        {
          action: shepherd.back,
          secondary: true,
          text: 'Back'
        },
        {
          action: shepherd.next,
          text: 'Next'
        }
      ],
      id: 'creating'
    });
    shepherd.addStep({
      title: 'Attaching to Elements',
      text: 'Your tour steps can target and attach to elements in DOM (like this step).',
      attachTo: {
        element: '.hero-example',
        on: 'left'
      },
      buttons: [
        {
          action: shepherd.back,
          secondary: true,
          text: 'Back'
        },
        {
          action: shepherd.next,
          text: 'Next'
        }
      ],
      id: 'attaching'
    });
    shepherd.addStep({
      title: 'Centered Shepherd Element',
      text: 'But attachment is totally optional!\n       Without a target, a tour step will create an element that\'s centered within the view.       Check out the <a href="https://shepherdjs.dev/docs/">documentation</a> to learn more.',
      buttons: [
        {
          action: shepherd.back,
          secondary: true,
          text: 'Back'
        },
        {
          action: shepherd.next,
          text: 'Next'
        }
      ],
      id: 'centered-example'
    });
    shepherd.addStep({
      title: 'Learn more',
      text: 'Star Shepherd on Github so you remember it for your next project',
      attachTo: {
        element: '.hero-followup',
        on: 'top'
      },
      buttons: [
        {
          action: shepherd.back,
          secondary: true,
          text: 'Back'
        },
        {
          action: shepherd.next,
          text: 'Done'
        }
      ],
      id: 'followup',
      modalOverlayOpeningPadding: '10'
    });
    return shepherd;
  }

  function ready() {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      init();
    } else {
      document.addEventListener('DOMContentLoaded', init);
    }
  }

  ready();
}).call(void 0);
