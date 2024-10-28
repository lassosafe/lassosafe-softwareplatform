import xlsx from "xlsx";

export const separateStrings = (strings: string): string[] => {
  if (strings === "") return [];
  const stringsTrimmed = strings.replace(/, |,| {2}|\n|;|]|\[/gi, " ").trim();
  return stringsTrimmed.split(/[ ]+/);
};

export const adjustColor = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ordinalNumbers = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
  "13th",
  "14th",
  "15th",
  "16th",
  "17th",
  "18th",
  "19th",
  "20th",
  "21st",
  "22nd",
  "23rd",
  "24th",
  "25th",
  "26th",
  "27th",
  "28th",
  "29th",
  "30th",
  "31st",
];

export const dateToMonthAndDay = (date: Date) => {
  const d = new Date(date);
  const month = months[d.getMonth()];
  const day = ordinalNumbers[d.getDate() - 1];
  return month + " " + day;
};

export const currentOrFutureYear = (date: Date) => {
  const d = new Date(date);
  const dateMonth = d.getMonth();
  const dateDay = d.getDay();
  const today = new Date(Date.now());
  const currentMonth = today.getMonth();
  const currentDay = today.getDay();
  const currentYear = today.getFullYear();
  if (
    currentMonth > dateMonth ||
    (currentMonth === dateMonth && currentDay >= dateDay)
  ) {
    return currentYear + 1;
  }
  return currentYear;
};

export const calculateFinalGrade = (finalScore: string) => {
  if (finalScore === "N/A" || finalScore === "NaN") return "N/A";
  else if (parseFloat(finalScore) <= 0.25) return "D";
  else if (parseFloat(finalScore) <= 0.5) return "C";
  else if (parseFloat(finalScore) <= 0.75) return "B";
  else return "A";
};

export const calculateFinalGradeColor = (finalScore: string) => {
  if (calculateFinalGrade(finalScore) === "N/A") return "white";
  else if (calculateFinalGrade(finalScore) === "D") return "#ee4b2b";
  else if (calculateFinalGrade(finalScore) === "C") return "#ffc107";
  else if (
    calculateFinalGrade(finalScore) === "A" ||
    calculateFinalGrade(finalScore) === "B"
  )
    return "#2ed8b6";
};
