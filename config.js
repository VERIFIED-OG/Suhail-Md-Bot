const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347056913070";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347056913070,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347056913070,234xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's VERIFIED_OG",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_39_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaitvMEV0ZXFBbDl1ZlQxaXNiZyt5SE5id1NqVjVxaitOVWRFUWZkMVZjST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2xkZWRuVC1TbGluSWhlTEhnVFprUVwiLFxuICBcInBob25lSWRcIjogXCI2MjI5MTc2Ny1iYTFjLTRjM2ItYTkxYi0zZWMyYTNjMDBmMzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTE4LFxuICAgICAgMTkwLFxuICAgICAgNDAsXG4gICAgICAyMjEsXG4gICAgICAyMTEsXG4gICAgICAxNDAsXG4gICAgICAxMzUsXG4gICAgICA2MyxcbiAgICAgIDU2LFxuICAgICAgMTI5LFxuICAgICAgMjExLFxuICAgICAgMTQ5LFxuICAgICAgMTM0LFxuICAgICAgMTg3LFxuICAgICAgMjEwLFxuICAgICAgMjUwLFxuICAgICAgODEsXG4gICAgICAxMjEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxNzUsXG4gICAgICA0MCxcbiAgICAgIDM2LFxuICAgICAgMTgzLFxuICAgICAgMjEyLFxuICAgICAgMTQ2LFxuICAgICAgMTM1LFxuICAgICAgNzQsXG4gICAgICA1NCxcbiAgICAgIDI1MyxcbiAgICAgIDEyNCxcbiAgICAgIDI1MSxcbiAgICAgIDIwMixcbiAgICAgIDk4LFxuICAgICAgMTQwLFxuICAgICAgMzUsXG4gICAgICA5NCxcbiAgICAgIDE1MyxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RzVGU01GUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1NjkxMzA3MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzAyMDU3NDU1NjE3NDA6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOejhsSkVGRUw2T3piWUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5tNG9HSlBnV0RPYVBsQTVZdnRpWjhsdWV2WlBreE1kU2tVTjQ4NkdQQ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2NveW9GbDQ2aHAxOFlDOFZ1TFdHQmJmZ3NQRVRhaHVtUUQ1d3VLbDAvSnFaMmVMTXowamF0dlV1aTdSKytwak1YQnBrc29QckgxbTIyOWNiVTZMQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicXB5dW5WWkdKTnB6Q2t1cmFEOElnemhTdlZJd2N2eFRtNHNyWURNZ3luc3gwMzZNVzlqZVRSVSt3R25hdEU0RStqWVNKT09ibDd4Q0JpdTM5b3RnRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NjkxMzA3MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTEyMjM3MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
