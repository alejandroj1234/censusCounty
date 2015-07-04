    //-----------------------start of function which gets the data for clicked county on maps 
    var clickedCountyIncomeDataFormated;
    var clickedCountyRaceDataFormated;
    var clickedCountyEducationDataFormated;
    var clickedCountyAgeDataFormated;
    var clickedCountySexDataFormated;
    var clickedCountyMarriageDataFormated;

    function getClickedCountyData(clickedCountyAndStateID) { 
       
        d3.json("/data/countyNamesWithID.json", function(json) {
            
            for (var i = 1; i < json.length; i++) {
                var desiredCountyName = json[i][0];
                var desiredStateID = json[i][1];
                var desiredCountyID = json[i][2];
                var stateAndCountyID = desiredStateID + desiredCountyID;
                
                if (clickedCountyAndStateID == stateAndCountyID) {
                    desiredClickedStateID = json[i][1]
                    desiredClickedCountyID = json[i][2]

                    $("#showClickedCounty").append("<p>" + desiredCountyName + "</p>");
                    var showedCountyChildren = document.getElementById("showClickedCounty");   
                    if (showedCountyChildren.childNodes.length > 1) { 
                        var deleteThisOne = showedCountyChildren.firstChild;
                        deleteThisOne.remove();
                    }
                   
                    var IncomeReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_002E,B20002_003E,B20002_001E,B19013_001E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
                    var raceReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001H_001E,B01001B_001E,B01001D_001E,B01001I_001E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
                    var educationReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_003E,B15002_004E,B15002_005E,B15002_006E,B15002_020E,B15002_021E,B15002_022E,B15002_023E,B15002_007E,B15002_008E,B15002_009E,B15002_010E,B15002_024E,B15002_025E,B15002_026E,B15002_027E,B15002_011E,B15002_028E,B15003_019E,B15003_020E,B15003_021E,B15003_022E,B15003_023E,B15003_024E,B15003_025E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");  
                    var ageReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_003E,B01001_004E,B01001_027E,B01001_028E,B01001_005E,B01001_006E,B01001_007E,B01001_029E,B01001_030E,B01001_031E,B01001_008E,B01001_009E,B01001_010E,B01001_032E,B01001_033E,B01001_034E,B01001_011E,B01001_012E,B01001_035E,B01001_036E,B01001_013E,B01001_014E,B01001_037E,B01001_038E,B01001_015E,B01001_016E,B01001_039E,B01001_040E,B01001_017E,B01001_018E,B01001_019E,B01001_041E,B01001_042E,B01001_043E,B01001_020M,B01001_021M,B01001_022M,B01001_023M,B01001_024M,B01001_025M,B01001_044E,B01001_045E,B01001_046E,B01001_047E,B01001_048E,B01001_049E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
                    var sexReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_002E,B01001_026E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
                    var marriageReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B12001_003E,B12001_012E,B12001_004E,B12001_013E,B12001_009E,B12001_018E,B12001_010E,B12001_019E,NAME&for=county:" + desiredClickedCountyID + "&in=state:" + desiredClickedStateID + "&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

                    $.when(IncomeReturn).done(
                      function(jsonIncome) {
                          clickedCountyIncomeDataFormated = formatClickedCountyIncomeData(jsonIncome)
                          renderBarGraph(clickedCountyIncomeDataFormated, "Total Income:", "incomeBarGraph", "Income Distribution");
                      }
                    );

                    $.when(raceReturn).done(
                      function(jsonRace) {
                          clickedCountyRaceDataFormated = formatClickedCountyRaceData(jsonRace)                       
                          renderPieChart(clickedCountyRaceDataFormated, "Total Race Population:", "racePieChart");
                      }
                    );

                    $.when(educationReturn).done(
                      function(jsonEducation) {
                          clickedCountyEducationDataFormated = formatClickedCountyEducationData(jsonEducation)
                          renderStackedGraph(clickedCountyEducationDataFormated, "Total Education Population:", "educationStackedBarGraph", "Education Distribution");
                      }
                    );

                    $.when(ageReturn).done(
                      function(jsonAge) {
                          clickedCountyAgeDataFormated = formatClickedCountyAgeData(jsonAge)
                          renderStackedGraph(clickedCountyAgeDataFormated, "Total Age Group Population:", "ageStackedBarGraph", "Population Age Groups"); 
                      }
                    );

                    $.when(sexReturn).done(
                      function(jsonSex) {
                          clickedCountySexDataFormated = formatClickedCountySexData(jsonSex)  
                          renderBarGraph(clickedCountySexDataFormated, "Total Population:", "sexBarGraph", "Total Population Distribution");
                      }
                    );
                            
                    $.when(marriageReturn).done(
                      function(jsonMarriage) {
                          clickedCountyMarriageDataFormated = formatClickedCountyMarriageData(jsonMarriage)                                
                          renderPieChart(clickedCountyMarriageDataFormated, "Total Marriage Population:", "marriagePieChart");
                      }
                    );          
                }
            }
        });
    }      
    //-----------------------END of function which gets the data for clicked county on maps 


    //-------------------------------START THE BAR GRAPH FOR INCOME DATA----------------------
    function renderBarGraph(dataset, strongTagText, htmlID, yAxisText) {
        height = 400;
        width = 400;
        var yAxisPadding = 58;
        var xPadding = 50
        var yPadding = 5;

        var xScale = d3.scale.ordinal().domain(d3.range(dataset.length))
            .rangeRoundBands([68,300-xPadding],0.05);
                        
        var yScale = d3.scale.linear().domain([0, d3.max(dataset,function(d){return d.Total;})])
            .range([height-yPadding,yPadding]);

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left')
            .ticks(10);

        //Horizontal Gridlines
       function make_y_axis() {        
            return d3.svg.axis()
                .scale(yScale)
                .orient("left")
                .ticks(10)
        }; 

        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-10, 0])
          .html(function(d) {
            return "<strong>" + strongTagText + "</strong> <span style='color:#ff8c00'>" + d.Total + "</span>";
        })

        //SVG Element
        var svg = d3.select("#" + htmlID)
            .append("svg")
            .attr({"width": width,
            "height": height});

            //Y-Axis
            svg.append("g")
               .attr("class","y axis")
               .attr("transform","translate(" + yAxisPadding + ",0)")
               .call(yAxis)
            .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0)
                .attr("dy", ".90em")
                .style("text-anchor", "end")
                .text(yAxisText);
        
        svg.call(tip);

        var bars = svg.selectAll("rect").data(dataset)
            bars.enter().append("rect")
            bars.transition().delay(function (d,i){ return i * 300;})
                .duration(300)
                .attr("height", function(d) { return height-yScale(d.Total); })
                .attr("y", function(d) { return yScale(d.Total); })
                .attr({"x":function(d,i){return xScale(i);},
                      "y":function(d){return yScale(d.Total);},
                      "width": xScale.rangeBand(),
                      "height":function(d){return height-yScale(d.Total);},
                      "fill":function(d) {return color(d.DataType);},
                      "class":"hover_group",
                    })
            bars.on('mouseover', tip.show)
            bars.on('mouseout', tip.hide)


        var legend = svg.selectAll(".legend")
          .data(color.domain().slice().reverse())
         .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

          legend.append("rect")
          .attr("x", width - 20)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

          legend.append("text")
          .attr("x", width -30)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d; });

        var barGraphChildren = document.getElementById(htmlID);   
            if (barGraphChildren.childNodes.length > 1) { 
                var deleteThisOne = barGraphChildren.firstChild;
                deleteThisOne.remove();
            }
    }
    //-------------------------------END OF THE BAR GRAPH FOR INCOME DATA----------------------


    //--------------------------THE START OF THE  PIE CHART FOR RACE DATA--------------------
    function renderPieChart(dataset, strongTagText, htmlID) {
        var width = 400,
        height = 400,
        radius = Math.min(300, 300) / 2;

        var color = d3.scale.ordinal()
            .range(["#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.Total; });

        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-10, 0])
          .html(function(d) {
            return "<strong>" + strongTagText + "</strong> <span style='color:#ff8c00'>" + d.data.Total + "</span>";
        })

        var svg = d3.select("#" + htmlID).append("svg")
            .attr("width", width)
            .attr("height", height)
          .append("g")
            .attr("transform", "translate(" + 200 + "," + 250  + ")")
        
        svg.call(tip);

          var g = svg.selectAll(".arc")
              .data(pie(dataset))
            .enter().append("g")
              .attr("class", "arc");
            g.on('mouseover', tip.show)
            g.on('mouseout', tip.hide);

          g.append("path")
              .attr("d", arc)
              .transition().duration(3000)
              .style("fill", function(d) { return color(d.data.DataType); })
              .attr("class","hover_group")

        var legend = svg.selectAll(".legend")
          .data(color.domain().slice().reverse())
         .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(-450," + i * 20 + ")"; });

          legend.append("rect")
          .attr("x", 630)
          .attr("y", -250)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

          legend.append("text")
          .attr("x", 620)
          .attr("y", -240)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d; });

        var PieChartChildren = document.getElementById(htmlID);   
        if (PieChartChildren.childNodes.length > 1) { 
                var deleteThisOne = PieChartChildren.firstChild;
                deleteThisOne.remove();
        }
    }
    //--------------------------THE END OF THE  PIE CHART FOR RACE DATA--------------------


    //-------------------------THe Start of function for education bar graph -----------------
    function renderStackedGraph(dataset, strongTagText, htmlID, yAxisText) {
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 400 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
            .rangeRoundBands([5, 125], .1);

        var y = d3.scale.linear()
        .rangeRound([height, 0]);

        var color = d3.scale.ordinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".0%"));

        var tip = d3.tip()
              .attr('class', 'd3-tip')
              .offset([-10, 0])
              .html(function(d) {
                return "<strong>" + strongTagText + "</strong> <span style='color:#ff8c00'>" + d.educationLevel.y1 + "</span>";
        })

        var svg = d3.select("#" + htmlID).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + 43 + "," + margin.top + ")");

        color.domain(d3.keys(dataset[0]).filter(function(key) { return key !== "CountyAndState"; }));

        dataset.forEach(function(d) {
        var y0 = 0;
        d.educationLevel = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
         d.educationLevel.forEach(function(d) { d.y0 /= y0; d.y1 /= y0; });
        });

        dataset.sort(function(a, b) { return b.educationLevel[0].y1 - a.educationLevel[0].y1; });
        x.domain(dataset.map(function(d) { return d.CountyAndState; }));

        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
         .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0)
          .attr("dy", ".90em")
          .style("text-anchor", "end")
          .text(yAxisText);

        svg.call(tip);

         var county = svg.selectAll(".county")
          .data(dataset)
         .enter().append("g")
          .attr("class", "g")
          .attr("transform", function(d) { return "translate(" + x(d.CountyAndState) + ",0)"; });

         county.selectAll("rect")
          .data(function(d) { return d.educationLevel; })
         .enter().append("rect")
         .transition().delay(function (d,i){ return i * 300;})
                    .duration(300)
                    .attr("height", function(d) { return y(d.y0) - y(d.y1); })
                    .attr("y", function(d) { return y(d.y1); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.y1); })
          .attr("height", function(d) { return y(d.y0) - y(d.y1); })
          .style("fill", function(d) { return color(d.name); })
          .attr("class","hover_group");
          county.on('mouseover', tip.show)
          county.on('mouseout', tip.hide);

         var legend = svg.selectAll(".legend")
          .data(color.domain().slice().reverse())
         .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

          legend.append("rect")
          .attr("x", width + 0)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", color);

          legend.append("text")
          .attr("x", width -10)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "end")
          .text(function(d) { return d; });    

          var StackedChildren = document.getElementById(htmlID);   
            if (StackedChildren.childNodes.length > 1) { 
                    var deleteThisOne = StackedChildren.firstChild;
                    deleteThisOne.remove();
            }
    }
    //--------------------------THE end  OF THE  RACE CHART FOR RACE DATA--------------------
