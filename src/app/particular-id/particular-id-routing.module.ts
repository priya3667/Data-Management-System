import{NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ParticularIdComponent } from './particular-id.component';

const routes : Routes = [{ path : '', component:ParticularIdComponent}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ParticularIdRoutingModule {}