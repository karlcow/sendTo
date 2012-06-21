// This code is under Apache 2.0 License
// Check the README.mdown

window.addEventListener('load', function() {

    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) === 0;
    };

}, false);

// I will reuse part of this code for the extension. Just here as a reminder
//     var q = '';
// if (document.selection) {
//     q = document.selection.createRange().text;
// } else if (window.getSelection()) {
//     q = window.getSelection().toString();
// }
// function wraptext(text, textwidth) {
//     c = text.split('');
//     var textfmt = '';
//     var linelength = 0;
//     var word = '';
//     for (i = 0; i < c.length; i++) {
//         if (c[i] == ' ' || c[i] == '\n') {
//             if (linelength > textwidth) {
//                 textfmt = textfmt + '\n' + word + c[i];
//                 linelength = c[i] == ' ' ? word.length + 1 : 0;
//             } else {
//                 textfmt = textfmt + word + c[i];
//                 linelength = c[i] == ' ' ? linelength + 1 : 0;
//             }
//             word = '';
//         } else {
//             word = word + c[i];
//             linelength++;
//         }
//     }
//     return textfmt;
// }
// var textfmt = wraptext(q, 50);
// location.href = 'mailto:?SUBJECT=' + encodeURIComponent(document.title) + '&BODY=' + escape('\n\nOn ') + new Date(document.lastModified).toUTCString() + escape('\nIn ') + encodeURIComponent(document.title) + escape('\nAt ') + encodeURIComponent(location.href) + escape('\n\n') + encodeURIComponent(textfmt) + escape('\n');
