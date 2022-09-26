var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");



const words = lines;

if (words[0] === "vertebrado") {
  if (words[1] === "ave") {
    if (words[2] === "carnivoro") {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (words[2] === "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
}

if (words[0] === "invertebrado") {
  if (words[1] === "inseto") {
    if (words[2] === "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (words[2] === "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}