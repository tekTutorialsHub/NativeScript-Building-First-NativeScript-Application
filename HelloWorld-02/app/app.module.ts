import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AppComponent } from "~/app.component";
import { HomeComponent }  from "~/home.component";
 
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
];

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,NativeScriptRouterModule,NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent, HomeComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
