const inputText = document.querySelector("input");
const debounceText = document.createElement("div");
debounceText.innerHTML =
  "<span> Debaounce Text </span> <span id =textId></span>";
document.body.append(debounceText);

inputText.addEventListener("keyup", (e) => {
  const debounceOutput = document.getElementById("textId");
  debounceOutput.textContent = "";
  const debounce = (func, delay) => {
    return () => {
      let timerId = setTimeout(() => {
        clearTimeout(timerId);
        func();
      }, delay);
    };
  };

  debounce(() => {
    debounceOutput.textContent = e.target.value;
  }, 1000)();
});
