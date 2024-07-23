const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ricoricx5@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708002615";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_58_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhhcnoxN2lOWFQ4WXNhL2dDNmRhRlduekdicDRyTVcxMnVTcjU2cjVHaWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhJWlQ2dW0wU2lXTkExVDFoUW85T2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDY0NjQ5OWYtYTkxMy00YTQ4LWFjNTAtODczYTJlMThlZGQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTU4LFxuICAgICAgMTkyLFxuICAgICAgNTcsXG4gICAgICAxMTEsXG4gICAgICAyNDMsXG4gICAgICAyMzYsXG4gICAgICA1NixcbiAgICAgIDE4MSxcbiAgICAgIDEyOCxcbiAgICAgIDE1NSxcbiAgICAgIDEwMSxcbiAgICAgIDI2LFxuICAgICAgNixcbiAgICAgIDE4MyxcbiAgICAgIDY4LFxuICAgICAgMjE3LFxuICAgICAgMTE0LFxuICAgICAgMjE4LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDcyLFxuICAgICAgNzQsXG4gICAgICA5NSxcbiAgICAgIDk5LFxuICAgICAgNDcsXG4gICAgICAyMDAsXG4gICAgICA4NCxcbiAgICAgIDE4NCxcbiAgICAgIDE3MCxcbiAgICAgIDEyNCxcbiAgICAgIDE4NCxcbiAgICAgIDgzLFxuICAgICAgNzMsXG4gICAgICA0NyxcbiAgICAgIDE2NCxcbiAgICAgIDM1LFxuICAgICAgNTIsXG4gICAgICAxMDMsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlNHTEs5U1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwODAwMjYxNTo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQwMzk0MDUwNzgxMjI4OjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzbjVHb1F0Wm4rdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWNNSzhzZmZwdGprUnlmbFNaV3hDaEgwMG1XQlJnTHFaQzB4OFphYVJBUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwNXI5RHhYNkdHVThabm9BeWUxclJDLzB0ZmwwNy9UcHJQcUtZS3FiRnFOTWVHSkxvK0NNckhFRlJGMUNNM2JRNHlFL2ZxTHQ4Sk5vbkxlWFBBMDJCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJRHNRODkxNjBRQkRZZjUrTm9QSUxraGJiWVdLUk44bVg3bFB4UmtrRmovNFJCVUs2cFBzZ0U4VUtHRzVpZ2JhY3M3R3llWldhMFRtNmQrdCt4dFdDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDgwMDI2MTU6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MzIyODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDM2FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMzYS5qc29uIjogIntcImtleURhdGFcIjpcIldvbnV5TXhKd3pSM1k0Rm56b2hMbFJUUmJlOUhUcjRTdzNDVFI3NlJsa2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIzOTQ5ODIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2NDc5NTU3NzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Dcyoungfly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
