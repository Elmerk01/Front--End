import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  
  constructor(private sExperiencia: SExperienciaService, private activatedRooter: ActivatedRoute, 
    private rooter: Router) { }

  ngOnInit(): void {
    const id= this.activatedRooter.snapshot.params['id'];
    this.sExperiencia.details(id).subscribe(
      data =>{
      this.expLab = data;
  },err =>{
    alert("Error al editar Experiencia");
    this.rooter.navigate(['']);
  }
  )
  }
  
  onUpdate():void{
    const id = this.activatedRooter.snapshot.params['id'];
    this.sExperiencia.update(id,this.expLab).subscribe(
      data=> {
      this.rooter.navigate(['']);
    },err =>{
      alert("Error al editar Experiencia");
      this.rooter.navigate(['']);
    }
    )
  }
}
