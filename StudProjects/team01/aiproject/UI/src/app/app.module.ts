import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MainPageModule } from "./components/main-page/main-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainPageModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
