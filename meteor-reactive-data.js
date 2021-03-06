if (Meteor.isClient) {

  // Device breakpoints.
  Breakpoints = {
    // Mobile.
    mobileMin: 100,
    mobileMax: 420,
    // Tablet,
    tabletMin: 421,
    tabletMax: 700,
    // Desktop,
    desktopMin: 701
  };

  // Get window size.
  // Apply a Deps dependency,
  Size = {
    _dep: new Deps.Dependency,

    // Window height,
    get_height: function () {
      this._dep.depend();
      height = window.innerHeight;
      return height;
    },

    // Window width.
    get_width: function () {
      this._dep.depend();
      width = window.innerWidth;
      return width;
    }
  };

  // Window callback to computation.
  $(window).resize(function () {
    Size._dep.changed();
  });

  // Compare window size to breakpoints.
  // Manipulate body class.
  bodyClass = function () {
    //var windowHeight = Size.get_height();
    var windowWidth = Size.get_width();

    //console.log('Height: ', windowHeight);
    //console.log('Width: ', windowWidth);

    // Example breakpoints.
    if (windowWidth >= Breakpoints.desktopMin) {
      console.log('Desktop');
      $('body').addClass('desktop').removeClass('mobile');
    }
    if (windowWidth < Breakpoints.desktopMin) {
      console.log('Mobile');
      $('body').removeClass('desktop').addClass('mobile');
    }

  };

  // Run the bodyClass function with Deps autorun.
  Deps.autorun(function () {
    bodyClass();
  });
}


