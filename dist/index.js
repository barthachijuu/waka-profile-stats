#!/usr/bin/env node
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 703:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}Object.defineProperty(exports, "__esModule", ({value:!0}));var e=t(__nccwpck_require__(115));function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return(o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],0<=e.indexOf(n)||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],!(0<=e.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i,s=Object.freeze({LAST_7_DAYS:"LAST_7_DAYS",LAST_30_DAYS:"LAST_30_DAYS",LAST_6_MONTHS:"LAST_6_MONTHS",LAST_YEAR:"LAST_YEAR"}),c=function(t){var e=t.dateRange,n=t.projectName,r=void 0===n?null:n,a=t.branchNames,o=void 0===a?[]:a;return{start:e.startDate,end:e.endDate,project:r,branches:o.join(",")}},g=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.timeout,n=void 0===e?null:e,r=t.useWritesOnly,a=void 0===r?null:r,o=t.projectName,u=void 0===o?null:o;return{timeout:n,writes_only:a,project:u}},d=function(t){var e=t.date,n=t.projectName,r=void 0===n?null:n,a=t.branchNames;return{date:e,project:r,branches:(void 0===a?[]:a).join(",")}},f=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.authorUsername,n=void 0===e?null:e,r=t.pageNumber,a=void 0===r?null:r;return{author:n,page:a}},m=Object.freeze((a(i={},s.LAST_7_DAYS,"last_7_days"),a(i,s.LAST_30_DAYS,"last_30_days"),a(i,s.LAST_6_MONTHS,"last_6_months"),a(i,s.LAST_YEAR,"last_year"),i)),h=function(){function t(r){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"https://wakatime.com/api/v1/";n(this,t),this.apiKey=r,this.axiosConfiguration=e.default.create({baseURL:a,headers:{Authorization:"Basic ".concat(Buffer.from(this.apiKey).toString("base64"))}})}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"getUser",value:function(t){return this.axiosConfiguration.get("users/".concat(t)).then((function(t){return t.data}))}},{key:"getMe",value:function(){return this.axiosConfiguration.get("users/current").then((function(t){return t.data}))}},{key:"getTeams",value:function(t){return this.axiosConfiguration.get("users/".concat(t,"/teams")).then((function(t){return t.data}))}},{key:"getMyTeams",value:function(){return this.axiosConfiguration.get("users/current/teams").then((function(t){return t.data}))}},{key:"getUserAgents",value:function(t){return this.axiosConfiguration.get("users/".concat(t,"/user_agents")).then((function(t){return t.data}))}},{key:"getMyUserAgents",value:function(){return this.axiosConfiguration.get("users/current/user_agents").then((function(t){return t.data}))}},{key:"getTeamMembers",value:function(t){var e=t.userId,n=t.teamId;return this.axiosConfiguration.get("users/".concat(e,"/teams/").concat(n,"/members")).then((function(t){return t.data}))}},{key:"getMyTeamMembers",value:function(t){return this.axiosConfiguration.get("users/current/teams/".concat(t,"/members")).then((function(t){return t.data}))}},{key:"getTeamMemberSummary",value:function(t){var e=t.userId,n=t.teamId,r=t.teamMemberId,a=u(t,["userId","teamId","teamMemberId"]);return this.axiosConfiguration.get("users/".concat(e,"/teams/").concat(n,"/members/").concat(r,"/summaries"),{params:c(a)}).then((function(t){return t.data}))}},{key:"getMyTeamMemberSummary",value:function(t){var e=t.teamId,n=t.teamMemberId,r=u(t,["teamId","teamMemberId"]);return this.axiosConfiguration.get("users/current/teams/".concat(e,"/members/").concat(n,"/summaries"),{params:c(r)}).then((function(t){return t.data}))}},{key:"getUserSummary",value:function(t){var e=t.userId,n=u(t,["userId"]);return this.axiosConfiguration.get("users/".concat(e,"/summaries"),{params:c(n)}).then((function(t){return t.data}))}},{key:"getMySummary",value:function(t){var e=o({},t);return this.axiosConfiguration.get("users/current/summaries",{params:c(e)}).then((function(t){return t.data}))}},{key:"getUserStats",value:function(t){var e=t.userId,n=t.range,r=u(t,["userId","range"]);return this.axiosConfiguration.get("users/".concat(e,"/stats/").concat(m[n]),{params:g(r)}).then((function(t){return t.data}))}},{key:"getMyStats",value:function(t){var e=t.range,n=u(t,["range"]);return this.axiosConfiguration.get("users/current/stats/".concat(m[e]),{params:g(n)}).then((function(t){return t.data}))}},{key:"getProjects",value:function(t){return this.axiosConfiguration.get("users/".concat(t,"/projects")).then((function(t){return t.data}))}},{key:"getMyProjects",value:function(){return this.axiosConfiguration.get("users/current/projects").then((function(t){return t.data}))}},{key:"getLeaders",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.language,n=void 0===e?null:e,r=t.pageNumber,a=void 0===r?null:r;return this.axiosConfiguration.get("leaders",{params:{language:n,page:a}}).then((function(t){return t.data}))}},{key:"getHeartbeats",value:function(t){var e=t.userId,n=t.date;return this.axiosConfiguration.get("users/".concat(e,"/heartbeats"),{params:{date:n}}).then((function(t){return t.data}))}},{key:"getMyHeartbeats",value:function(t){return this.axiosConfiguration.get("users/current/heartbeats",{params:{date:t}}).then((function(t){return t.data}))}},{key:"getGoals",value:function(t){return this.axiosConfiguration.get("users/".concat(t,"/goals")).then((function(t){return t.data}))}},{key:"getMyGoals",value:function(){return this.axiosConfiguration.get("users/current/goals").then((function(t){return t.data}))}},{key:"getDurations",value:function(t){var e=t.userId,n=u(t,["userId"]);return this.axiosConfiguration.get("users/".concat(e,"/durations"),{params:d(n)}).then((function(t){return t.data}))}},{key:"getMyDurations",value:function(t){var e=o({},t);return this.axiosConfiguration.get("users/current/durations",{params:d(e)}).then((function(t){return t.data}))}},{key:"getCommits",value:function(t){var e=t.userId,n=t.projectName,r=u(t,["userId","projectName"]);return this.axiosConfiguration.get("users/".concat(e,"/projects/").concat(n,"/commits"),{params:f(r)}).then((function(t){return t.data}))}},{key:"getMyCommits",value:function(t){var e=t.projectName,n=u(t,["projectName"]);return this.axiosConfiguration.get("users/current/projects/".concat(e,"/commits"),{params:f(n)}).then((function(t){return t.data}))}},{key:"getMetadata",value:function(){return this.axiosConfiguration.get("meta")}},{key:"getOrganizations",value:function(t){return this.axiosConfiguration.get("users/".concat(t,"/orgs")).then((function(t){return t.data}))}},{key:"getMyOrganizations",value:function(){return this.axiosConfiguration.get("users/current/orgs").then((function(t){return t.data}))}},{key:"getOrganizationDashboards",value:function(t){var e=t.userId,n=t.organizationId;return this.axiosConfiguration.get("users/".concat(e,"/orgs/").concat(n)).then((function(t){return t.data}))}},{key:"getMyOrganizationDashboards",value:function(t){return this.getOrganizationDashboards({userId:"current",organizationId:t})}},{key:"getOrganizationDashboardMembers",value:function(t){var e=t.userId,n=t.organizationId,r=t.dashboardId;return this.axiosConfiguration.get("users/".concat(e,"/orgs/").concat(n,"/dashboards/").concat(r,"/members")).then((function(t){return t.data}))}},{key:"getMyOrganizationDashboardMembers",value:function(t){var e=t.organizationId,n=t.dashboardId;return this.getOrganizationDashboardMembers({userId:"current",organizationId:e,dashboardId:n})}},{key:"getOrganizationDashboardMemberSummaries",value:function(t){var e=t.userId,n=t.organizationId,r=t.dashboardId,a=t.memberId;return this.axiosConfiguration.get("users/".concat(e,"/orgs/").concat(n,"/dashboards/").concat(r,"/members/").concat(a,"/summaries")).then((function(t){return t.data}))}},{key:"getMyOrganizationDashboardMemberSummaries",value:function(t){var e=t.organizationId,n=t.dashboardId,r=t.memberId;return this.getOrganizationDashboardMemberSummaries({userId:"current",organizationId:e,dashboardId:n,memberId:r})}},{key:"getOrganizationDashboardMemberDurations",value:function(t){var e=t.userId,n=t.organizationId,r=t.dashboardId,a=t.memberId;return this.axiosConfiguration.get("users/".concat(e,"/orgs/").concat(n,"/dashboards/").concat(r,"/members/").concat(a,"/durations")).then((function(t){return t.data}))}},{key:"getMyOrganizationDashboardMemberDurations",value:function(t){var e=t.organizationId,n=t.dashboardId,r=t.memberId;return this.getOrganizationDashboardMemberDurations({userId:"current",organizationId:e,dashboardId:n,memberId:r})}}]),t}();exports.RANGE=s,exports.WakaTimeClient=h;


/***/ }),

/***/ 115:
/***/ ((module) => {

module.exports = eval("require")("axios");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

const { WakaTimeClient, RANGE } = __nccwpck_require__(703);

const { WAKATIME_API_KEY: wakatimeApiKey } = process.env;

const wakatime = new WakaTimeClient(wakatimeApiKey);


async function main() {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_7_DAYS });
  console.log(process.stats);
}

(async () => {
  await main();
})();
})();

module.exports = __webpack_exports__;
/******/ })()
;