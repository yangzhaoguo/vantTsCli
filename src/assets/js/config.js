let api;
const allHref = window.location.href;
if (allHref.indexOf("tmc.himyidea.com") !== -1) {
  api = "https://tmc.himyidea.com";
} else if (allHref.indexOf("39.106.168.89") !== -1) {
  api = "http://39.106.168.89";
} else if (allHref.indexOf("uat.himyidea.com") !== -1) {
  api = "http://uat.himyidea.com";
} else {
  api = "http://test.himyidea.com";
}
export { api };
//# sourceMappingURL=config.js.map
