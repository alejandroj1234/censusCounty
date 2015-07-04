    //This file includes all the code that is used with the jquery accordion menu on the left of the screen.
    //This entails the jquery code for the actual accordion, a click function which makes an API call for each data set, 
    //and a modularized function for each data set that parses it into the different ranges. 

    var parsedData = new Array();
    //--------------------------------------------Start of INCOME-----------------------------------------------------
    //Male Income----------------------------------------------------------
    var maleIncomecountyDataFormated;
    var maleIncomeReturn = $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_002E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
    
    $("#MaleIncome").click(function() {
        $.when(maleIncomeReturn).done(
            function(json) {
                maleIncomecountyDataFormated = formatIncomeCountyData(json) 
                maleIncomeDistributionFunction("#0-24999PerYearIncomeMale", "<li class=\"appended-list-item\">Male Income Distribution: 0-24,999</li>", 0, 24999)
                maleIncomeDistributionFunction("#25-34999PerYearIncomeMale", "<li class=\"appended-list-item\">Male Income Distribution: 25,000-34,999</li>", 25000, 34999)
                maleIncomeDistributionFunction("#35-44999PerIncomeMale", "<li class=\"appended-list-item\">Male Income Distribution: 35,000-44,999</li>", 35000, 44999)
                maleIncomeDistributionFunction("#45AndUpPerIncomeMale", "<li class=\"appended-list-item\">Male Income Distribution: 45,000 and up</li>", 45000, 100000)
            });
    });

    function maleIncomeDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(maleIncomecountyDataFormated, function(index, value) {
                if (value.TotalIncome >= firstValue && value.TotalIncome <= secondValue) {
                    parsedData.push({
                        TotalMaleIncome: value.TotalIncome,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });            
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //Female Income ---------------------------------------------------------------------------------------------------------- 
    var femaleIncomecountyDataFormated;
    var femaleIncomeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_003E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#FemaleIncome").click(function() {
        $.when(femaleIncomeAPIcall).done(
            function(json) {
                femaleIncomecountyDataFormated = formatIncomeCountyData(json) 
                femaleIncomeDistributionFunction("#0-14999PerYearIncomeFemale", "<li class=\"appended-list-item\">Female Income Distribution: 0-19,999</li>", 0, 14999)
                femaleIncomeDistributionFunction("#15-19999PerIncomeFemale", "<li class=\"appended-list-item\">Female Income Distribution: 15,000-19,999</li>", 15000, 19999)
                femaleIncomeDistributionFunction("#20-24999PerYearIncomeFemale", "<li class=\"appended-list-item\">Female Income Distribution: 20,000-24,999</li>", 20000, 24999)
                femaleIncomeDistributionFunction("#25-29999PerYearIncomeFemale", "<li class=\"appended-list-item\">Female Income Distribution: 25,000-29,999</li>", 25000, 29999)
                femaleIncomeDistributionFunction("#30AndUpPerIncomeFemale", "<li class=\"appended-list-item\">Female Income Distribution: 30,000 and up</li>", 30000, 100000)
            });
    });

    function femaleIncomeDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(femaleIncomecountyDataFormated, function(index, value) {
                if (value.TotalIncome >= firstValue && value.TotalIncome <= secondValue) {
                    parsedData.push({
                        TotalFemaleIncome: value.TotalIncome,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //--------------------------------------------end of INCOME-----------------------------------------------------


    //Median Individual Income ---------------------------------------------------------------------------------------------------------- 
    var medianIndividualCountyDataFormated;
    var medianIndividualIncomeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#MedianIndividualIncome").click(function() {
        $.when(medianIndividualIncomeAPIcall).done(
            function(json) {
                medianIndividualCountyDataFormated = formatIncomeCountyData(json) //THIS METHOD WILL SET THE DATA INTO ARRAYS 
                medianIndividualIncomeDistributionFunction("#0-19999PerYearMedianIndividualIncome", "<li class=\"appended-list-item\">Median Individual Income Distribution: 0-19,999</li>", 0, 19999)
                medianIndividualIncomeDistributionFunction("#20-29999PerYearMedianIndividualIncome", "<li class=\"appended-list-item\">Median Individual Income Distribution: 20,000-29,999</li>", 20000, 29999)
                medianIndividualIncomeDistributionFunction("#30-39999PerYearMedianIndividualIncome", "<li class=\"appended-list-item\">Median Individual Income Distribution: 30,000-39,999</li>", 30000, 39999)
                medianIndividualIncomeDistributionFunction("#40AndUpPerYearMedianIndividualIncome", "<li class=\"appended-list-item\">Median Individual Income Distribution: 40,000 And Up</li>", 40000, 100000)
            });
    });

    function medianIndividualIncomeDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(medianIndividualCountyDataFormated, function(index, value) {
                if (value.TotalIncome > firstValue && value.TotalIncome < secondValue) {
                    parsedData.push({
                        TotalMedianIndividualIncome: value.TotalIncome,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //--------------------------------------------end of INCOME-----------------------------------------------------


    //household Income ---------------------------------------------------------------------------------------------------------- 
    var medianHouseholdIncomeCountyDataFormated;
    var medianHouseholdIncomeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B19013_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#MedianHouseholdIncome").click(function() {
            $.when(medianHouseholdIncomeAPIcall).done( 
            function(json) {
                medianHouseholdIncomeCountyDataFormated = formatIncomeCountyData(json) //THIS METHOD WILL SET THE DATA INTO ARRAYS 
                medianHouseholdIncomeDistributionFunction("#0-34999PerYearMedianHouseholdIncome", "<li class=\"appended-list-item\">Median Household Income Distribution: 0-34,999</li>", 0, 34999)
                medianHouseholdIncomeDistributionFunction("#35-44999PerYearMedianHouseholdIncome", "<li class=\"appended-list-item\">Median Household Income Distribution: 35,000-44,999</li>", 35000, 44999)
                medianHouseholdIncomeDistributionFunction("#45-54999PerYearMedianHouseholdIncome", "<li class=\"appended-list-item\">Median Household Income Distribution: 45,000-54,999</li>", 45000, 54999)
                medianHouseholdIncomeDistributionFunction("#55-64999PerYearMedianHouseholdIncome", "<li class=\"appended-list-item\">Median Household Income Distribution: 55,000-64,999</li>", 55000, 64999)
                medianHouseholdIncomeDistributionFunction("#65AndUpPerYearMedianHouseholdIncome", "<li class=\"appended-list-item\">Median Household Income Distribution: 65,000 and up</li>", 65000, 100000)
            });
    });

    function medianHouseholdIncomeDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(medianHouseholdIncomeCountyDataFormated, function(index, value) {
                if (value.TotalIncome >= firstValue && value.TotalIncome <= secondValue) {
                    parsedData.push({
                        TotalFemaleIncome: value.TotalIncome,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //--------------------------------------------end of INCOME-----------------------------------------------------


    //---------------------------------Start of RACE-----------------------------------------------------
    //White Non-Hispanic------------------------------------------------------------------------- 
    var whiteNonHispanicCountyDataFormated;
    var whiteNonHispanicAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001H_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#WhiteNonHispanic").click(function() {    
        $.when(whiteNonHispanicAPIcall).done(
            function(json) {
                whiteNonHispanicCountyDataFormated = formatRaceCountyData(json) 
                whiteNonHispanicDistributionFunction("#0-1999PercentWhite", "<li class=\"appended-list-item\">White Non Hispanic Distribution: 0-19.99 Percent</li>", 0, .1999)
                whiteNonHispanicDistributionFunction("#20-3999PercentWhite", "<li class=\"appended-list-item\">White Non Hispanic Distribution: 20-39.99 Percent</li>", .2, .3999)
                whiteNonHispanicDistributionFunction("#40-5999PercentWhite", "<li class=\"appended-list-item\">White Non Hispanic Distribution: 40-59.99 Percent</li>", .4, .5999)
                whiteNonHispanicDistributionFunction("#60-7999PercentWhite", "<li class=\"appended-list-item\">White Non Hispanic Distribution: 60-79.99 Percent</li>", .6, .7999)
                whiteNonHispanicDistributionFunction("#80-100PercentWhite", "<li class=\"appended-list-item\">White Non Hispanic Distribution: 80-100 Percent</li>", .8, 1)
            });
    });

    function whiteNonHispanicDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(whiteNonHispanicCountyDataFormated, function(index, value) {
                if (value.TotalDesiredRace / value.TotalPopulationAllAges >= firstValue && value.TotalDesiredRace / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalDesiredRace: value.TotalDesiredRace,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Black------------------------------------------------------------------------------------------------
    var blackCountyDataFormated;
    var blackAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001B_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Black").click(function() {     
            $.when(blackAPIcall).done(
            function(json) {
                blackCountyDataFormated = formatRaceCountyData(json)
                blackDistributionFunction("#0-1999PercentBlack", "<li class=\"appended-list-item\">Black Distribution: 0-19.99 Percent</li>", 0, .1999)
                blackDistributionFunction("#20-3999PercentBlack", "<li class=\"appended-list-item\">Black Distribution: 20-39.99 Percent</li>", .2, .3999)
                blackDistributionFunction("#40-5999PercentBlack", "<li class=\"appended-list-item\">Black Distribution: 40-59.99 Percent</li>", .4, .5999)
                blackDistributionFunction("#60-7999PercentBlack", "<li class=\"appended-list-item\">Black Distribution: 60-79.99 Percent</li>", .6, .7999)
                blackDistributionFunction("#80-100PercentBlack", "<li class=\"appended-list-item\">Black Distribution: 80-100 Percent</li>", .8, 1)
            });
    });

    function blackDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(blackCountyDataFormated, function(index, value) {
                if (value.TotalDesiredRace / value.TotalPopulationAllAges >= firstValue && value.TotalDesiredRace / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalDesiredRace: value.TotalDesiredRace,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Asian------------------------------------------------------------------------------------------------------------  
    var asianCountyDataFormated;
    var asianAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001D_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Asian").click(function() {     
            $.when(asianAPIcall).done(
            function(json) {
                asianCountyDataFormated = formatRaceCountyData(json)
                asianDistributionFunction("#0-9999PercentAsian", "<li class=\"appended-list-item\">Asian Distribution: 0-9.99 Percent</li>", 0, .0999)
                asianDistributionFunction("#10-1999PercentAsian", "<li class=\"appended-list-item\">Asian Distribution: 10-19.99 Percent</li>", .1, .1999)
                asianDistributionFunction("#20-100PercentAsian", "<li class=\"appended-list-item\">Asian Distribution: 20-100 Percent</li>", .2, 100)
            });
    });

    function asianDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(asianCountyDataFormated, function(index, value) {
                if (value.TotalDesiredRace / value.TotalPopulationAllAges >= firstValue && value.TotalDesiredRace / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalDesiredRace: value.TotalDesiredRace,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //Hispanic----------------------------------------------------------------------------------------------------------
    var hispanicCountyDataFormated; 
    var hispanicAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001I_001E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Hispanic").click(function() {     
            $.when(hispanicAPIcall).done(
            function(json) {
                hispanicCountyDataFormated = formatRaceCountyData(json)
                hispanicDistributionFunction("#0-1999PercentHispanic", "<li class=\"appended-list-item\">Hispanic Distribution: 0-19.99 Percent</li>", 0, .1999)
                hispanicDistributionFunction("#20-3999PercentHispanic", "<li class=\"appended-list-item\">Hispanic Distribution: 20-39.99 Percent</li>", .2, .3999)
                hispanicDistributionFunction("#40-5999PercentHispanic", "<li class=\"appended-list-item\">Hispanic Distribution: 40-59.99 Percent</li>", .4, .5999)
                hispanicDistributionFunction("#60-7999PercentHispanic", "<li class=\"appended-list-item\">Hispanic Distribution: 60-79.99 Percent</li>", .6, .7999)
                hispanicDistributionFunction("#80-100PercentHispanic", "<li class=\"appended-list-item\">Hispanic Distribution: 80-100 Percent</li>", .8, 100)
            });
    });

    function hispanicDistributionFunction(htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(hispanicCountyDataFormated, function(index, value) {
                if (value.TotalDesiredRace / value.TotalPopulationAllAges >= firstValue && value.TotalDesiredRace / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalDesiredRace: value.TotalDesiredRace,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                        });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //---------------------------------end of RACE-----------------------------------------------------


    //--------------------------------------start of EDUCATION----------------------------------------------------
    //Less Than High School-----------------------------------------------------------------------------------------------
    var lessThanHighSchoolCountyDataFormated;
    var lessThanHighSchoolAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_003E,B15002_004E,B15002_005E,B15002_006E,B15002_020E,B15002_021E,B15002_022E,B15002_023E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#LessThanHighSchool").click(function() {     
            $.when(lessThanHighSchoolAPIcall).done(
            function(json) {
                lessThanHighSchoolCountyDataFormated = formatLessThanHighSchoolCountyData(json)
                lessThanHighSchoolDistributionFunction("#0-0499PercentLessThanHighSchool", "<li class=\"appended-list-item\">Less Than High School: 0-4.99 Percent</li>", .000, .0499)
                lessThanHighSchoolDistributionFunction("#5-9999PercentLessThanHighSchool", "<li class=\"appended-list-item\">Less Than High School: 5-9.99 Percent</li>", .05, .9999)
                lessThanHighSchoolDistributionFunction("#10AndMorePercentLessThanHighSchool", "<li class=\"appended-list-item\">Less Than High School: 10 And More Percent</li>", .1, 1)
            });
    });  
    
    function lessThanHighSchoolDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(lessThanHighSchoolCountyDataFormated, function(index, value) {
                if (value.TotalLessThanHighSchool / value.TotalPopulationOver25 >= firstValue && value.TotalLessThanHighSchool / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalLessThanHighSchool: value.TotalLessThanHighSchool,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //Some High School-----------------------------------------------------------------------------------------------
    var someHighSchoolCountyDataFormated;
    var someHighSchoolAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_007E,B15002_008E,B15002_009E,B15002_010E,B15002_024E,B15002_025E,B15002_026E,B15002_027E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#someHighSchool").click(function() {     
            $.when(someHighSchoolAPIcall).done(
            function(json) {
                someHighSchoolCountyDataFormated = formatSomeHighSchoolCountyData(json)
                someHighSchoolDistributionFunction("#0-0499PercentSomeHighSchool", "<li class=\"appended-list-item\">Some High School: 0-4.99 Percent</li>", 0, .0499)
                someHighSchoolDistributionFunction("#5-0999PercentSomeHighSchool", "<li class=\"appended-list-item\">Some High School: 5-9.99 Percent</li>", .05, .0999)
                someHighSchoolDistributionFunction("#10-1499PercentSomeHighSchool", "<li class=\"appended-list-item\">High School: 10-14.99 Percent</li>", .01, .1499)
                someHighSchoolDistributionFunction("#15AndMorePercentSomeHighSchool", "<li class=\"appended-list-item\">High School: 15 And More Percent</li>", .15, 1)
            });
    });

    function someHighSchoolDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(someHighSchoolCountyDataFormated, function(index, value) {
                if (value.TotalSomeHighSchool / value.TotalPopulationOver25 >= firstValue && value.TotalSomeHighSchool / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalSomeHighSchool: value.TotalSomeHighSchool,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //High School------------------------------------------------------------------------------------------------------------------
    var HighSchoolCountyDataFormated;
    var highSchoolAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_011E,B15002_028E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
    
    $("#highSchool").click(function() {
            $.when(highSchoolAPIcall).done(
            function(json) {
                HighSchoolCountyDataFormated = formatHighSchoolOrBachelorsCountyData(json)
                highSchoolDistributionFunction("#under20PercentHighSchool", "<li class=\"appended-list-item\">High School: 0-19.99 Percent</li>", 0, .2)
                highSchoolDistributionFunction("#20-2999PercentHighSchool", "<li class=\"appended-list-item\">High School: 20-29.99 Percent</li>", .2, .2999)
                highSchoolDistributionFunction("#30-3999PercentHighSchool", "<li class=\"appended-list-item\">High School: 30-39.99 Percent</li>", .3, .3999)
                highSchoolDistributionFunction("#40AndMorePercentHighSchool", "<li class=\"appended-list-item\">High School: 40 And More Percent</li>", .4, 1)
            });
    });

    function highSchoolDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(HighSchoolCountyDataFormated, function(index, value) {
                if (value.TotalHighSchoolOrBachelorsGraduates / value.TotalPopulationOver25 >= firstValue && value.TotalHighSchoolOrBachelorsGraduates / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalHighSchoolGraduates: value.TotalHighSchoolOrBachelorsGraduates,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //some college-------------------------------------------------------------------------------------------------------------
    var someCollegeCountyDataFormated;
    var SomeCollegeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_012E,B15002_013E,B15002_014E,B15002_029E,B15002_030E,B15002_031E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#someCollege").click(function() {
            $.when(SomeCollegeAPIcall).done(
            function(json) {
                someCollegeCountyDataFormated = formatSomeCollegeCountyData(json)
                someCollegeDistributionFunction("#0-1999PercentSomeCollege", "<li class=\"appended-list-item\">SomeCollege: 0-19.99 Percent</li>", .0, .1999)
                someCollegeDistributionFunction("#20-2999PercentSomeCollege", "<li class=\"appended-list-item\">SomeCollege: 20-29.99 Percent</li>", .2, .2999)
                someCollegeDistributionFunction("#30-3999PercentSomeCollege", "<li class=\"appended-list-item\">SomeCollege: 30-39.99 Percent</li>", .3, .3999)
                someCollegeDistributionFunction("#40AndMorePercentSomeCollege", "<li class=\"appended-list-item\">SomeCollege: 40 And More Percent</li>", .4, 1)
            });
    });

    function someCollegeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(someCollegeCountyDataFormated, function(index, value) {
                if (value.TotalSomeCollege / value.TotalPopulationOver25 >= firstValue && value.TotalSomeCollege / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalSomeCollege: value.TotalSomeCollege,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Bachelors--------------------------------------------------------------------------------------------------------------------- 
    var bachelorsCountyDataFormated;
    var bachelorsAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_015E,B15002_032E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Bachelors").click(function() {
            $.when(bachelorsAPIcall).done(
            function(json) {
                bachelorsCountyDataFormated = formatHighSchoolOrBachelorsCountyData(json)
                bachelorsDistributionFunction("#0-0999PercentBachelors", "<li class=\"appended-list-item\">Bachelors: 0-9.99 Percent</li>", .0, .0999)
                bachelorsDistributionFunction("#10-1999PercentBachelors", "<li class=\"appended-list-item\">Bachelors: 10-19.99 Percent</li>", .1, .1999)
                bachelorsDistributionFunction("#20-2999PercentBachelors", "<li class=\"appended-list-item\">Bachelors: 20-29.99 Percent</li>", .2, .2999)
                bachelorsDistributionFunction("#30AndMorePercentBachelors", "<li class=\"appended-list-item\">Bachelors: 30 And More Percent</li>", .3, 1)
            });
    });

    function bachelorsDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(bachelorsCountyDataFormated, function(index, value) {
                if (value.TotalHighSchoolOrBachelorsGraduates / value.TotalPopulationOver25 >= firstValue && value.TotalHighSchoolOrBachelorsGraduates / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalBachelorsGraduates: value.TotalHighSchoolOrBachelorsGraduates,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Graduate school-------------------------------------------------------------------------------------------------------------
    var graduateCountyDataFormated;
    var graduateAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B15002_001E,B15002_016E,B15002_017E,B15002_018E,B15002_033E,B15002_034E,B15002_035E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Graduate").click(function() {
            $.when(graduateAPIcall).done(
            function(json) {
                graduateCountyDataFormated = formatGraduateCountyData(json)
                graduateDistributionFunction("#0-0499PercentGraduate", "<li class=\"appended-list-item\">Graduate: 0-4.99 Percent</li>", 0, .0499)
                graduateDistributionFunction("#5-0999PercentGraduate", "<li class=\"appended-list-item\">Graduate: 5-9.99 Percent</li>", .05, .0999)
                graduateDistributionFunction("#10-1499PercentGraduate", "<li class=\"appended-list-item\">Graduate: 10-14.99 Percent</li>", .1, .1499)
                graduateDistributionFunction("#15AndMorePercentGraduate", "<li class=\"appended-list-item\">Graduate: 15 and more Percent</li>", .15, 1)
            });
    });

    function graduateDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(graduateCountyDataFormated, function(index, value) {
                if (value.TotalGradSchoolGraduates / value.TotalPopulationOver25 >= firstValue && value.TotalGradSchoolGraduates / value.TotalPopulationOver25 <= secondValue) {
                    parsedData.push({
                        TotalGradSchoolGraduates: value.TotalGradSchoolGraduates,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }
    
    //--------------------------------------end of EDUCATION----------------------------------------------------


    //----------------------------------start AGE DISTRIBUTION-----------------------------------------------------
    //Nine years and under------------------------------------------------------------  
    var seventeenAndUnderAgeCountyDataFormated;
    var seventeenAndUnderAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_003E,B01001_004E,B01001_005E,B01001_006E,B01001_027E,B01001_028E,B01001_029E,B01001_030E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#17AndUnderAge").click(function() {
            $.when(seventeenAndUnderAPIcall).done(
            function(json) {
                seventeenAndUnderAgeCountyDataFormated = formatDesiredAgeGroup8ParametersCountyData(json)
                seventeenAndUnderAgeDistributionFunction("#0-1999PercentSeventeenAndUnderAge", "<li class=\"appended-list-item\">Seventeen Years Old And Younger: 0-19.99 Percent</li>", 0, .1999)
                seventeenAndUnderAgeDistributionFunction("#20-2499PercentSeventeenAndUnderAge", "<li class=\"appended-list-item\">Seventeen Years Old And Younger: 20-24.99 Percent</li>", .2, .2499)
                seventeenAndUnderAgeDistributionFunction("#25-2999PercentSeventeenAndUnderAge", "<li class=\"appended-list-item\">Seventeen Years Old And Younger: 25-29.99 Percent</li>", .25, .2999)
                seventeenAndUnderAgeDistributionFunction("#30AndMorePercentSeventeenAndUnderAge", "<li class=\"appended-list-item\">Seventeen Years Old And Younger: 30 And More Percent</li>", .3, 1)
            });
    });

    function seventeenAndUnderAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(seventeenAndUnderAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        Total17AndUnderAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Twenty to Twentyfour--------------------------------------------------------------------------
    var eighteenToTwentyfourAgeCountyDataFormated;
    var eighteenToTwentyfourAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_007E,B01001_008E,B01001_009E,B01001_010E,B01001_031E,B01001_032E,B01001_033E,B01001_034E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#eighteenToTwentyfourAge").click(function() {  
            $.when(eighteenToTwentyfourAgeAPIcall).done(
            function(json) {
                eighteenToTwentyfourAgeCountyDataFormated = formatDesiredAgeGroup8ParametersCountyData(json)    
                eighteenToTwentyfourAgeDistributionFunction("#0-0399PercentEighteenToTwentyfourAge", "<li class=\"appended-list-item\">Eighteen To Twentyfour Years Old: 0-3.99 Percent</li>", 0, .0399)
                eighteenToTwentyfourAgeDistributionFunction("#4-0799PercentEighteenToTwentyfourAge", "<li class=\"appended-list-item\">Eighteen To Twentyfour Years Old: 4-7.99 Percent</li>", .04, .0799)
                eighteenToTwentyfourAgeDistributionFunction("#8-1199PercentEighteenToTwentyfourAge", "<li class=\"appended-list-item\">Eighteen To Twentyfour Years Old: 8-11.99 Percent</li>", .08, .1199)
                eighteenToTwentyfourAgeDistributionFunction("#12AndMorePercentEighteenToTwentyfourAge", "<li class=\"appended-list-item\">Eighteen To Twentyfour Years Old: 12 and more Percent</li>", .12, 1)
            });
    });

    function eighteenToTwentyfourAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(eighteenToTwentyfourAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotalEighteenToTwentyfourAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Twentyfive to Thirtyfour-----------------------------------------------------------------------------------
    var twentyfiveToThirtyfourAgeCountyDataFormated;
    var twentyfiveToThirtyfourAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_011E,B01001_012E,B01001_035E,B01001_036E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#twentyfiveToThirtyfourAge").click(function() {    
            $.when(twentyfiveToThirtyfourAgeAPIcall).done(    
            function(json) {
                twentyfiveToThirtyfourAgeCountyDataFormated = formatDesiredAgeGroup4ParametersCountyData(json)    
                twentyfiveToThirtyfourAgeDistributionFunction("#0-0799PercentTwentyfiveToThirtyfourAge", "<li class=\"appended-list-item\">Twentyfive to Thirtyfour Years Old: 0-7.99 Percent</li>", 0, .0799)
                twentyfiveToThirtyfourAgeDistributionFunction("#8-1099PercentTwentyfiveToThirtyfourAge", "<li class=\"appended-list-item\">Twentyfive to Thirtyfour Years Old: 8-10.99 Percent</li>", .08, .1099)
                twentyfiveToThirtyfourAgeDistributionFunction("#11-1399PercentTwentyfiveToThirtyfourAge", "<li class=\"appended-list-item\">Twentyfive to Thirtyfour Years Old: 11-13.99 Percent</li>", .11, .1399)
                twentyfiveToThirtyfourAgeDistributionFunction("#14AndMorePercentTwentyfiveToThirtyfourAge", "<li class=\"appended-list-item\">Twentyfive to Thirtyfour Years Old: 14 Percent And More</li>", .14, 1)
            });
    });

    function twentyfiveToThirtyfourAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(twentyfiveToThirtyfourAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotaltwentyfiveToThirtyfourAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Thirtyfive to Fortyfour---------------------------------------------------------------------------------------------------  
    var thirtyfiveToFortyfourAgeCountyDataFormated;
    var thirtyfiveToFortyfourAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_013E,B01001_014E,B01001_037E,B01001_038E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#ThirtyfiveToFortyfourAge").click(function() {  
            $.when(thirtyfiveToFortyfourAgeAPIcall).done(
            function(json) {
                thirtyfiveToFortyfourAgeCountyDataFormated = formatDesiredAgeGroup4ParametersCountyData(json)
                thirtyfiveToFortyFourAgeDistributionFunction("#0-0799PercentThirtyfiveToFortyfourAge", "<li class=\"appended-list-item\">Thirtyfive to Fortyfour Years Old: 0-7.99 Percent</li>", 0, .0799)
                thirtyfiveToFortyFourAgeDistributionFunction("#8-1099PercentThirtyfiveToFortyfourAge", "<li class=\"appended-list-item\">Thirtyfive to Fortyfour Years Old: 8-10.99 Percent</li>", .08, .1099)
                thirtyfiveToFortyFourAgeDistributionFunction("#11-1399PercentThirtyfiveToFortyfourAge", "<li class=\"appended-list-item\">Thirtyfive to Fortyfour Years Old: 11-13.99 Percent</li>", .11, .1399)
                thirtyfiveToFortyFourAgeDistributionFunction("#14AndMorePercentThirtyfiveToFortyfourAge", "<li class=\"appended-list-item\">Thirtyfive to Fortyfour Years Old: 14 Percent And More</li>", .14, 1)
            });
    });

    function thirtyfiveToFortyFourAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(thirtyfiveToFortyfourAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotalthirtyfiveToFortyFourAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Fortyfive to Fiftyfour-----------------------------------------------------------------------------------------------------
    var FortyfiveToFiftyfourAgeCountyDataFormated;
    var fortyfiveToFiftyfourAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_015E,B01001_016E,B01001_039E,B01001_040E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#FortyfiveToFiftyfourAge").click(function() {    
            $.when(fortyfiveToFiftyfourAgeAPIcall).done(
            function(json) {
                FortyfiveToFiftyfourAgeCountyDataFormated = formatDesiredAgeGroup4ParametersCountyData(json)
                FortyfiveToFiftyfourAgeDistributionFunction("#0-0799PercentFortyfiveToFiftyfourAge", "<li class=\"appended-list-item\">Fortyfive to Fiftyfour Years Old: 0-7.99 Percent</li>", 0, .0799)
                FortyfiveToFiftyfourAgeDistributionFunction("#8-1099PercentFortyfiveToFiftyfourAge", "<li class=\"appended-list-item\">Fortyfive to Fiftyfour Years Old: 8-9.99 Percent</li>", .08, .1099)
                FortyfiveToFiftyfourAgeDistributionFunction("#11-1399PercentFortyfiveToFiftyfourAge", "<li class=\"appended-list-item\">Fortyfive to Fiftyfour Years Old: 12-13.99 Percent</li>", .11, .1399)
                FortyfiveToFiftyfourAgeDistributionFunction("#14AndMorePercentFortyfiveToFiftyfourAge", "<li class=\"appended-list-item\">Fortyfive to Fiftyfour Years Old: 16 Percent And More</li>", .14, 1)
            });
    });

    function FortyfiveToFiftyfourAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(FortyfiveToFiftyfourAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotalFortyfiveToFiftyfourAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Fiftyfive to Sixtyfour-------------------------------------------------------------------------------
    var FiftyfiveToSixtyfourAgeCountyDataFormated;
    var fiftyfiveToSixtyfourAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_017E,B01001_018E,B01001_019E,B01001_041E,B01001_042E,B01001_043E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f")

    $("#FiftyfiveToSixtyfourAge").click(function() {  
            $.when(fiftyfiveToSixtyfourAgeAPIcall).done(    
                function(json) {
                FiftyfiveToSixtyfourAgeCountyDataFormated = formatDesiredAgeGroup6ParametersCountyData(json)    
                FiftyfiveToSixtyfourAgeDistributionFunction("#0-0999PercentFiftyfiveToSixtyfourAge", "<li class=\"appended-list-item\">Fiftyfive To Sixtyfour Years Old: 0-9.99 Percent</li>", 0, .0999)
                FiftyfiveToSixtyfourAgeDistributionFunction("#10-1499PercentFiftyfiveToSixtyfourAge", "<li class=\"appended-list-item\">Fiftyfive To Sixtyfour Years Old: 10-14.99 Percent</li>", .1, .1499)
                FiftyfiveToSixtyfourAgeDistributionFunction("#15-1999PercentFiftyfiveToSixtyfourAge", "<li class=\"appended-list-item\">Fiftyfive To Sixtyfour Years Old: 15-19.99 Percent</li>", .15, .1999)
                FiftyfiveToSixtyfourAgeDistributionFunction("#20AndMorePercentFiftyfiveToSixtyfourAge", "<li class=\"appended-list-item\">Fiftyfive To Sixtyfour Years Old: 20 And More Percent</li>", .2, .9999)
            });
    });

    function FiftyfiveToSixtyfourAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(FiftyfiveToSixtyfourAgeCountyDataFormated, function(index, value) {
                if (value.TotalDesiredAgeGroup / value.TotalPopulation >= firstValue && value.TotalDesiredAgeGroup/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotaltwentyToTwentyfourAge: value.TotalDesiredAgeGroup,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Sixtyfive and older-----------------------------------------------------------------------------------------  
    var sixtyfiveAndOlderAgeCountyDataFormated;
    var sixtyfiveAndOlderAgeAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_020M,B01001_021M,B01001_022M,B01001_023M,B01001_024M,B01001_025M,B01001_044E,B01001_045E,B01001_046E,B01001_047E,B01001_048E,B01001_049E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");
    
    $("#sixtyfiveAndOlderAge").click(function() {   
            $.when(sixtyfiveAndOlderAgeAPIcall).done(
            function(json) {
                sixtyfiveAndOlderAgeCountyDataFormated = formatSixtyfiveAndOlderCountyData(json)
                sixtyfiveAndOlderAgeDistributionFunction("#0-0499PercentSixtyfiveAndOlderAge", "<li class=\"appended-list-item\"> Sixtyfive Years And Older: 0-4.99 Percent</li>", 0, .0499)
                sixtyfiveAndOlderAgeDistributionFunction("#5-0999PercentSixtyfiveAndOlderAge", "<li class=\"appended-list-item\"> Sixtyfive Years And Older: 5-9.99 Percent</li>", .05, .0999)
                sixtyfiveAndOlderAgeDistributionFunction("#10-1499PercentSixtyfiveAndOlderAge", "<li class=\"appended-list-item\"> Sixtyfive Years And Older: 10-14.99 Percent</li>", .10, .1499)
                sixtyfiveAndOlderAgeDistributionFunction("#15-1999PercentSixtyfiveAndOlderAge", "<li class=\"appended-list-item\"> Sixtyfive Years And Older: 15-19.99 Percent</li>", .15, .1999)
                sixtyfiveAndOlderAgeDistributionFunction("#20AndMorePercentSixtyfiveAndOlderAge", "<li class=\"appended-list-item\"> Sixtyfive Years And Older: 20 And More Percent</li>", .2, 1)
            });
    });

    function sixtyfiveAndOlderAgeDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(sixtyfiveAndOlderAgeCountyDataFormated, function(index, value) {
                if (value.TotalSixtyfiveAndOlder / value.TotalPopulation >= firstValue && value.TotalSixtyfiveAndOlder/ value.TotalPopulation <= secondValue) {
                    parsedData.push({
                        TotalSixtyfiveAndOlder: value.TotalSixtyfiveAndOlder,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //----------------------------------end AGE DISTRIBUTION-----------------------------------------------------


    //--------------------------------------start of SEX DISTRIBUTION---------------------------------------------------
    //Male Sex Ratio--------------------------------------------------------
    var maleSexRatioFormated;
    var maleSexRatioAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_002E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#MaleRatio").click(function() {  
            $.when(maleSexRatioAPIcall).done(
            function(json) {
                maleSexRatioFormated = formatMaleAndFemalePopulationRatioCountyData(json)
                malePopulationRatioDistributionFunction("#Under46PercentMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: Under 46 Percent</li>", 0, .4599)
                malePopulationRatioDistributionFunction("#46-4799PercentMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: 46-47.99 Percent</li>", .46, .4799)
                malePopulationRatioDistributionFunction("#48-4999PercentMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: 48-49.99 Percent</li>", .48, .4899)
                malePopulationRatioDistributionFunction("#50-5199PercentMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: 50-51.99 Percent</li>", .5, .5199)
                malePopulationRatioDistributionFunction("#52-5399PercentMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: 52-53.99 Percent</li>", .52, .5399)
                malePopulationRatioDistributionFunction("#54PercentAndOverMaleRatio", "<li class=\"appended-list-item\">Male Total Population Ratio: 54 Percent And Over</li>", .54, 1)
            });
    });

    function malePopulationRatioDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(maleSexRatioFormated, function(index, value) {
                if (value.TotalMaleOrFemalePopulation / value.TotalPopulationAllAges >= firstValue && value.TotalMaleOrFemalePopulation / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalMalePopulation: value.TotalMaleOrFemalePopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Female Sex Ratio-------------------------------------------------------------------------------
    var femaleSexRatioFormated;
    var femaleSexRatioAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B01001_001E,B01001_026E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#FemaleRatio").click(function() {     
            $.when(femaleSexRatioAPIcall).done(
            function(json) {
                femaleSexRatioFormated = formatMaleAndFemalePopulationRatioCountyData(json)    
                femalePopulationRatioDistributionFunction("#Under46PercentFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: Under 46 Percent</li>", 0, .4599)
                femalePopulationRatioDistributionFunction("#46-4799PercentFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: 46-46.99 Percent</li>", .46, .4799)
                femalePopulationRatioDistributionFunction("#48-4999PercentFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: 48-48.99 Percent</li>", .48, .4999)
                femalePopulationRatioDistributionFunction("#50-5199PercentFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: 50-50.99 Percent</li>", .5, .5199)
                femalePopulationRatioDistributionFunction("#52-5399PercentFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: 52-52.99 Percent</li>", .52, .5399)
                femalePopulationRatioDistributionFunction("#54PercentAndOverFemaleRatio", "<li class=\"appended-list-item\">Female Total Population Ratio: 54 Percent And Over</li>", .54, 1)
            });
    });

    function femalePopulationRatioDistributionFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(femaleSexRatioFormated, function(index, value) {
                if (value.TotalMaleOrFemalePopulation / value.TotalPopulationAllAges >= firstValue && value.TotalMaleOrFemalePopulation / value.TotalPopulationAllAges <= secondValue) {
                    parsedData.push({
                        TotalFemalePopulation: value.TotalMaleOrFemalePopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //--------------------------------------end of SEX DISTRIBUTION---------------------------------------------------


    //----------------------------------start of Marital Status-----------------------------------------------------
    //Male Marital Status
    var NeverMarriedFormated;
    var neverMarriedAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B12001_001E,B12001_003E,B12001_012E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#NeverMarried").click(function() {      
            $.when(neverMarriedAPIcall).done(    
            function(json) {
                NeverMarriedFormated =  formatMaritalStatusCountyData(json)
                formatNeverMarriedCountyDataFunction("#0-1499PercentNeverMarried", "<li class=\"appended-list-item\">Never Married Distribution: 0-14.99 Percent</li>", 0, .1499)
                formatNeverMarriedCountyDataFunction("#15-2499PercentNeverMarried", "<li class=\"appended-list-item\">Never Married Distribution: 15-24.99 Percent</li>", .15, .2499)
                formatNeverMarriedCountyDataFunction("#25-3499PercentNeverMarried", "<li class=\"appended-list-item\">Never Married Distribution: 25-34.99 Percent</li>", .25, .3499)
                formatNeverMarriedCountyDataFunction("#35AndOverPercentNeverMarried", "<li class=\"appended-list-item\">Never Married Distribution: 35 Percent And Over</li>", .35, 1)    
            });
    });

    function formatNeverMarriedCountyDataFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(NeverMarriedFormated, function(index, value) {
                if (value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver >= firstValue && value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver <= secondValue) {
                    parsedData.push({
                        TotalMaritalStatusPopulation: value.TotalMaritalStatusPopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Male Marital Status-------------------------------------------------------------------------------
    var NowMarriedFormated
    var nowMarriedAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B12001_001E,B12001_004E,B12001_013E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#NowMarried").click(function() {      
            $.when(nowMarriedAPIcall).done(    
            function(json) {
                NowMarriedFormated =  formatMaritalStatusCountyData(json)
                formatNowMarriedCountyDataFunction("#0-3999PercentNowMarried", "<li class=\"appended-list-item\">Now Married Distribution: 0-39.99 Percent</li>", 0, .3999)
                formatNowMarriedCountyDataFunction("#40-4999PercentNowMarried", "<li class=\"appended-list-item\">Now Married Distribution: 40-49.99 Percent</li>", .4, .4499)
                formatNowMarriedCountyDataFunction("#50-5999PercentNowMarried", "<li class=\"appended-list-item\">Now Married Distribution: 50-59.99 Percent</li>", .5, .5499)
                formatNowMarriedCountyDataFunction("#60AndOverPercentNowMarried", "<li class=\"appended-list-item\">Now Married Distribution: 60 And Over Percent</li>", .60, 1)
            });
    });

    function formatNowMarriedCountyDataFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(NowMarriedFormated, function(index, value) {
                if (value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver >= firstValue && value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver <= secondValue) {
                    parsedData.push({
                        TotalMaritalStatusPopulation: value.TotalMaritalStatusPopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Male Marital Status-------------------------------------------------------------------------------
    var WidowedFormated;
    var widowedAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B12001_001E,B12001_009E,B12001_018E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Widowed").click(function() {      
            $.when(widowedAPIcall).done(    
            function(json) {
                WidowedFormated =  formatMaritalStatusCountyData(json)
                formatWidowedCountyDataFunction("#0-0299PercentWidowed", "<li class=\"appended-list-item\">Widowed Distribution: 0-2.99 Percent</li>", 0, .0299)
                formatWidowedCountyDataFunction("#3-0599PercentWidowed", "<li class=\"appended-list-item\">Widowed Distribution: 3-5.99 Percent</li>", .03, .0599)
                formatWidowedCountyDataFunction("#6-0899PercentWidowed", "<li class=\"appended-list-item\">Widowed Distribution: 6-8.99 Percent</li>", .06, .0899)
                formatWidowedCountyDataFunction("#9AndOverPercentWidowed", "<li class=\"appended-list-item\">Widowed Distribution: 9 Percent And Over</li>", .09, 1)
            });
    });

    function formatWidowedCountyDataFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(WidowedFormated, function(index, value) {
                if (value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver >= firstValue && value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver <= secondValue) {
                    parsedData.push({
                        TotalMaritalStatusPopulation: value.TotalMaritalStatusPopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }

    //Male Marital Status-------------------------------------------------------------------------------
    var DivorcedFormated
    var divorcedAPIcall = $.getJSON("http://api.census.gov/data/2012/acs5?get=B12001_001E,B12001_010E,B12001_019E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f");

    $("#Divorced").click(function() {      
            $.when(divorcedAPIcall).done(
            function(json) {
                DivorcedFormated =  formatMaritalStatusCountyData(json)
                formatDivorcedCountyDataFunction("#0-0999PercentDivorced", "<li class=\"appended-list-item\">Divorced Distribution: 0-9.99 Percent</li>", 0, .0999)
                formatDivorcedCountyDataFunction("#10-1499PercentDivorced", "<li class=\"appended-list-item\">Divorced Distribution: 10-14.99 Percent</li>", .1, .1499)
                formatDivorcedCountyDataFunction("#15AndOverPercentDivorced", "<li class=\"appended-list-item\">Never Married Distribution: 15 Percent And Over</li>", .15, 100)
            });
    });

    function formatDivorcedCountyDataFunction (htmlClick, appendedLI, firstValue, secondValue) {
        $(htmlClick).click(function() {
            $("#appendedList").append(appendedLI);
            $.each(DivorcedFormated, function(index, value) {
                if (value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver >= firstValue && value.TotalMaritalStatusPopulation / value.TotalPopulation15AndOver <= secondValue) {
                    parsedData.push({
                        TotalMaritalStatusPopulation: value.TotalMaritalStatusPopulation,
                        CountyNameAndState: value.CountyNameAndState,
                        CountyID: value.CountyID
                    });
                }
            });
            processDataForSearch(parsedData)
            parsedData = [];
        });
    }