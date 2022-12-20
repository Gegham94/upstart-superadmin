import { CourseModule } from '../course/course.module';
import { UserModule } from '../user/user.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../app.module";
import { TranslateModule } from '@ngx-translate/core';
import { DeleteDialogComponent } from "./delete-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    TranslateModule,
    CourseModule,
    UserModule,
  ],
  exports: [ DeleteDialogComponent ],
  declarations: [DeleteDialogComponent],
})
export class DeleteDialogModule {}
