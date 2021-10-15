const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

let scoreCardObj = require("./scoreCard");
request(url, cb);
request(url, cb);
request(url, cb);

function cb(err, res, html) {
  if(err){
    console.log("Error!!!");
  }
  
  if(err){
    console.log("Error!!!");
  }
  if(err){
    console.log("Error!!!");
  }
  
  if(err){
    console.log("Error!!!");
  }
  
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
///////////////////////////////////
if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
///////////////////////////////////
function cb(err, res, html) {
  if(err){
    
    console.log("Error!!!");
  }
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
//////////////////////////////////////////////////
///////////////////////////////////
if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}

if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
//////////////////////////////////////////////////

if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
//////////////////////////////////////////////////

function cb(err, res, html) {
  if(err){
    console.log("Error!!!");
  }
  if(err){
    console.log("Error!!!");
  }
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
//////////////////////////////////////////////////

function cb(err, res, html) {
  if(err){
    console.log("Error!!!");
  }
  if (!err) {
    let searchTool = cheerio.load(html);
    let link = searchTool(".widget-items.cta-link a");
    let fullLink = "https://www.espncricinfo.com" + link.attr("href");
    // console.log(fullLink);
    request(fullLink, allMatchPageCb);
  }
}
//////////////////////////////////////////////////



function allMatchPageCb(err, res, html) {
  if(err){
    console.log("Error!!!");
  }
  if (!err) {
    let $ = cheerio.load(html);
    let allScoreCardLink = $('a[data-hover="Scorecard"]');
    // console.log(allScoreCardLink.length);
    let count = 0;
    for(let i=0 ; i<allScoreCardLink.length ; i++){
        let link = $(allScoreCardLink[i]).attr("href");
        let fullAllMatchLink ="https://www.espncricinfo.com"+link;
        // console.log("https://www.espncricinfo.com"+link);
        scoreCardObj.processSingleMatch(fullAllMatchLink)
    }
    console.log("```````````````````````````````````");
  }
}

if(err){
    console.log("Error!!!");
  }


