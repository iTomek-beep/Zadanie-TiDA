const srcin = document.getElementById("srci"); 
const altin = document.getElementById("alti");
const idin = document.getElementById("idi");

const phot = document.getElementById("zdjecia");

const createbtnid = document.getElementById("createbtn");
const readbtnid = document.getElementById("readbtn");
const updatebtnid = document.getElementById("updatebtn");
const deletebtnid = document.getElementById("deletebtn");

createbtnid.addEventListener("click", () => { createImage(idin.value, srcin.value, altin.value) });
readbtnid.addEventListener("click", () => { readImage(idin.value) });
updatebtnid.addEventListener("click", () => { updateImage(idin.value, srcin.value, altin.value) });
deletebtnid.addEventListener("click", () => { deleteImage(idin.value) });

function createImage(id, src, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.id = id;
    phot.appendChild(img);
}

function readImage(id) {
    let img = document.getElementById(id);
    console.log(img)
    console.log(id);
}

function updateImage(id, src, alt) {
    console.log(id, src, alt);
    let img = document.getElementById(id);
    img.src = src;
    img.alt = alt;
}

function deleteImage(id) {
    let img = document.getElementById(id);
    img.parentNode.removeChild(img);
}
export {createImage};
export {readImage};
export {updateImage};
export {deleteImage};