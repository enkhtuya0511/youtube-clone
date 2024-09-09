export function timeSince(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

export function abbreviateNumber(number) {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(1) + "B"; // Billion
  } else if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1) + "M"; // Million
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1) + "K"; // Thousand
  } else {
    return number?.toString(); // Less than a thousand
  }
}
