import { AlunoModel } from './aluno.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})


export class AlunosComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();
  alunos:  Array<any> = new Array();
  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }

 
  atualizar(id: number){
    this.alunosService.atualizarAluno(id,this.aluno).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  }


  remover(id:number){
    this.alunosService.removerAluno(id).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  }

  Cadastrar(){
    console.log(this.aluno);
    this.alunosService.CadastrarAluno(this.aluno).subscribe(aluno =>{
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },
      err => {console.log('Erro ao cadastrar o aluno', err)})
  } 




  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(teste =>{
      this.alunos = teste;
    }, err => {
      console.log('Erro ao Listar os alunos', err);
    })                   
  }

}
