define("app/myWidget", ["dojo/_base/declare"
],
    function (
        declare
              ) {

        return declare([],
            {
                theString: 'The test string',
                    
                constructor: function () {
                    var a = "another string";
                }

            });

    });