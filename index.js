const btn = document.getElementById("jefferson");

function download(str, name) {
  // cria elemento de link (a)
  const link = document.createElement('a');
  // deixa ele invisível
  link.style.display = 'none';
  // adiciona os atributos para baixar
  link.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(str));
  link.setAttribute('download', name);
  // simula o click, baixando o arquivo
  link.click();
}

btn.onclick = (e) => {
  // pega o valor do textarea
  const textarea = document.getElementById("test");
  const txt = textarea.value;
  // prepara a função encode do arquivo em C
  const encode = Module.cwrap('encode', 'number', ['string', 'number']);
  // chama a função
  encode(txt, txt.length);
  // lê o arquivo do file system virtual
  const f = Module.FS.readFile('encode.txt', {encoding: 'utf8'});
  // baixa com o nome encode.txt
  download(f, 'encode.txt');
};