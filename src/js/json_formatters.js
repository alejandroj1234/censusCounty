
    //This file includes all the functions which take the returned json array from the API calls and formats each respective json array
    //into a json object.  Finally the formated json object is returned and used to render either the map or the graphs. 


    //--------------------------Start function to format JSON Array that is returned from API Call for Income
    function formatIncomeCountyData(json) {

        var IncomeCountyData = [];

        for (var i = 1; i < json.length; i++) {
            var totalIncome = json[i][0];
            var countyNameAndState = json[i][1];
            var stateID = json[i][2];
            var countyID = json[i][3];
            IncomeCountyData.push({
                TotalIncome: +totalIncome,
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return IncomeCountyData
    }
    //-------------------End function to format JSON Array that is returned from API Call for Income


    //---------------------------Start function to format JSON Array that is returned from API Call for Race
    function formatRaceCountyData(json) {

        desiredRaceCountyData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationAllAges = json[i][0]
            var totalDesiredRace = json[i][1];
            var countyNameAndState = json[i][2];
            var stateID = json[i][3];
            var countyID = json[i][4];
            desiredRaceCountyData.push({
                TotalPopulationAllAges: totalPopulationAllAges,
                TotalDesiredRace: totalDesiredRace,
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return desiredRaceCountyData
    }
    //-------------------End function to format JSON Array that is returned from API Call for Race 


    //---------------------------Start function to format JSON Array that is returned from less than highschool API Call
    function formatLessThanHighSchoolCountyData(json) {

        lessThanHighSchoolData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationOver25 = parseFloat(json[i][0]);
            var totalMaleNoSchooling = json[i][1];
            var totalFemaleNoSchooling = json[i][2];
            var totalMaleUpTo4thGrade = json[i][3];
            var totalFemaleUpTo4thGrade = json[i][4];
            var totalMale5thAnd6thGrade = json[i][5];
            var totalFemale5thAnd6thGrade = json[i][6];
            var totalMale7thAnd8thGrade = json[i][7];
            var totalFemale7thAnd8thGrade = json[i][8];
            var countyNameAndState = json[i][9];
            var stateID = json[i][10];
            var countyID = json[i][11];
            lessThanHighSchoolData.push({
                TotalPopulationOver25: totalPopulationOver25,
                TotalLessThanHighSchool: parseFloat(totalMaleNoSchooling) + parseFloat(totalFemaleNoSchooling) + parseFloat(totalMaleUpTo4thGrade) + parseFloat(totalFemaleUpTo4thGrade) + parseFloat(totalMale5thAnd6thGrade) + parseFloat(totalFemale5thAnd6thGrade) + parseFloat(totalMale7thAnd8thGrade) + parseFloat(totalFemale7thAnd8thGrade),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return lessThanHighSchoolData       
    }
    //-------------------End function to format JSON Array that is returned from less than API Call


    //---------------------------Start function to format JSON Array that is returned from some highschool API Call
    function formatSomeHighSchoolCountyData(json) {

        someHighSchoolData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationOver25 = json[i][0];
            var totalMale9thGrade = json[i][1];
            var totalFemale9thGrade = json[i][2];
            var totalMale10thGrade = json[i][3];
            var totalFemale10thGrade = json[i][4];
            var totalMale11thGrade = json[i][5];
            var totalFemale11thGrade = json[i][6];
            var totalMale12thGrade = json[i][7];
            var totalFemale12thGrade = json[i][8];
            var countyNameAndState = json[i][9];
            var stateID = json[i][10];
            var countyID = json[i][11];
            someHighSchoolData.push({
                TotalPopulationOver25: totalPopulationOver25,
                TotalSomeHighSchool: parseFloat(totalMale9thGrade) + parseFloat(totalFemale9thGrade) + parseFloat(totalMale10thGrade) + parseFloat(totalFemale10thGrade) + parseFloat(totalMale11thGrade) + parseFloat(totalFemale11thGrade) + parseFloat(totalMale12thGrade) + parseFloat(totalFemale12thGrade),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return someHighSchoolData       
    }
    //-------------------------------------------End function to format JSON Array that is returned from some API Call


    //---------------------------Start function to format JSON Array that is returned from highschool or bachelors API Call
    function formatHighSchoolOrBachelorsCountyData(json) {

        HighSchoolOrBachelorsData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationOver25 = json[i][0];
            var totalMaleHighSchoolOrBachelorsGraduates = json[i][1];
            var totalFemaleHighSchoolOrBachelorsGraduates = json[i][2];
            var countyNameAndState = json[i][3];
            var stateID = json[i][4];
            var countyID = json[i][5];
            HighSchoolOrBachelorsData.push({
                TotalPopulationOver25: totalPopulationOver25,
                TotalHighSchoolOrBachelorsGraduates: parseFloat(totalMaleHighSchoolOrBachelorsGraduates) + parseFloat(totalFemaleHighSchoolOrBachelorsGraduates),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return HighSchoolOrBachelorsData
    }
    //----------------------------------------End function to format JSON Array that is returned from highschool or bachelors API Call


    //---------------------------Start function to format JSON Array that is returned from some College API Call
    function formatSomeCollegeCountyData(json) {

        someCollegeData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationOver25 = json[i][0];
            var totalMaleSomeCollegeUnderOneYear = json[i][1];
            var totalFemaleSomeCollegeUnderOneYear = json[i][2];
            var totalMaleSomeCollegeOverOneYear = json[i][3];
            var totalFemaleSomeCollegeOverOneYear = json[i][4];
            var totalMaleAssociateDegreeGraduates = json[i][5];
            var totalFemaleAssociateDegreeGraduates = json[i][6];
            var countyNameAndState = json[i][7];
            var stateID = json[i][8];
            var countyID = json[i][9];
            someCollegeData.push({
                TotalPopulationOver25: totalPopulationOver25,
                TotalSomeCollege: parseFloat(totalMaleSomeCollegeUnderOneYear) + parseFloat(totalFemaleSomeCollegeUnderOneYear) + parseFloat(totalMaleSomeCollegeOverOneYear) + parseFloat(totalFemaleSomeCollegeOverOneYear) + parseFloat(totalMaleAssociateDegreeGraduates) + parseFloat(totalFemaleAssociateDegreeGraduates),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return someCollegeData 
    }
    //-------------------End function to format JSON Array that is returned from some college API Call


    //---------------------------Start function to format JSON Array that is returned from graduate API Call
    function formatGraduateCountyData(json) {

        graduateData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationOver25 = json[i][0];
            var totalMaleMastersGraduates = json[i][1];
            var totalFemaleMastersGraduates = json[i][2];
            var totalMaleProfessionalSchoolGraduates = json[i][3];
            var totalFemaleProfessionalSchoolGraduates = json[i][4];
            var totalMaleDoctorateDegreeGraduates = json[i][5];
            var totalFemaleDoctorateDegreeGraduates = json[i][6];
            var countyNameAndState = json[i][7];
            var stateID = json[i][8];
            var countyID = json[i][9];
            graduateData.push({
                TotalPopulationOver25: totalPopulationOver25,
                TotalGradSchoolGraduates: parseFloat(totalMaleMastersGraduates) + parseFloat(totalFemaleMastersGraduates) + parseFloat(totalMaleProfessionalSchoolGraduates) + parseFloat(totalFemaleProfessionalSchoolGraduates) + parseFloat(totalMaleDoctorateDegreeGraduates) + parseFloat(totalFemaleDoctorateDegreeGraduates),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return graduateData 
    }
    //-------------------End function to format JSON Array that is returned from graduate API Call


    //---------------------------Start function to format JSON Array that is returned from desired age group 4 parameters API Call
    function formatDesiredAgeGroup4ParametersCountyData(json) {

        DesiredAgeGroup4ParametersData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulation = json[i][0];
            var totalMaleAgeGroup1 = json[i][1];
            var totalMaleAgeGroup2 = json[i][2];
            var totalFemaleAgeGroup1 = json[i][3];
            var totalFemaleAgeGroup2 = json[i][4];
            var countyNameAndState = json[i][5];
            var stateID = json[i][6];
            var countyID = json[i][7];
            DesiredAgeGroup4ParametersData.push({
                TotalPopulation: totalPopulation,
                TotalDesiredAgeGroup: parseFloat(totalMaleAgeGroup1) + parseFloat(totalMaleAgeGroup2) + parseFloat(totalFemaleAgeGroup1) + parseFloat(totalFemaleAgeGroup2),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return DesiredAgeGroup4ParametersData
    }
    //-------------------End function to format JSON Array that is returned from desired age group 4 parameters API Call


    //---------------------------Start function to format JSON Array that is returned from desired age group 6 parameters API Call
    function formatDesiredAgeGroup6ParametersCountyData(json) {

        DesiredAgeGroup6ParametersData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulation = json[i][0];
            var totalMaleAgeGroup1 = json[i][1];
            var totalMaleAgeGroup2 = json[i][2];
            var totalMaleAgeGroup3 = json[i][3];
            var totalFemaleAgeGroup1 = json[i][4];
            var totalFemaleAgeGroup2 = json[i][5];
            var totalFemaleAgeGroup3 = json[i][6];
            var countyNameAndState = json[i][7];
            var stateID = json[i][8];
            var countyID = json[i][9];
            DesiredAgeGroup6ParametersData.push({
                TotalPopulation: totalPopulation,
                TotalDesiredAgeGroup: parseFloat(totalMaleAgeGroup1) + parseFloat(totalMaleAgeGroup2) + parseFloat(totalMaleAgeGroup3) + parseFloat(totalFemaleAgeGroup1) + parseFloat(totalFemaleAgeGroup2) + parseFloat(totalFemaleAgeGroup3),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return DesiredAgeGroup6ParametersData
    }
    //-------------------End function to format JSON Array that is returned from desired age group 6 parameters API Call


    //---------------------------Start function to format JSON Array that is returned from desired age group 6 parameters API Call
    function formatDesiredAgeGroup8ParametersCountyData(json) {

        DesiredAgeGroup8ParametersData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulation = json[i][0];
            var totalMaleAgeGroup1 = json[i][1];
            var totalMaleAgeGroup2 = json[i][2];
            var totalMaleAgeGroup3 = json[i][3];
            var totalMaleAgeGroup4 = json[i][4];
            var totalFemaleAgeGroup1 = json[i][5];
            var totalFemaleAgeGroup2 = json[i][6];
            var totalFemaleAgeGroup3 = json[i][7];
            var totalFemaleAgeGroup4 = json[i][8];
            var countyNameAndState = json[i][9];
            var stateID = json[i][10];
            var countyID = json[i][11];
            DesiredAgeGroup8ParametersData.push({
                TotalPopulation: totalPopulation,
                TotalDesiredAgeGroup: parseFloat(totalMaleAgeGroup1) + parseFloat(totalMaleAgeGroup2) + parseFloat(totalMaleAgeGroup3) + parseFloat(totalMaleAgeGroup4) + parseFloat(totalFemaleAgeGroup1) + parseFloat(totalFemaleAgeGroup2) + parseFloat(totalFemaleAgeGroup3) + parseFloat(totalFemaleAgeGroup4),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return DesiredAgeGroup8ParametersData
    }
    //-------------------End function to format JSON Array that is returned from desired age group 6 parameters API Call


    //---------------------------Start function to format JSON Array that is returned from sixtyfive and older API Call
    function formatSixtyfiveAndOlderCountyData(json) {

        SixtyfiveAndOlderData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulation = json[i][0];
            var totalMale65To66YearsOld = json[i][1];
            var totalMale67To69YearsOld = json[i][2];
            var totalMale70To74YearsOld = json[i][3];
            var totalMale75To79YearsOld = json[i][4];
            var totalMale80To84YearsOld = json[i][5];
            var totalMale85YearsAndOlder = json[i][6];
            var totalFemale65To66YearsOld = json[i][7];
            var totalFemale67To69YearsOld = json[i][8];
            var totalFemale70To74YearsOld = json[i][9];
            var totalFemale75To79YearsOld = json[i][10];
            var totalFemale80To84YearsOld = json[i][11];
            var totalFemale85YearsAndOlder = json[i][12];
            var countyNameAndState = json[i][13];
            var stateID = json[i][14];
            var countyID = json[i][15];
            SixtyfiveAndOlderData.push({
                TotalPopulation: totalPopulation,
                TotalSixtyfiveAndOlder: parseFloat(totalMale65To66YearsOld) + parseFloat(totalMale67To69YearsOld) + parseFloat(totalMale70To74YearsOld) + parseFloat(totalMale75To79YearsOld) + parseFloat(totalMale80To84YearsOld) + parseFloat(totalMale85YearsAndOlder) + parseFloat(totalFemale65To66YearsOld) + parseFloat(totalFemale67To69YearsOld) + parseFloat(totalFemale70To74YearsOld) + parseFloat(totalFemale75To79YearsOld) + parseFloat(totalFemale80To84YearsOld) + parseFloat(totalFemale85YearsAndOlder),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return SixtyfiveAndOlderData
    }
    //-------------------End function to format JSON Array that is returned from sixtyfive and older API Call


    //------------------Start function to format JSON Array that is returned from API Call for male and female population ratio
    function formatMaleAndFemalePopulationRatioCountyData(json) {

        maleAndFemaleRatioCountyData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulationAllAges = json[i][0]
            var totalMaleOrFemalePopulation = json[i][1];
            var countyNameAndState = json[i][2];
            var stateID = json[i][3];
            var countyID = json[i][4];
            maleAndFemaleRatioCountyData.push({
                TotalPopulationAllAges: totalPopulationAllAges,
                TotalMaleOrFemalePopulation: totalMaleOrFemalePopulation,
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return maleAndFemaleRatioCountyData
    }
    //-------------------End function to format JSON Array that is returned from API Call for male and female population ratio


    //---------------------------Start function to format JSON Array that is returned from API Call for male and female marital ratio
    function formatMaritalStatusCountyData(json) {

        maritalStatusCountyData = [];

        for (var i = 1; i < json.length; i++) {
            var totalPopulation15AndOver = json[i][0]
            var totalMaleMaritalStatusPopulation = json[i][1];
            var totalFemaleMaritalStatusPopulation = json[i][2];
            var countyNameAndState = json[i][3];
            var stateID = json[i][4];
            var countyID = json[i][5];
            maritalStatusCountyData.push({
                TotalPopulation15AndOver: totalPopulation15AndOver,
                TotalMaritalStatusPopulation: parseFloat(totalMaleMaritalStatusPopulation) + parseFloat(totalFemaleMaritalStatusPopulation),
                CountyNameAndState: countyNameAndState,
                CountyID: +stateID + countyID
            });
        }
        return maritalStatusCountyData
    }
    //-------------------End function to format JSON Array that is returned from API Call for male and female marital ratio


    

    //--------------FUNCTIONS TO FORMAT JSON ARRAYS FROM CLICKING A COUNTY ON THE MAP
    
    function formatClickedCountyIncomeData(json) {

        ClickedCountyIncomeData = [];

        for (var i = 1; i < json.length; i++) {
            var totalMaleIncome = json[i][0]
            var totalFemaleIncome = json[i][1];
            var totalMedianIndividualIncome = json[i][2];
            var totalMedianHouseholdIncome = json[i][3];
            var countyNameAndState = json[i][4];
            var stateID = json[i][5];
            var countyID = json[i][6];
            ClickedCountyIncomeData.push(
                {"DataType":"Male","Total": parseFloat(totalMaleIncome)},
                {"DataType":"Female","Total": parseFloat(totalFemaleIncome)},
                {"DataType":"MedianIndividual","Total": parseFloat(totalMedianIndividualIncome)},
                {"DataType":"MedianHousehold","Total": parseFloat(totalMedianHouseholdIncome)}
                //{CountyNameAndState: countyNameAndState},
                //{CountyID: +stateID + countyID}
            );
        }
        return ClickedCountyIncomeData
    }


    function formatClickedCountyRaceData(json) {

        ClickedCountyRaceData = [];

        for (var i = 1; i < json.length; i++) {
            var totalWhiteNonHispanic = json[i][0]
            var totalBlack = json[i][1];
            var totalAsian = json[i][2];
            var totalHispanic = json[i][3];
            var countyNameAndState = json[i][4];
            var stateID = json[i][5];
            var countyID = json[i][6];
            ClickedCountyRaceData.push(
                {"DataType":"WhiteNonHispanice","Total": parseFloat(totalWhiteNonHispanic)},
                {"DataType":"Black","Total": parseFloat(totalBlack)},
                {"DataType":"Asian","Total": parseFloat(totalAsian)},
                {"DataType":"Hispanic","Total": parseFloat(totalHispanic)}
                //{CountyNameAndState: countyNameAndState},
                //{CountyID: +stateID + countyID}
            );
        }
        return ClickedCountyRaceData
    }


    function formatClickedCountyEducationData(json) {

        clickedCountyEducationData = [];

        for (var i = 1; i < json.length; i++) {
            //less than high school
            var totalMaleNoSchooling = json[i][0];
            var totalFemaleNoSchooling = json[i][1];
            var totalMaleUpTo4thGrade = json[i][2];
            var totalFemaleUpTo4thGrade = json[i][3];
            var totalMale5thAnd6thGrade = json[i][4];
            var totalFemale5thAnd6thGrade = json[i][5];
            var totalMale7thAnd8thGrade = json[i][6];
            var totalFemale7thAnd8thGrade = json[i][7];
            //some high school
            var totalMale9thGrade = json[i][8];
            var totalFemale9thGrade = json[i][9];
            var totalMale10thGrade = json[i][10];
            var totalFemale10thGrade = json[i][11];
            var totalMale11thGrade = json[i][12];
            var totalFemale11thGrade = json[i][13];
            var totalMale12thGrade = json[i][14];
            var totalFemale12thGrade = json[i][15];
            //high school graduate
            var totalMaleHighSchoolGraduates = json[i][16];
            var totalFemaleHighSchoolGraduates = json[i][17];
            //some college
            var totalSomeCollegeUnderOneYear = json[i][18];
            var totalSomeCollegeOverOneYear = json[i][19];
            var totalAssociateDegreeGraduates = json[i][20];
            //bachelors graduates
            var totalBachelorsGraduates = json[i][21];
            //graduate school
            var totalMastersGraduates = json[i][22]; 
            var totalProfessionalSchoolGraduates = json[i][23];
            var totalDoctorateDegreeGraduates = json[i][24];
            //county and state info
            var countyNameAndState = json[i][25];
            var stateID = json[i][26];
            var countyID = json[i][27];
            clickedCountyEducationData.push(
                {
                "CountyAndState":countyNameAndState,
                "Less Than High School": parseFloat(totalMaleNoSchooling) + parseFloat(totalFemaleNoSchooling) + parseFloat(totalMaleUpTo4thGrade) + parseFloat(totalFemaleUpTo4thGrade) + parseFloat(totalMale5thAnd6thGrade) + parseFloat(totalFemale5thAnd6thGrade) + parseFloat(totalMale7thAnd8thGrade) + parseFloat(totalFemale7thAnd8thGrade),
                "Some High School": parseFloat(totalMale9thGrade) + parseFloat(totalFemale9thGrade) + parseFloat(totalMale10thGrade) + parseFloat(totalFemale10thGrade) + parseFloat(totalMale11thGrade) + parseFloat(totalFemale11thGrade) + parseFloat(totalMale12thGrade) + parseFloat(totalFemale12thGrade),
                "High School Diploma": parseFloat(totalMaleHighSchoolGraduates) + parseFloat(totalFemaleHighSchoolGraduates),
                "Some College": parseFloat(totalSomeCollegeUnderOneYear) + parseFloat(totalSomeCollegeOverOneYear) + parseFloat(totalAssociateDegreeGraduates),
                "Bachelors Degree": parseFloat(totalBachelorsGraduates),
                "Graduate Degree": parseFloat(totalMastersGraduates) + parseFloat(totalProfessionalSchoolGraduates) + parseFloat(totalDoctorateDegreeGraduates),
                //CountyID: +stateID + countyID
                }
            );
        }
        return clickedCountyEducationData
    }


    function formatClickedCountyAgeData(json) {

        clickedCountyAgeData = [];

        for (var i = 1; i < json.length; i++) {
            //seventeen years and younger
            var totalMaleUnder5years = json[i][0];
            var totalMale5to9years = json[i][1];
            var totalFemaleUnder5years = json[i][2];
            var totalFemale5to9years = json[i][3];
            var totalMale10to14years = json[i][4];
            var totalMale15to17years = json[i][5];
            var totalFemale10to14years = json[i][6];
            var totalFemale15to17years = json[i][7];
            
            //eighteen to twentyfour 
            var totalMale18to19years = json[i][8];
            var totalFemale18to19years = json[i][9];
            var totalMale20years = json[i][10];
            var totalMale21years = json[i][11];
            var totalMale22to24years = json[i][12];
            var totalFemale20years = json[i][13];
            var totalFemale21years = json[i][14];
            var totalFemale22to24years = json[i][15];
            //twentyfive to thirtyfour 
            var totalMale25to29years = json[i][16];
            var totalMale30to34years = json[i][17];
            var totalFemale25to29years = json[i][18];
            var totalFemale30to34years = json[i][19];
            //thirtyfive to fortyfour 
            var totalMale35to39years = json[i][20];
            var totalMale40to44years = json[i][21];
            var totalFemale35to39years = json[i][22];
            var totalFemale40to44years = json[i][23];
            //fortyfive to fiftyfour 
            var totalMale45to49years = json[i][24];
            var totalMale50to54years = json[i][25];
            var totalFemale45to49years = json[i][26];
            var totalFemale50to54years = json[i][27];
            //fiftyfive to sixtyfour 
            var totalMale55to59years = json[i][28];
            var totalMale60to61years = json[i][29];
            var totalMale62to64years = json[i][30];
            var totalFemale55to59years = json[i][31];
            var totalFemale60to61years = json[i][32];
            var totalFemale62to64years = json[i][33];
            //sixtyfive and older 
            var totalMale65To66YearsOld = json[i][34];
            var totalMale67To69YearsOld = json[i][35];
            var totalMale70To74YearsOld = json[i][36];
            var totalMale75To79YearsOld = json[i][37];
            var totalMale80To84YearsOld = json[i][38];
            var totalMale85YearsAndOlder = json[i][39];
            var totalFemale65To66YearsOld = json[i][40];
            var totalFemale67To69YearsOld = json[i][41];
            var totalFemale70To74YearsOld = json[i][42];
            var totalFemale75To79YearsOld = json[i][43];
            var totalFemale80To84YearsOld = json[i][44];
            var totalFemale85YearsAndOlder = json[i][45];
            //county and state info
            var countyNameAndState = json[i][46];
            var stateID = json[i][47];
            var countyID = json[i][48];
            clickedCountyAgeData.push(
                {
                "CountyAndState": countyNameAndState,
                "Seventeen Years And Younger": parseFloat(totalMaleUnder5years) + parseFloat(totalMale5to9years) + parseFloat(totalMale10to14years) + parseFloat(totalMale15to17years) +  parseFloat(totalFemaleUnder5years) + parseFloat(totalFemale5to9years) + parseFloat(totalFemale10to14years) + parseFloat(totalFemale15to17years),
                "Eighteen To Twentyfour Years": parseFloat(totalMale18to19years) + parseFloat(totalMale20years) + parseFloat(totalMale21years) + parseFloat(totalMale22to24years) + parseFloat(totalFemale18to19years) + parseFloat(totalFemale20years) + parseFloat(totalFemale21years) + parseFloat(totalFemale22to24years),
                "Twentyfive To Thirtyfour Years": parseFloat(totalMale25to29years) + parseFloat(totalMale30to34years) + parseFloat(totalFemale25to29years) + parseFloat(totalFemale30to34years),
                "Thirtyfive To Fortyfour Years": parseFloat(totalMale35to39years) + parseFloat(totalMale40to44years) + parseFloat(totalFemale35to39years) + parseFloat(totalFemale40to44years),
                "Fortyfive To Fiftyfour Years": parseFloat(totalMale45to49years) + parseFloat(totalMale50to54years) + parseFloat(totalFemale45to49years) + parseFloat(totalFemale50to54years),
                "Fiftyfive To SixtyFour Years": parseFloat(totalMale55to59years) + parseFloat(totalMale60to61years) + parseFloat(totalMale62to64years) + parseFloat(totalFemale55to59years)  + parseFloat(totalFemale60to61years) + parseFloat(totalFemale62to64years),
                "Sixtyfive Years And Older": parseFloat(totalMale65To66YearsOld) + parseFloat(totalMale67To69YearsOld) + parseFloat(totalMale70To74YearsOld) + parseFloat(totalMale75To79YearsOld) + parseFloat(totalMale80To84YearsOld) + parseFloat(totalMale85YearsAndOlder) + parseFloat(totalFemale65To66YearsOld) + parseFloat(totalFemale67To69YearsOld) + parseFloat(totalFemale70To74YearsOld) + parseFloat(totalFemale75To79YearsOld) + parseFloat(totalFemale80To84YearsOld) + parseFloat(totalFemale85YearsAndOlder),
                //CountyID: +stateID + countyID
                }
            );
        }
        return clickedCountyAgeData
    }


    function formatClickedCountySexData(json) {

        ClickedCountySexData = [];

        for (var i = 1; i < json.length; i++) {
            var totalBothSex = json[i][0];
            var totalMaleSex = json[i][1];
            var totalFemaleSex = json[i][2];
            var countyNameAndState = json[i][3];
            var stateID = json[i][4];
            var countyID = json[i][5];
            ClickedCountySexData.push(
                {"DataType":"Total Poplation","Total": parseFloat(totalBothSex)},
                {"DataType":"Total Male Poplation","Total": parseFloat(totalMaleSex)},
                {"DataType":"Total Female Poplation","Total": parseFloat(totalFemaleSex)}
                //{CountyNameAndState: countyNameAndState},
                //{CountyID: +stateID + countyID}
            );
        }
        return ClickedCountySexData
    }


    function formatClickedCountyMarriageData(json) {

        ClickedCountyMarriageData = [];

        for (var i = 1; i < json.length; i++) {
            var totalMaleNeverMarried = json[i][0]
            var totalFemaleNeverMarried = json[i][1]
            var totalMaleNowMarried = json[i][2];
            var totalFemaleNowMarried = json[i][3];
            var totalMaleWidow = json[i][4];
            var totalFemaleWidow = json[i][5];
            var totalMaleDivorced = json[i][6];
            var totalFemaleDivorced = json[i][7];
            var countyNameAndState = json[i][8];
            var stateID = json[i][9];
            var countyID = json[i][10];
            ClickedCountyMarriageData.push(
                {"DataType":"Total Never Married","Total": parseFloat(totalMaleNeverMarried) + parseFloat(totalFemaleNeverMarried)},
                {"DataType":"Total Now Married","Total": parseFloat(totalMaleNowMarried) + parseFloat(totalFemaleNowMarried)},
                {"DataType":"Total Widowed","Total": parseFloat(totalMaleWidow) + parseFloat(totalFemaleWidow)},
                {"DataType":"Total Divorced","Total": parseFloat(totalMaleDivorced) + parseFloat(totalFemaleDivorced)}
                //{CountyNameAndState: countyNameAndState},
                //{CountyID: +stateID + countyID}
            );
        }
        return ClickedCountyMarriageData
    }

    //Function which formats the matched IDs from nested for loops 
    function formatMatchedCountyIDsArray(array) {

        formatedMatchedCountyIds = [];

        for (var i = 0; i < array.length; i++) {
            var matchedCountyID = array[i][0]
            formatedMatchedCountyIds.push({
                CountyID: matchedCountyID,
            });
        }
        return formatedMatchedCountyIds
    }
