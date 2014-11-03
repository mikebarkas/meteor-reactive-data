if (Meteor.isClient) {

  Breakpoints = {
    mobileMin: 100,
    mobileMax: 420,

    tabletMin: 421,
    tabletMax: 700,

    desktopMin: 701
  };

  Size = {
    _dep: new Deps.Dependency,

    get_height: function () {
      this._dep.depend();
      height = window.innerHeight;
      return height;
    },

    get_width: function () {
      this._dep.depend();
      width = window.innerWidth;
      return width;
    }
  };

  $(window).resize(function () {
    Size._dep.changed();
  });

  printSize = function () {
    var windowHeight = Size.get_height();
    var windowWidth = Size.get_width();

    console.log('Height: ', windowHeight);
    console.log('Width: ', windowWidth);

    if (Breakpoints.desktopMin == windowWidth) {
      console.log('test');
    }

  };

  Deps.autorun(function () {
    printSize();
  });
}


