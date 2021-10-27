let text = document.getElementById("text");


const readMoreLess = (textNode,numberToSlice)=>{
    let readMore = document.createElement("i");
    readMore.classList.add("bi", "bi-caret-down-fill");
    let readLess = document.createElement("i");
    readLess.classList.add("bi", "bi-caret-up-fill");

    if (textNode.innerText.length > numberToSlice) {
      const origin = textNode.innerText.slice(0, numberToSlice);
      const rest = textNode.innerText.slice(
        numberToSlice + 1,
        textNode.innerText.length
      );
      textNode.innerText = origin;
      textNode.append(readMore);
      readMore.addEventListener("click", () => {
        textNode.removeChild(textNode.lastChild);
        textNode.append(rest);
        textNode.append(readLess);
      });
    }

    readLess.addEventListener("click", () => {
      textNode.removeChild(textNode.lastChild);
      textNode.removeChild(textNode.lastChild);
      textNode.append(readMore);
    });

}



readMoreLess(text,200);





