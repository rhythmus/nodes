"use strict";

var Text = require("../text/text_node");

var Paragraph = function(node, document) {
  Text.call(this, node, document);
};

Paragraph.type = {
  "id": "paragraph",
  "parent": "content",
  "properties": {
    "source_id": "Paragraph source id",
    "content": "string"
  }
};


// This is used for the auto-generated docs
// -----------------
//

Paragraph.description = {
  "name": "Paragraph",
  "remarks": [
    "A paragraph consists of one or more sentences and is used to organize longer prose.",
  ],
  "properties": {
    "content": "Content",
  }
};


// Example Paragraph
// -----------------
//

Paragraph.example = {
  "type": "paragraph",
  "id": "paragraph_1",
  "content": "Lorem ipsum dolor sit amet, adipiscing elit.",
};


Paragraph.Prototype = function() {

};

Paragraph.Prototype.prototype = Text.prototype;
Paragraph.prototype = new Paragraph.Prototype();
Paragraph.prototype.constructor = Paragraph;

module.exports = Paragraph;
