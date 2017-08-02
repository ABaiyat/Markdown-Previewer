import { Component, OnInit } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})


export class ViewerComponent implements OnInit {


// Inialitized String
inputHTML: string =
"# This is a Heading\n" +
"## This is a Subheading\n" +
"### Smaller Subheading\n" +
"*Italics* is applied with single asterisks or underscore(*/_) \n\n" +
"**Bolded** text is applied with double asterisks or underscore(**/__)  \n\n" +
"~~Strikethrough~~ is applied with double tilde(~~)\n\n" +
"Ordered List:\n" + "1. Item 1\n" + "2. Item 2\n" +
"3. Item 3\n" + " 3. Item 3a\n\n" +
"Unorderd List:\n" + "* First Item\n" + "* Second Item\n" + "* Third Item\n" +
" * First SubItem\n * Second SubItem\n\n" +
"[GitHub.com](http://github.com)";
outputHTML: string = "";

  constructor() {


  }

  ngOnInit() {
    this.reformatText();
  }

  // Calls marked to use Github Flavored Markdown on input string
  reformatText() {
    var md = marked.setOptions({});
    this.outputHTML = marked(this.inputHTML);
    console.log(this.outputHTML);
  }
}
