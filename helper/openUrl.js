// const { exec } = require("child_process");
// module.exports = url => {
//   switch (process.platform) {
//     case "darwin": // mac
//       exec(`open ${url}`);
//       break;
//     case "win32": // mac
//       exec(`start ${url}`);
//       break;
//     /*  */
//     default:
//       break;
//   } /*  */
// };

const {exec} = require('child_process')
module.exports = url => {
  switch (process.platform) {
    case 'darwin': //mac
      exec(`open ${url}`)
      break;
    case 'win32':
      exec(`start ${url}`)
      break
  }
}
