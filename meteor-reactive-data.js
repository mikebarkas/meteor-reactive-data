if (Meteor.isClient) {

  Name = {
    _dep: new Deps.Dependency,

    _value: null,

    get: function () {
      this._dep.depend();
      return this._value;
    },

    set: function (value) {
      if (EJSON.equals(this._value, value))
      return;

      this._value = value;
      this._dep.changed();
    }
  };

  printName = function () {
    var name = Name.get();

    console.log('name:', name);

  };

  Deps.autorun(function () {
    printName();
  });
}


