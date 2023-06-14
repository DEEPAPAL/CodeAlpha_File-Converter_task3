const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".fileName input"),
selectMenu = document.querySelector(".save-as select"),
btn = document.querySelector(".btn");

selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    btn.innerText =`Save As ${selectedOption.split(" ")[0]} File`; 

});

btn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});

    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();

});