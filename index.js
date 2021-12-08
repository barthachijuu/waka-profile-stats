#!/usr/bin/env node

const { WakaTimeClient, RANGE } = require("wakatime-client");

const { WAKATIME_API_KEY: wakatimeApiKey } = process.env;

const wakatime = new WakaTimeClient(wakatimeApiKey);


async function main() {
  const stats = await wakatime.getMyStats({ range: RANGE.LAST_7_DAYS });
  console.log(process.stats);
}

(async () => {
  await main();
})();