import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

function libaryMatch(url: UrlSegment[]) {
  // console.log(url);
  if (url[0] != null && url[0].path === 'library') {
    return { consumed: url };
  }

  return null;
}

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { matcher: libaryMatch,  component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
