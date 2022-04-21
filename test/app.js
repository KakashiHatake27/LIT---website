// function copyText(htmlElement) {
//     if (!htmlElement) {
//         return;
//     }

//     let elementText = htmlElement.innerText;

//     let inputElement = document.createElement('input');
//     inputElement.setAttribute('value', elementText);
//     document.body.appendChild(inputElement);
//     inputElement.select();
//     document.execCommand('copy', false, null);
//     inputElement.parentNode.removeChild(inputElement);

// }

// document.querySelector('#copy-text-btn').onclick = function() {
//     copyText(document.querySelector('#text'));
//     // alert('Text has been copied');
// }



document.getElementById('copy-text-btn').onclick = function() {
    navigator.clipboard.writeText(document.getElementById('text').innerText).then(function() {
        console.log('text has been copied')
    })
}

// function doVerySimplePopup(text, callback) {
//     var shim, div, parent = document.body;

//     shim = document.createElement('iframe');
//     shim.className = 'shim';
//     parent.appendChild(shim);

//     div = document.createElement('div');
//     div.className = 'overlay';
//     div.innerHTML = text;
//     parent.appendChild(div);
//     div.onclick = function() {
//         parent.removeChild(div);
//         parent.removeChild(shim);
//         if (typeof callback === "function") {
//             try { callback(); } catch (e) {}
//         }
//     };
// }