#include <emscripten.h>
#include <stdlib.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
int encode(char text[], int size) {
  // recebe um texto e salva em um arquivo o valor ascii de cada caractere separado por '-'
  FILE* f = fopen("encode.txt", "w");
  for (int i = 0; i < size; i++) {
    fprintf(f, "%d", (int)text[i]);
    if (i < size-1) {
      fputs("-", f);
    }
  }
  fclose(f);
  return 1;
}