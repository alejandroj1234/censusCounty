//--------------For loops which check two arrays for the same county IDs and then pass those IDS into a global array--------------------

    var firstFormatedMatchedCountyIDs;

    function firstD3MapNestedForLoops(first_array, second_array ) {
        
        var firstArrayCountyID;
        var secondArrayCountyID;
        var firstMatchedCountyIDsArray = new Array();
        
        for (var i=0; i < first_array.length; i++) {
            firstArrayCountyID = parseFloat(first_array[i].CountyID);

            for (var j=0; j < second_array.length; j++) {
                secondArrayCountyID = parseFloat(second_array[j].CountyID);

                if (secondArrayCountyID == firstArrayCountyID) {
                    firstMatchedCountyIDsArray.push([secondArrayCountyID]);

                    firstFormatedMatchedCountyIDs = formatMatchedCountyIDsArray(firstMatchedCountyIDsArray)
                    break;
                }
            }
        }
        if (firstFormatedMatchedCountyIDs == null) { 
            alert("There are no matches for your most recent search.  PLease delete your most recent choice and try another criteria")
        }
    };



    var secondFormatedMatchedCountyIDs;

    function secondD3MapNestedForLoops(first_array, second_array) {
        
        var firstArrayCountyID;
        var secondArrayCountyID;
        secondMatchedCountyIDsArray = new Array();

        for (var i=0; i < first_array.length; i++) {
            firstArrayCountyID = parseFloat(first_array[i].CountyID);
            
            for (var j=0; j < second_array.length; j++) {
                secondArrayCountyID = parseFloat(second_array[j].CountyID);

                if (secondArrayCountyID == firstArrayCountyID) {
                    secondMatchedCountyIDsArray.push([secondArrayCountyID]);
                    
                    secondFormatedMatchedCountyIDs = formatMatchedCountyIDsArray(secondMatchedCountyIDsArray)
                    break;
                }
            }
        }

        if (secondFormatedMatchedCountyIDs == null) { 
            alert("There are no matches for your most recent search.  PLease delete your most recent choice and try another criteria")
        }
    };



    var thirdFormatedMatchedCountyIDs;

    function thirdD3MapNestedForLoops(first_array, second_array) {
        
        var firstArrayCountyID;
        var secondArrayCountyID;
        thirdMatchedCountyIDsArray = new Array();

        for (var i=0; i < first_array.length; i++) {
            firstArrayCountyID = parseFloat(first_array[i].CountyID);

            for (var j=0; j < second_array.length; j++) {
                secondArrayCountyID = parseFloat(second_array[j].CountyID);

                if (secondArrayCountyID == firstArrayCountyID) {
                    thirdMatchedCountyIDsArray.push([secondArrayCountyID]);
                    
                    thirdFormatedMatchedCountyIDs = formatMatchedCountyIDsArray(thirdMatchedCountyIDsArray)
                    break;
                }
            }
        }

        if (thirdFormatedMatchedCountyIDs == null) { 
            alert("There are no matches for your most recent search.  PLease delete your most recent choice and try another criteria")
        }
    };



    var fourthFormatedMatchedCountyIDs

    function fourthD3MapNestedForLoops(first_array, second_array) {
        var firstArrayCountyID;
        var secondArrayCountyID;
        fourthMatchedCountyIDsArray = new Array();

        for (var i=0; i < first_array.length; i++) {
            firstArrayCountyID = parseFloat(first_array[i].CountyID);

            for (var j=0; j < second_array.length; j++) {
                secondArrayCountyID = parseFloat(second_array[j].CountyID);

                if (secondArrayCountyID == firstArrayCountyID) {
                    fourthMatchedCountyIDsArray.push([secondArrayCountyID]);
                    
                    fourthFormatedMatchedCountyIDs = formatMatchedCountyIDsArray(fourthMatchedCountyIDsArray)
                    break;
                }
            }
        }

        if (fourthFormatedMatchedCountyIDs == null) { 
            alert("There are no matches for your most recent search.  PLease delete your most recent choice and try another criteria")
        }
    };
