var btn = document.getElementById('run')
btn.addEventListener('click',inserir)

function inserir(){
    // Ocultar pagina 1 e exibir pagina 2
/*     let p1 = document.getElementById('page1')
    let p2 = document.getElementById('page2')

    p1.style.display = 'none'
    p2.style.display = 'flex'
    
    // Inserir o codigo em HTML
    let codeHtml = document.getElementById('codeHtml').value
    p2.innerHTML = codeHtml

    // Inserir o codigo em JS
    let codeJs = document.getElementById('codeJs').value
    document.getElementById('jsUser').innerHTML = codeJs */

    let codeJs = document.getElementById('codeJs').value

    var tagScript = document.createElement('script')
    tagScript.setAttribute('type','text/javascript')

    var textScript = document.createTextNode(codeJs)

    tagScript.appendChild(textScript)
    document.body.appendChild(tagScript)
}