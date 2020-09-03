import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';


const routes: Routes = [
  { path: '', component:AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experiences', component: ExperiencesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
