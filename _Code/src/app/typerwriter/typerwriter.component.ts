import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typerwriter',
  templateUrl: './typerwriter.component.html',
  styleUrls: ['./typerwriter.component.css']
})
export class TyperwriterComponent implements OnInit {
  private display = '';
  private pauseCount = 0;
  private wordIndex = 0;

  @Input()
  speed = 200;

  @Input()
  pause = 5;

  @Input()
  words: string[] = ['DID YOU FORGET TO ADD YOUR WORDS TO TYPERWRITER'];

  constructor() {
  }

  ngOnInit() {
    setInterval(this.typer, this.speed, this);
  }

  // Methods
  typer(context): void {
    // Variables
    const length = context.words[context.wordIndex].length;
    const currentLength = context.display.length;

    // Emulate typing
    if (context.pauseCount === context.pause && currentLength !== 0) {
      // Emulate backspacing
      context.display = context.display.slice(0, -1);
    } else if (currentLength < length) {

      // Reset pause count if we deleted word
      if ( context.pauseCount === context.pause) {
        context.pauseCount = 0;

        // Move to next word
        if ( context.wordIndex === context.words.length - 1) {
          context.wordIndex = 0;
        } else {
          context.wordIndex++;
        }
      }

      // Type
      context.display += context.words[context.wordIndex][currentLength];

    } else if ( context.pauseCount < context.pause ) {
      // We are pausing after finishing typing
      context.pauseCount++;

    }
  }
}
