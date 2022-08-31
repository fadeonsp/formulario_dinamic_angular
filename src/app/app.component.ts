import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pergunta } from './pergunta.model';
import { PerguntaService } from './pergunta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;

  get formPerguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private perguntaService: PerguntaService
  ) {
      this.form = this.fb.group({
      nome: [null, [Validators.required]],
      perguntas: this.fb.array([
      ])
    });

    this.perguntaService
      .consultaPerguntas()
      .subscribe((perguntas) => {
        console.log(perguntas);

        perguntas.forEach((pergunta) => {
          const formGroupPergunta = 
          this.criarFormGroupPergunta(pergunta);
          this.formPerguntas.push(formGroupPergunta);
        });
      });
  }

  postarDados() {
    const dados = this.form.value;
    console.log(dados);
  }

  criarFormGroupPergunta(pergunta: Pergunta): FormGroup {
    return this.fb.group({
      _id: [pergunta._id, [Validators.required]],
      resposta: [null, [Validators.required]],
    });
  }

}