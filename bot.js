// creates an export key for apis you want
//console.log(process.env.VARIABLENAME); 


//only sending messages out to the user 

// asynchronous outgoing messages
var Discord = require('discord.io');
var logger = require('winston');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});


var bot = new Discord.Client({
    token: "Nzc4NDcwNDU5MzI2MzMyOTM5.X7SdHA.sjsDAz3veRTpaBOxILd_IPJxJe8",
    autorun: true
});








bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
 
});



//const schedule = require('node-schedule');

var weather = require('weather-gov-api');
const schedule = require('node-schedule');


logger.level = 'debug';

/*
// Configure the array used for random replies
let replies = ["reply 1", "reply 2", "reply 3"];

// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
let random = Math.floor(Math.random() * replies.length);


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with /
    if (message.substring(0, 1) == '/') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // /Hi
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: replies[random]
                });
        break;
        // Just add any case commands if you want to..
         }
     }
});
*/






bot.on('message', (user, userID, channelID, message, evt) => {
    const args = message.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase();
  
    if (command == "announce") {
      var announcement = "Hey! Thanks for letting in your channel! :) This ";
      for (const word in args) {
        announcement = announcement + args[word] + " ";
      }
     bot.send(announcement)
    }
  })
    if (message.substring(0, 1) == '/') {


        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command1 = args.shift();
        const command2= args.shift();
  

}

 weather.getForecast('default',32.7765, -79.9311)
     .then(
    
         data => {   

bot.on('message', (user, userID, channelID, message, evt) => {
                 // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with /

        
    if (message.substring(0, 1) == '/') {


            var args = message.substring(1).split(' ');
            var command = args[0];

        args = args.splice(1);

             if (command == "Weathertoday")
             {
                 for(var i = 0 ; i < data.data.properties.periods.length; i++)
                 {
                         if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
             
                         {    
                             
                             var result=data.data.properties.periods[i];
                             bot.sendMessage({
                                to: channelID,
                               message: "Today's Forecast: " + result.detailedForecast
                         })
                        }
         
                }
            }


             if (command == "Weathertonight")
             {
                 for(var i = 0 ; i < data.data.properties.periods.length; i++)
                 {
                         if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
             
                         {    
                             
                             var result=data.data.properties.periods[i+2];
                             bot.sendMessage({
                                to: channelID,
                               message: "Today's Forecast: " + result.detailedForecast
                         })
                    }
         
                }
            }
             
             if (command == "WeatherTomorrow")
             {
                 
                 for(var i = 0 ; i < data.data.properties.periods.length; i ++)
                 { 
                    if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
                    {    
                        var result=data.data.properties.periods[i+3];
                        bot.sendMessage({
                            to: channelID,
                           message: "Tommorrow's Forecast: " + result.detailedForecast
                    })
                 }
             }
            }

                 

             if (command == "TempartureToday")
             {
                 for(var i = 0 ; i < data.data.properties.periods.length; i ++)
                 {
                     if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
                     {    
                         
                         var result=data.data.properties.periods[i];
                         bot.sendMessage({
                         to: channelID,
                        message:"Todays Temperature:" + result.temperature + "degrees"
             
                         })
                    }
                 }
             }
             if (command == "TempartureTomorrow")
             {
             
                 for(var i = 0 ; i < data.data.properties.periods.length; i ++)
                 {
                         if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
                         {    
                             
                             var result=data.data.properties.periods[i+3];
                             bot.sendMessage({
                                to: channelID,
                                messagge: "Tommorrows Temperature: " + result.temperature +"degrees"
              
                         })
                    }
                }
            } 

        }

        })

    })
    .catch(err => console.log(err))  




/*schedule.scheduleJob('* * * * * *', function(){  
weather.getForecast('default', 34.9407341, -81.0333383)
        .then(
                bot.on('message', (user, userID, channelID, message, evt) => {
            data => { 
               var rainSearch= [
                    "Areas Of Drizzle", 
                    "Areas Of Drizzle then Partly Sunny", 
                    "Areas Of Drizzle then Partly Sunny",
                    "Areas Of Drizzle then Showers And Thunderstorms",
                    "Slight Chance Rain Showers",
                    "Chance Light Rain",
                   "Rain Likely",
                   "Rain",
                   "Light Rain Likely",
                   "Partly Sunny then Slight Chance Rain Showers ",
                   "Mostly Cloudy then Slight Chance Rain Showers",
                   "Slight Chance Rain Showers then Mostly Cloudy",
                   "Showers And Thunderstorms then Light Rain Likely",
                   "Showers And Thunderstorms Likely then Chance Showers And Thunderstorms",
                   "Slight Chance Rain Showers then Partly Sunny",
                   "Chance Showers And Thunderstorms",
                   "Chance Light Rain then Areas Of Drizzle"
                
                ]
           
              
            
               for(var i = 0 ; i < data.data.properties.periods.length; i++)
                   {
                      if (Date.parse(data.data.properties.periods[i].startTime) <Date.parse(new Date()) &&Date.parse(data.data.properties.periods[i].endTime) >Date.parse(new Date()))
                      {     
                          var result=data.data.properties.periods[i];
   
                          bot.sendMessage({
                            to: channelID,
                           message: "Good Morning! Here's a Look at Today's Weather:" +result.detailedForecast
                       })
                      
                      }
                   
                     for(var i = 0 ; i < rainSearch.length; i ++)
                      {
                           if (result.shortForecast == rainSearch[i])
                              {
                                bot.sendMessage({
                                    to: channelID,
                                   message: 'Theres a chance it may rain today! Dont forget an umbrella!'
                               })
                               }
                      }
                  }
           
      

        })

    })



.catch(err => console.log(err))

});
*/