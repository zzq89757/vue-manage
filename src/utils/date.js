export function getDate(date, ran) {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = d.getDate() - ran * Math.random().toFixed(0) + "";
  let year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}