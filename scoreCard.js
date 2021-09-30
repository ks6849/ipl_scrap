// const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

function processSingleMatch(url){
    request(url,cb);
    console.log(''''''''''''''');
                console.log(''''''&&&&''''''''');
                console.log(''''''''''''''');
                console.log(''''''''''''''');
                console.log(''''''''''''''');
                console.log(''''''''''''''');
                console.log(''''''''''''''');

}

function cb(err,res,html){
    if(!err){
        if(err){
                console.log("Error!!!");
            }
        let $ = cheerio.load(html);
        let scorecardArr = $(".match-scorecard-page .Collapsible");
        // console.log(scorecardArr.length);
        let scorecard = ""
        for(let i=0 ; i<scorecardArr.length ; i++){
            // console.log(scorecardArr[i]);
            // console.log("````````````````````````````");
            // fs.writeFileSync(`innings${i+1}.html`,$(scorecardArr[i]).html());
            let teamNameElement = $(scorecardArr[i]).find("h5");
            let teamName = teamNameElement.text();
            teamName = teamName.split("INNINGS")[0];
            teamName = teamName.trim(); // try to trim
            // console.log(teamName);
            if(err){
                console.log("erro!!!");
            }
            let batsmanTableBodyAllRow = $(scorecardArr[i]).find(".table.batsman tbody tr");
            // console.log(batsmanTableBodyAllRow.length);
            for(let i=0 ; i<batsmanTableBodyAllRow.length ; i++){
                let numberOfTds = $(batsmanTableBodyAllRow[i]).find("td");
                // console.log(numberOfTds.length);
                if(numberOfTds.length == 8){
                    let playerName = $(numberOfTds[0]).text()
                    console.log(playerName); 
                }
            }
            console.log("```````````````````````````````````");
        }
        
        
    }
}

module.exports = {
    processSingleMatch
}
