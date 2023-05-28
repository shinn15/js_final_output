/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's


const NFTs = []


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nftname, eyecolors, shirttype, nftbling) {
   const nft_value ={
      "nftname": nftname,
      "eyecolors": eyecolors,
      "shirttype": shirttype,
      "nftbling": nftbling
   }

   NFTs.push(nft_value);
   console.log("\nName of NFT Minted: " + nftname);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i<NFTs.length; i++){
      console.log("\nNFT ID: \t\t"+(i+1));
      console.log("NFT Name: \t\t"+NFTs[i].nftname);
      console.log("NFT Eyecolor: \t\t"+NFTs[i].eyecolors);
      console.log("NFT Shirt Type: \t"+NFTs[i].shirttype);
      console.log("NFT Bling: \t\t"+NFTs[i].nftbling);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nNFT Total: "+NFTs.length+" NFTs");

}

//to 'prompt' function to work
const prompt = require('prompt-sync')();



//a function that let the user input
function user_input(){

   const name=prompt("Your NFT name: ");
   const eye_color=prompt("Your NFT eye color: ");
   const shirt_type=prompt("your NFT shirt type: ");
   const blings=prompt("Your NFT bling: ");


   if(name,eye_color,shirt_type,blings != null){
      mintNFT((name), (eye_color),(shirt_type),(blings));
      listNFTs();
      getTotalSupply();
      }
      else{
         console.log("error");
      }

}

// call your functions below this line


user_input();

/*
mintNFT("shinn","black","hoodie","gold chain");
listNFTs();
getTotalSupply();
*/
