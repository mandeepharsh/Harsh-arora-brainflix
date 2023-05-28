export const timeStamp = (commentDate) => {
  let currentDate = new Date().getTime();
  let displayDate = "";

  let timeDifference = currentDate - commentDate;

  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(timeDifference / (1000 * 60));
  let hours = Math.floor(timeDifference / (1000 * 60 * 60));
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
  
  if(seconds < 0){
    displayDate = `0 seconds ago`;
  }else if (seconds < 60) {
    displayDate = `${seconds} seconds ago`;
  } else if (minutes < 60) {
    displayDate = `${minutes} minutes ago`;
  } else if (hours < 24) {
    displayDate = `${hours} hours ago`;
  } else if (days < 30) {
    displayDate = `${days} days ago`;
  } else if (days < 365) {
    displayDate = `${Math.floor(days / 30)} months ago`;
  } else {
    displayDate = `${Math.floor(days / 365)} year ago`;
  }

  return displayDate;
};