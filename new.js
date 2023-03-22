// document.write("<h2>hbgnjbnkjbnfdk</h2>")

// const header = document.querySelector(".container");

// const divs = document.querySelectorAll("div");

// const div = document.querySelector("div");
// console.log(div);
// console.log(div.querySelector("p"));

// const t1 = document.querySelector(".text-red");
// const t2 = document.querySelector(".text-blue");

// console.log(t1.classList);

// t1.classList.add("text-blue");
// t1.classList.remove("text-red");



// const div = document.querySelectorAll(".text");
// div.forEach(
//     function (elem) {
//         elem.classList.toggle("text-red");
//     }
// );

// const h1 = document.querySelector("h1");
// h1.addEventListener("click", function(event) {
//     event.target.classList.toggle("text-red");
//     event.target.style.backgroundColor = "blue";
// });









const txts = document.querySelectorAll(".text");
txts.forEach(
    function(elem) {
        elem.addEventListener("click", function(e){
            e.target.classList.toggle("text-blue")
        });
    }
);