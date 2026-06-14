import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Estudiantes } from './pages/estudiantes/estudiantes';
import { Historial } from './pages/historial/historial';
import { Cursos } from './pages/cursos/cursos';
import { Catedraticos } from './pages/catedraticos/catedraticos';
import { Pensum } from './pages/pensum/pensum';

export const routes: Routes = [
    { path: '', component: Dashboard },

    { path: 'estudiantes', component: Estudiantes },
    { path: 'historial', component: Historial },
    { path: 'cursos', component: Cursos },
    { path: 'catedraticos', component: Catedraticos },
    { path: 'pensum', component: Pensum }
];