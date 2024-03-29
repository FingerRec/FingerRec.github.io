$(document).ready(function() {

  let ratio = 0.7 * screen.width / 1600;

  document.getElementById("stats_id").style.transform = "scale(" + ratio + ")";

  if (screen.width / screen.height >  3 / 4) {
    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    let tl;
    let skipPaperOnComplete = false;
    let skipDownloadOnComplete = false;
    let skipTeamOnComplete = false;
    let skipExploreOnComplete = false;
    let skipLandingOnComplete = false;

    function background(tl, startTime, durationTime) {
      tl.to('#content', {
        backgroundPosition: '0vw -60vh',
        duration: durationTime
      }, startTime);
    }

    function start_disappear(tl, startTime, durationTime) {
      // Big logo to smaller logo
      tl.to('.header-top', {
        top: '5vh',
        scale: 0.5,
        duration: durationTime
      }, startTime);

      tl.to('#content', {
        backgroundPosition: '0vw calc(4vh - 37.5vw)',
        backgroundSize: '100vw 75vw',
        duration: durationTime
      }, startTime);

      tl.to('.please-scroll', {
        opacity: 0,
        duration: durationTime
      }, startTime);
    }

    function land_appear(tl, startTime, durationTime) {
      // making of the landing page
      tl.to('.header-top-name', {
        opacity: 1,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('.team-names', {
        width: '50vw',
        opacity: 1,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('#navigation', {
        top: '62vh',
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('#goToTop', {
        opacity: 0.3,
        zIndex: 1,
        duration: durationTime
      }, startTime);

      tl.to('.logo-container', {
        top: '78vh',
        zIndex: 1,
        duration: durationTime
      }, startTime);
    }

    function land_disappear(tl, startTime, durationTime) {
      tl.to('.header-top-name', {
        top: '12vh',
        scale: 0.8,
        opaity: 0.8,
        duration: durationTime
      }, startTime);

      tl.to('.team-names', {
        opacity: 0,
        duration: durationTime
      }, startTime);

      tl.to('.logo-container', {
        opacity: 0,
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('.header-top', {
        top: '0vh',
        scale: 0.25,
        duration: durationTime
      }, startTime);

      tl.to('#navigation', {
        opacity: 0,
        zIndex: 0,
        duration: 0.1
      }, startTime);
    }

    function nav_transition(tl, startTime, durationTime) { 
      tl.to('#navigation-left', {
        left: '1vw',
        zIndex: 1,
        duration: durationTime
      }, startTime);
    }

    function paper_appear(tl, startTime, durationTime){
      // Start of the paper
      tl.to('#navigation-left #paper_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the paper section moving up
      tl.to('#paper', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function paper_stay(tl, startTime, durationTime){
      // Start of the paper

      const text = document.getElementById('paper_text');

      // Break the text into individual characters
      const chars = text.textContent.split('');
      text.textContent = '';

      // Create span for each character and add to the DOM
      for (let char of chars) {
          let span = document.createElement('span');
          span.textContent = char;
          span.setAttribute("style","opacity:0;");
          text.appendChild(span);
          if (char=='.'){
            let newLine1 = document.createElement('br');
            let newLine2 = document.createElement('br');
            text.appendChild(newLine1);
            text.appendChild(newLine2);
          }
      }

      tl.staggerTo(text.children, 0.05, {opacity: 1}, 0.005);


      // Get the paper link element
      const paperLink = document.getElementById('paper_link');
      const links = paperLink.querySelectorAll('a');

      // Set initial opacity for links to 0
      links.forEach(link => {
          link.style.opacity = 0;
      });

      // Animate each link to fade in
      links.forEach(link => {
          tl.to(link, {
              opacity: 1,
              duration: 0.5
          }, startTime);
      });

      tl.to('#intro_video', {
        opacity: 1,
        duration: 1
      }, startTime);

      // Start of the paper
      tl.to('#intro_video', {
        width: '37vw',
        height: '21vw',
        duration: 1.5
      }, startTime);

      // Start of the paper
      tl.to('.video-container', {
        left: 0,
        duration: 1.5
      }, startTime);

      tl.to('#screenshot_text', {
        opacity: 1,
        duration: 0.1
      }, startTime);

      tl.to('#paper_screenshots a', {
        left: '0vw',
        opacity: 0.5,
        duration: 1
      }, startTime);
      

      for (let i = 1; i <= 9; i++) {
        tl.to('#page' + i, {
          left: (7*(i-1)) + 'vw',
          opacity: 1,
          duration: 1
        }, startTime+1);
      }
    }

    function paper_disappear(tl, startTime, durationTime){
      tl.to('#paper', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#paper', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#paper', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #paper_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function team_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #team_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the team section moving up
      tl.to('#team', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function team_stay(tl, startTime, durationTime){
      tl.to('#alex', {
        opacity: 1,
        left: '2.5vw',
        duration: 0.5
      }, startTime);

      tl.to('#alex', {
        scale: 0.8,
        left: '5vw',
        duration: 0.5
      }, startTime + 1);

      tl.to('#linjie', {
        opacity: 1,
        left: '17.5vw',
        duration: 0.5
      }, startTime + 1);

      tl.to('#linjie', {
        scale: 0.8,
        left: '20vw',
        duration: 0.5
      }, startTime + 2);

      tl.to('#qinhong', {
        opacity: 1,
        left: '32.5vw',
        duration: 0.5
      }, startTime + 2);

      tl.to('#qinhong', {
        scale: 0.8,
        left: '35vw',
        duration: 0.5
      }, startTime + 3);

      tl.to('#jianfeng', {
        opacity: 1,
        left: '47.5vw',
        duration: 0.5
      }, startTime + 3);

      tl.to('#jianfeng', {
        scale: 0.8,
        left: '50vw',
        duration: 0.5
      }, startTime + 4);

      tl.to('#kevin', {
        opacity: 1,
        left: '2.5vw',
        duration: 0.5
      }, startTime + 4);

      tl.to('#kevin', {
        scale: 0.8,
        left: '5vw',
        duration: 0.5
      }, startTime + 5);

      tl.to('#zhengyuan', {
        opacity: 1,
        left: '17.5vw',
        duration: 0.5
      }, startTime + 5);

      tl.to('#zhengyuan', {
        scale: 0.8,
        left: '20vw',
        duration: 0.5
      }, startTime + 6);

      tl.to('#lijuan', {
        opacity: 1,
        left: '32.5vw',
        duration: 0.5
      }, startTime + 6);

      tl.to('#lijuan', {
        scale: 0.8,
        left: '35vw',
        duration: 0.5
      }, startTime + 7);
      
      tl.to('#mike', {
        opacity: 1,
        left: '47.5vw',
        duration: 0.5
      }, startTime + 7);

      tl.to('#mike', {
        scale: 0.8,
        left: '50vw',
        duration: 0.5
      }, startTime + 8);
    }

    function team_disappear(tl, startTime, durationTime){
      tl.to('#left-arrow', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#team', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#team', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#team', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #team_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function explore_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #explore_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the explore section moving up
      tl.to('#explore', {
        top: '20vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function explore_stay(tl, startTime, durationTime){
      tl.to('#explore', {
        opacity: 1,
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }

    function explore_disappear(tl, startTime, durationTime){
      tl.to('#explore', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#explore', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#explore', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #explore_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function download_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #download_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the download section moving up
      tl.to('#download', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }


    function download_stay(tl, startTime, durationTime){
      tl.to('#download', {
        opacity: 1,
        duration: 1
      }, startTime);

      tl.to('#download', {
        opacity: 1,
        duration: durationTime - 1
      }, startTime + 1);
    }

    function download_disappear(tl, startTime, durationTime){
      tl.to('#download', {
        left: '100vh',
        duration: durationTime
      }, startTime);

      tl.to('#download', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#download', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #download_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }

    function stats_appear(tl, startTime, durationTime){
      tl.to('#navigation-left #stats_nav a', {
        fontSize: '4vw',
        opacity: 1,
        duration: 0.5
      }, startTime);

      // Animate the download section moving up
      tl.to('#stats', {
        top: '25vh',
        duration: durationTime,
        zIndex: 1
      }, startTime);
    }


    function stats_stay(tl, startTime, durationTime){
      tl.to('#stats', {
        opacity: 1,
        duration: 1
      }, startTime);

      tl.to('#stats', {
        opacity: 1,
        duration: durationTime - 1
      }, startTime + 1);
    }

    function stats_disappear(tl, startTime, durationTime){
      tl.to('#stats', {
        top: '-100vh',
        duration: durationTime
      }, startTime);

      tl.to('#stats', {
        opacity: 0,
        duration: 0.5
      }, startTime);

      tl.to('#stats', {
        zIndex: 0,
        duration: 0.1
      }, startTime);

      tl.to('#navigation-left #stats_nav a', {
        fontSize: '2vw',
        opacity: 0.5,
        duration: durationTime
      }, startTime);
    }


    // Create a GSAP timeline
    tl = gsap.timeline({
      paused: true, // Pause the timeline initially
      reversed: true, // Begin in the reversed state (animation end)
    });

    start_disappear(tl, 0, 0.5);
    land_appear(tl, 0.5, 0.5);

    land_disappear(tl, 1, 1);
    nav_transition(tl, 1, 1);
    paper_appear(tl, 1, 1);

    paper_stay(tl, 2, 3);

    paper_disappear(tl, 5, 1);

    team_appear(tl, 5, 1);

    team_stay(tl, 6, 8);

    team_disappear(tl, 15, 1);
    
    explore_appear(tl, 15, 1);

    explore_stay(tl, 16, 2);

    explore_disappear(tl, 18, 1);

    download_appear(tl, 18, 1);

    download_stay(tl, 19, 2);

    download_disappear(tl, 21, 1);
    stats_appear(tl, 22, 1);

    stats_stay(tl, 23, 2);

    stats_disappear(tl, 25, 1);

    background(tl, 0.5, 25.5);

    let lastTime = Date.now();
    let lastDelta = 0;
    let scrollSpeed = 0;
    let wheelTimeout;

    gsap.to(tl, {progress: 1, duration: 5, ease: "power1.inOut"}, 0);
    gsap.to(tl, {
      progress: 0, 
      duration: 1,
      ease: "power1.inOut", 
    }, 5);
    gsap.to('#loading-screen', {
      opacity: 0,
      zIndex: -99,
      duration: 0.5,
      ease: "power1.inOut", 
      onComplete: function() {
        //const loadScreen = document.getElementById('loading-screen');
        loadScreen.style.display = 'none';
      }
    }, 6);

    gsap.to('.header-top', {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut", 
      onComplete: function() {
        //const loadScreen = document.getElementById('loading-screen');
        start_mouse(tl);
      }
    }, 6.5);
    
    function start_mouse(tl) {
      tl.resume();
      // Add mouse wheel event listener
      $(window).on('wheel', wheelHandler);

      //Stop the animation when the mouse wheel is not in motion
      $(window).on('wheelstop', function() {
        clearTimeout(wheelTimeout);
        if (scrollSpeed < 0.1) {
          pauseAnimation();
        }
      });

      // Custom event for when the mouse wheel stops
      $.event.special.wheelstop = {
        setup: function() {
          $(this).on('wheel', function(e) {
            let timer = $(this).data('timer');
            if (timer) {
              clearTimeout(timer);
            }
            $(this).data('timer', setTimeout(function() {
              $(this).trigger('wheelstop');
            }, 200)); // Stop the animation after 200ms of inactivity
          });
        },
        teardown: function() {
          $(this).off('wheel');
          $(this).data('timer', null);
        }
      };
    }

    // Function to pause the animation
    function pauseAnimation() {
      tl.timeScale(0); // Set timeScale to 0 to pause the animation
    }

    // Mouse wheel event handler
    function wheelHandler(e) {
      // Calculate scroll speed
      let currentTime = Date.now();
      let deltaTime = currentTime - lastTime;
      let delta = e.originalEvent.deltaY;

      // Avoid division by zero
      if (deltaTime !== 0) {
        scrollSpeed = Math.abs(delta / deltaTime);
      }

      // Apply a function to the scroll speed to smooth out the animation speed
      scrollSpeed = Math.sqrt(scrollSpeed);

      // Apply a maximum speed limit to the animation
      scrollSpeed = Math.min(scrollSpeed, 2);

      lastTime = currentTime;
      lastDelta = delta;

      // Play or reverse animation based on scroll direction
      if (delta < 0) {
        // Scrolling up
        tl.timeScale(2 * scrollSpeed);
        tl.reverse();
      } else {
        // Scrolling down
        tl.timeScale(scrollSpeed);
        tl.play();
      }

      //updateBackgroundPosition();

      // Clear the previous timeout and set a new one
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(pauseAnimation, 200); // Pause the animation after 200ms of inactivity
    }

    // Select the paper link in the navbar
    $('a[href="#paper"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #paper)

      gsap.to(tl, {progress: 5 / tl.totalDuration(), duration: Math.abs(5 - tl.time()) / 3, ease: "power1.inOut"});
    });

    $('a[href="#team"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 15 / tl.totalDuration(), duration: Math.abs(10 - tl.time()) / 3, ease: "power1.inOut"});
    });

    $('a[href="#explore"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 17 / tl.totalDuration(), duration: Math.abs(12 - tl.time()) / 3, ease: "power1.inOut"});
    });

    $('a[href="#download"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 21 / tl.totalDuration(), duration: Math.abs(16 - tl.time()) / 3, ease: "power1.inOut"});
    });
    $('a[href="#stats"]').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #download)

      gsap.to(tl, {progress: 25 / tl.totalDuration(), duration: Math.abs(20 - tl.time()) / 3, ease: "power1.inOut"});
    });

    $('#goToTop').click(function(e) {
      e.preventDefault(); // Prevent the default action (navigating to #top)

      gsap.to(tl, {progress: 1 / tl.totalDuration(), duration: Math.abs(1 - tl.time()) / 3, ease: "power1.inOut"});
    });
  }
});
