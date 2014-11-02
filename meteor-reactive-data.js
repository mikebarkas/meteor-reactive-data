if (Meteor.isClient) {

    Name = {

    };

    printName = function () {
        var name = Name.get();

    };

    Deps.autorun(function () {
        printName();
    });
}


