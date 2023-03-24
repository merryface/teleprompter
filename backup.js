const startPrompter = () => {
  const textarea = document.getElementById("script");
  const scrollHeight = script.scrollHeight - textarea.clientHeight;
  let currentScroll = textarea.scrollTop;
  const speed = 2; // Change this value to adjust the speed of scrolling.

  const scrollInterval = setInterval(() => {
    if (currentScroll < scrollHeight) {
      currentScroll += speed;
      textarea.scrollTop = currentScroll;
    } else {
      clearInterval(scrollInterval);
    }
  }, 50); // Change this value to adjust the refresh rate of the scroll interval.
};

document.querySelector('button').addEventListener('click', startPrompter);