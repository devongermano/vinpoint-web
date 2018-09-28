import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {element} from 'protractor';
import {forEach} from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-onboarding-magic-link',
  templateUrl: './onboarding-magic-link.component.html',
  styleUrls: ['./onboarding-magic-link.component.scss']
})


export class OnboardingMagicLinkComponent implements OnInit, AfterViewInit {

  @ViewChild('i1') input1: ElementRef;
  @ViewChild('i2') input2: ElementRef;
  @ViewChild('i3') input3: ElementRef;
  @ViewChild('i4') input4: ElementRef;
  @ViewChild('i5') input5: ElementRef;
  @ViewChild('i6') input6: ElementRef;

  nativeElements: Array<ElementRef>;
  magicInputs: Array<MagicInput> = [];

  constructor() {

  }

  ngOnInit() {
    this.nativeElements = [this.input1, this.input2, this.input3, this.input4, this.input5, this.input6];
    this.nativeElements.forEach(i => {
      this.magicInputs.push(new MagicInput(i.nativeElement));
    });
  }

  ngAfterViewInit() {

  }

  setNextMagicInput(currentMagicInputIndex: number) {

    console.log('Index! ' + currentMagicInputIndex);

    this.magicInputs[currentMagicInputIndex].scoped = true;
    let magicInputIndices = this.magicInputs.length;
    let nextMagicInput = currentMagicInputIndex + 1;
    if (nextMagicInput !== magicInputIndices) {
      this.magicInputs[nextMagicInput].input.focus();
    } else {
      this.magicInputs[0].input.focus();
    }
  }
}

class MagicInput {

  input: any;
  scoped = false;

  constructor(input: any) {
    this.input = input;
  }

}

