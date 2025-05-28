import { Routes } from '@angular/router';
import { AgregarComponent } from './components/add/agregar.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { Head } from 'rxjs';
import { ProductComponent } from './pages/product/product.component';
import { EditComponent } from './components/edit/edit.component';



export const routes: Routes = [
    {
        path: '', component: ProductTableComponent
    },
    {
        path: 'add' , component: AgregarComponent
    },
    {
        path: 'edit/:id' , component: EditComponent
    }
];
