import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { AuthGuard } from "./guards/auth.guard";
import { AddInstrumentComponent } from "./components/add-instrument/add-instrument.component";
import { InstrumentDetailComponent } from "./components/instrument-detail/instrument-detail.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'instrument-details', component: InstrumentDetailComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
    //     {
    //       path: 'members',
    //       component: MemberListComponent,
    //       resolve: { users: MemberListResolver }
    //     },
    //     {
    //       path: 'members/:id',
    //       component: MemberDetailComponent,
    //       resolve: { user: MemberDetailResolver }
    //     },
    //     {
    //       path: 'member/edit',
    //       component: MemberEditComponent,
    //       resolve: { user: MemberEditResolver },
    //       canDeactivate: [PreventUnsavedChanges]
    //     },
    //     { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver} },
        { path: 'add-instrument', component: AddInstrumentComponent }
    //     { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver} }
      ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];