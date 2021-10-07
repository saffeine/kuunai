allHTML = "";

relationships = {
    
    list: {},

    add: function( object ){
        var _element = $( "<a></a>" )
        .attr( "data-tag", object.tag )
        .attr( "href", "#" + object.tag )
        .attr( "onclick", "relationships.click( this );" )
        .attr( "title", object.name )
        .append( $( "<img>").attr( "src", object.image ) );

        this.list[object.tag] = object;
        return ( $( "body #sidebar" ).append( _element ) );
    },

    addDivider: function( label ){
        var _element = $( "<span></span>" ).attr( "class", "divider" ).html( "<p>" + label + "</p>" );
        return ( $( "body #sidebar" ).append( _element ) );
    },

    click: function( element ){
        var _tag = $( element ).attr( "data-tag" );
        var _data = this.list[_tag];

        $( "body #information .header" ).html( "" );
        $( "body #information .body" ).html( "" );
        $( "body #information .header" ).html( "<p>" + $( "relationships " + _tag + " name" ).text() + "</p>" );
        $( "body #information .body" ).html( $( "relationships " + _tag + " desc" ).html() );

        return 1;
    },

    onload: function(){

        relationships.addDivider( "AKALI" );

        relationships.add({
            tag: "akali",
            image: "https://i.imgur.com/rDH7gBm.png",
        });

        relationships.addDivider( "K/DA" );

        relationships.add({
            tag: "ahri",
            image: "https://i.imgur.com/4ywaADH.png",
        });

        relationships.add({
            tag: "evelynn",
            image: "https://i.imgur.com/YP2HcRg.png",
        });

        relationships.add({
            tag: "kaisa",
            image: "https://i.imgur.com/UOaWt9z.png",
        });

        relationships.add({
            tag: "seraphine",
            image: "https://i.imgur.com/3itVLgl.png",
        });

        relationships.addDivider( "TRUE DAMAGE" );

        relationships.add({
            tag: "ekko",
            image: "https://i.imgur.com/qZx7ABU.png",
        });

        relationships.add({
            tag: "qiyana",
            image: "https://i.imgur.com/c4isoQR.png",
        });

        relationships.add({
            tag: "senna",
            image: "https://i.imgur.com/2135Ky5.png",
        });
        
        relationships.add({
            tag: "yasuo",
            image: "https://i.imgur.com/IeqsuvX.png",
        });

        relationships.addDivider( "SHADOW ORDER" );

        relationships.add({
            tag: "kayn",
            image: "https://i.imgur.com/l5XgioR.png",
        });

        relationships.add({
            tag: "zed",
            image: "https://i.imgur.com/7rNTN6j.png",
        });

        relationships.addDivider( "OTHER" );

        relationships.add({
            tag: "irelia",
            image: "https://i.imgur.com/eNmtJNG.png",
        });

        relationships.add({
            tag: "jinx",
            image: "https://i.imgur.com/w0VBJ6s.png",
        });

        relationships.add({
            tag: "kayle",
            image: "https://i.imgur.com/06n1qbN.png",
        });

        relationships.add({
            tag: "riven",
            image: "https://i.imgur.com/2Ze9y8o.png",
        });

        relationships.add({
            tag: "sivir",
            image: "https://i.imgur.com/9ONYkTM.png",
        });
        
        relationships.addDivider( "" );

        /*
        relationships.addDivider( "" );

        relationships.add({
            tag: "",
            name: "",
            image: "",
            description: ""
        });
        */

        this.click( $( "body #sidebar a" ).get()[0] );
    }
}

