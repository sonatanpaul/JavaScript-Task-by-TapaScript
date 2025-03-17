// Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.


{
  // name, friendName, FavoriteColor TDZ zone started
  //
  //   console.log(name) //reference Error
  //
  //
  let name = "Sonatan Paul"; // name TDZ zone end
  //   console.log(name) Sonatan Paul   //   no error
  //
  //
  //   console.log(frinedName) referenceError
  //
  let frinedName = "Anik"; // friendName TDZ zone end
  //   console.log(frinedName) // Anik // No Error
  //
  //
  //
  //   console.log(FavoriteColor) // referenceError
  //
  let FavoriteColor = "Black"; // FavoriteColor TDZ zone end
  //   console.log(FavoriteColor); // Black // No Error
}