//-------------end of for loops ------------------------------------------------------------


//----------------------Start of function which takes the data returned from the API call and figures out 
//                      where in the forward menu search process the user is 

    var mapRenderingVariable1 = null;
    var mapRenderingVariable2 = null;
    var mapRenderingVariable3 = null;
    var mapRenderingVariable4 = null;
    var mapRenderingVariable5 = null;

    function processDataForSearch(parsedData) {

        if (mapRenderingVariable1 === null ) {
            mapRenderingVariable1 = parsedData;
            RenderD3MapMenuClick(mapRenderingVariable1);

        } else if (mapRenderingVariable1 !== null && mapRenderingVariable2 === null ) {
            mapRenderingVariable2 = parsedData;
            firstD3MapNestedForLoops(mapRenderingVariable1, mapRenderingVariable2);
            RenderD3MapMenuClick(firstFormatedMatchedCountyIDs);

        } else if (mapRenderingVariable2 !== null && mapRenderingVariable3 === null)  {
            mapRenderingVariable3 = parsedData
            secondD3MapNestedForLoops(firstFormatedMatchedCountyIDs, mapRenderingVariable3)
            RenderD3MapMenuClick(secondFormatedMatchedCountyIDs)

        } else if (mapRenderingVariable3 !== null && mapRenderingVariable4 === null) {
            mapRenderingVariable4 = parsedData
            thirdD3MapNestedForLoops(secondFormatedMatchedCountyIDs, mapRenderingVariable4)
            RenderD3MapMenuClick(thirdFormatedMatchedCountyIDs)

        } else if (mapRenderingVariable4 !== null && mapRenderingVariable5 === null) {
            mapRenderingVariable5 = parsedData
            fourthD3MapNestedForLoops(thirdFormatedMatchedCountyIDs, mapRenderingVariable5)
            RenderD3MapMenuClick(fourthFormatedMatchedCountyIDs)

        } else {
            alert("You reached the limit of five searchable items.")
            deleteLastAppendedChild()
        }    
    };
//----------------------end of for loop search function


