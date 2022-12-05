// code your solution here
let records = [
  { year: 2015, result: "W" },
  { year: 2014, result: "N/A" },
];
let superbowlWin = (records) => {
  let res = records.find((record) => record.result == "W");
  if (res) {
    return res.year;
  } else {
    return undefined;
  }
};
