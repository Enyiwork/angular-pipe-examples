import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(myText: string): string {
    // if myText is emty return empty
    if (!myText) {
      return "";
    }

    return myText
    .replace(/taco/ig,       "🌮")
    .replace(/burritos?/ig,  "🌯")
    .replace(/poop?s?/ig,    "💩")
    .replace(/cats?/ig,      "🐈")
    .replace(/dog(go)?s?/ig, "🐕")
    .replace(/dolphins?/ig,  "🐬")

    //(i)gnore case (make it work with "taco" or "TaCo")
    //(g)lobal match (find and replace ALL the "taco"s)

  }


}

// {{ variable | emojify }}
