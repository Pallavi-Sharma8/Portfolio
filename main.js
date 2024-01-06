const profession = document.querySelector("#profession-text");
const professiontext = () => {
  setTimeout(() => {
    profession.innerHTML = "Student";
  } , 0);
  setTimeout(() => {
    profession.innerHTML = "Writer";
  } , 3000);
  setTimeout(() => {
    profession.innerHTML = "Video Editor";
  } , 6000);
  setTimeout(() => {
    profession.innerHTML = "Web developer";
  } , 9000);
};

professiontext();