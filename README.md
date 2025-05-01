Demonstração básica da integração de web assembly com C. O programa recebe um texto como entrada e gera um arquivo txt com o valor ASCII de cada caractere separado por '-'

# Rodando
## 1 - Baixar o compilador de web assembly
Seguindo as instruções desse link, baixe o emscripten para compilar o código em C para web assembly e gerar o glue code para JavaScript

https://emscripten.org/docs/getting_started/downloads.html

## 2 - Compilar o código
Para compilar o código basta rodar o seguinte comando

```
emcc -s WASM=1 -s EXPORTED_RUNTIME_METHODS=["cwrap","FS"] main.c
```

## 3 - Rodar servidor
Por motivos de implementação, o código só pode ser utilizado rodando em um servidor HTTP, logo, fiz um servidor rápido com python. Para rodar coloque o seguinte comando no seu terminal:
```
python server.py
```
Depois é só acessar `http://localhost:8080`
