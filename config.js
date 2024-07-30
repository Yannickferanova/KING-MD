const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
  global.SESSION_ID = process.env.SESSION_ID ||  'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tnL2FvQXhmNU1WZHF4eVBOWGJ1cGg5MjBDN1l6TEFUYUhtMzlsbnptRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3Z0ak1RemFDVThqTldyS3Y2N0ZYOVNLYndRcExDVm53bGJ5aU5EMXgzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUE1uOUIwSHhLa2o5cUFpdGs5SlFyYnB6VGJkcWlyN0RkMU16VkFJRmtzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3M2syQnAxRm00VFhoL1lJM01kenN5SDJ0MU1LOUcvQ3JrNCt0cEpkQmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFBdnZGNVFYZzdJNEFnSVdNVGdYZ1pCZVhFTW9tejlTZTZzSHpEYVhXVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ5TDhLd1lLcXRRWnhLNm9LVWI3NmV5c2VEeExlRlAwVndKZzh4UytmQ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEdTMzd1Ujhnckl6ZUFtOHowZDgxSU82YXZRNEhVSDJvUDQ1c0t0MHJsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlBkUG9zdGY5OWR6Zm1YOUNoOFVYVGVoQmlWWTVSNlM2Z3l5THNSdG8ycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdhRXJuOVY5SnNRTXJZbXdiSXVENTIxYWhYRWdwMEtDelI2Z0ptZnN0WjVJYWlmbnZmWCtrbXF1eVozKzEybHFIZ1pnV1pvZXVSNjM2WUhRaVRnNUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiIyNU1xUkpZa0NMSk9jUHBoVDU4UjZiM2VuUlE1SW1FbjcydXNmSFdFemRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxenRvbEl1a1I2eXpWaTQxOERES21BIiwicGhvbmVJZCI6IjdjNjQ3NGIyLWRiMGYtNGNjYi1hZWI3LTIwMzZkODQwNTQ0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISzFFSFNFckJiTDRVVVdvQjNBM0x6SW94Wk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTU1SW94MUdGU09iNXNqVzVOTFowbU5tV2ZVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFXS0ZRWUU1IiwibWUiOnsiaWQiOiIyMjUwMTYwNTQzMzUyOjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngfCTiojwkoac8J2Qg/CdmqvwnZqp8J2asCDwnZCD8J2atfCdm4HwnZqw8J2QiyfwnZCS8JKGnPCTionqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ002T3RZb0VFUHVGcExVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBQQU00N3ZPMGZGNzRBbjdJT1hrUWdXUzU1RmxlM3o3a3BzWmZBSXV1VjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBsS0NmalM4ZjRCdDd6RlA4dnZjcDhQa1l2c05wMWcvWDJnOHU5M3hXaVF4OXorbU9ZbDNQbWU2MXJId2xJSUJsV2xvN0NxcHRtNDlLeS84czBFaEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5T3pJSVlRb1BxbGNKSXk2WUZuMnJ3UXo2Tk1RdlV5NzB3MEN6MjU4WUJpT2Eyc3o2ZWVUYXdFcmtQa05XZSt5NExSQkg4SkdVQis0VFhiSUdPNFRDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAxNjA1NDMzNTI6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZER3RE9PN3p0SHhlK0FKK3lEbDVFSUZrdWVSWlh0OCs1S2JHWHdDTHJsZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjM1MjM5M30=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