//---------------------start of function to removed appended LI item and revert map one selection
    $("#removeAppendedListChild").click(function() {
        emptyArray = [];
        if (mapRenderingVariable1 === null) {
            alert("No data to be removed from map")

        } else if (mapRenderingVariable1 !== null && mapRenderingVariable2 === null) {
            RenderD3MapMenuClick(emptyArray)
            mapRenderingVariable1 = null;
            deleteLastAppendedChild()
            
        } else if (mapRenderingVariable2 !== null && mapRenderingVariable3 === null) { 
            RenderD3MapMenuClick(mapRenderingVariable1)
            mapRenderingVariable2 = null
            firstFormatedMatchedCountyIDs = null
            deleteLastAppendedChild()
        
        } else if (mapRenderingVariable3 !== null && mapRenderingVariable4 === null) { 
            RenderD3MapMenuClick(firstFormatedMatchedCountyIDs)
            mapRenderingVariable3 = null
            secondFormatedMatchedCountyIDs = null
            deleteLastAppendedChild()

        } else if (mapRenderingVariable4 !== null && mapRenderingVariable5 === null) { 
            RenderD3MapMenuClick(secondFormatedMatchedCountyIDs)
            mapRenderingVariable4 = null
            thirdFormatedMatchedCountyIDs = null
            deleteLastAppendedChild()

        } else if (mapRenderingVariable5 !== null) { 
            RenderD3MapMenuClick(thirdFormatedMatchedCountyIDs)
            mapRenderingVariable5 = null
            fourthFormatedMatchedCountyIDs = null
            deleteLastAppendedChild()

        } else {
           //There is nothing to write here.
        }
    });
    //-------------------end of function to removed appended LI item and revert map one selection
    

    //-------------------------start of function and variables which renders the D3.JS MAP when the app is loaded
    var mapWidth = 1005,
        mapHeight = 625;

    var projection = d3.geo.albersUsa()
        .scale(1330)
        .translate([mapWidth / 2, mapHeight / 2]);

    var mapPath = d3.geo.path()
        .projection(projection);

    var mapSVG = d3.select("#map").append("svg")
        .attr("width", mapWidth)
        .attr("height", mapHeight);

    queue()
        .defer(d3.json, "/data/map.json")
    .await(ready)

    var countyNameWeWant;
    var xPosition;
    var yPosition;
    var MapLoaded;

    function ready(error, json) { 
        myFunc = mapSVG.append("g")
            .selectAll("path")
            .data(topojson.feature(json, json.objects.counties).features)
            .enter()
            .append("path")
            .attr("class", "counties")
            .attr("d", mapPath)
            .on("mouseover", function(d) {
                //xPosition = d3.mouse(this)[0];
                //yPosition = d3.mouse(this)[1]-10;
                d3.select(this)
                    .attr("class", "CountiesRenderMapHover")
                    //hoveredCountyID = d.id;
                    //showCountyNameOnHover(hoveredCountyID)
                //setTimeout(function(){d3.select("#tooltip").remove();},1000);
                })
            .on("mouseout", function(d) {
                d3.select(this)
                    .attr("class", "counties");
                //d3.select("#tooltip").remove();
                //d3.select("#tooltip").remove();
                })
            .on("click", function(d) {
                d3.select(this)
                clickedCountyAndStateID = d.id;
                getClickedCountyData(clickedCountyAndStateID);
                })
            .style("fill", "#98abc5")    
        mapSVG.append("path")
            .datum(topojson.mesh(json, json.objects.states, function(a, b) {
                return a !== b;
            }))
            .attr("class", "states")
            .attr("d", mapPath);
    }   
    //-------------------------END of function and variables which renders the D3.JS MAP when the app is loaded


    //---------------Start of function to render map after demographic choice event 
    function RenderD3MapMenuClick(passedArray) {
        myFunc.style("fill", function (d) {
                    var abbr = d.id;
                    returnedCountyID = []
                    $.each(passedArray, function(index, value){
                            if(value.CountyID == abbr){
                                    returnedCountyID = abbr
                            }
                    });
                    if (returnedCountyID == d.id) {
                        return "#6b486b"
                    } else {
                        return "#98abc5"
                    }
                });
    };
    //---------------End of function to render map after demographic choice event


    //------------------------functions which deal with hovering and clicking counties on the maps
    function showCountyNameOnHover(hoveredCountyID) {
        var desiredCountyNameHovered;
        d3.json("/countyNamesWithID.json", function(json) {
            for (var i = 1; i < json.length; i++) {
                var desiredCountyName = json[i][0];
                var desiredStateID = json[i][1];
                var desiredCountyID = json[i][2];
                var desiredStateAndCountyID = desiredStateID + desiredCountyID;
                if (hoveredCountyID == desiredStateAndCountyID) {
                    desiredCountyNameHovered = desiredCountyName
                }
            }
            mapSVG.append("text")
            .attr("id", "tooltip")
            .attr("x", xPosition)
            .attr("y", yPosition)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("font-weight", "bold")
            .attr("fill", "black")
            .text(desiredCountyNameHovered);    
        });
    };
    //--------------------------------------------End of function to show county name of hover 


    //--------------------Start of JQuery Accordion for the drop down menus
    var parentDivs = $('#dropDownMenusAccordion div')
        childDivs = $('#dropDownMenusAccordion h6').siblings('div');
        parentDivs.hide();

    $('#dropDownMenusAccordion h5').click(function() {
        parentDivs.slideUp();
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });

    $('#dropDownMenusAccordion h6').click(function() {
        childDivs.slideUp();
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });
    //--------------------------End of JQuery Accordion for the drop down menus


    //------------------------Start of function to delete last appended child in items selected list 
    function deleteLastAppendedChild() {
        var appendedListChildren = document.getElementById("appendedList");  
                if (appendedListChildren.childNodes.length > 0) { 
                    var deleteThisOne = appendedListChildren.lastChild;
                    deleteThisOne.remove();
                }
    }
    //------------------------End of function to delete last appended child in items selected list 