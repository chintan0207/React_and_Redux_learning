// getting-started.js
const mongoose = require('mongoose');

const DBURL = "mongodb://127.0.0.1:27017/checkformdata"

// const DBURL = "mongodb+srv://imchintan0207:WG8DvNNFrlFfxpqU@userauth.j4dbcfd.mongodb.net/?retryWrites=true&w=majority&appName=userauth"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DBURL);
  console.log("DB connected")
}