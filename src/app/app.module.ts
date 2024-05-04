import { NgModule } from '@angular/core';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { BodyFrontComponent } from './FrontOffice/body-front/body-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { NavBarFrontComponent } from './FrontOffice/nav-bar-front/nav-bar-front.component';

import { WorkoutManagementComponent } from './BackOffice/workout-management/workout-management.component';


import { BrowserModule } from '@angular/platform-browser';

import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddWorkoutComponent } from './BackOffice/workout-management/add-workout/add-workout.component';
import { UpdateWorkoutComponent } from './BackOffice/workout-management/update-workout/update-workout.component';
import { ExercicedayManagementComponent } from './BackOffice/exerciceday-management/exerciceday-management.component';
import { AddExerciseDayComponent } from './BackOffice/exerciceday-management/add-exercise-day/add-exercise-day.component';

import { UpdateExerciseDayComponent } from './BackOffice/exerciceday-management/update-exercise-day/update-exercise-day.component';
import { ExerciseManagementComponent } from './BackOffice/exercise-management/exercise-management.component';
import { AddExerciseComponent } from './BackOffice/exercise-management/add-exercise/add-exercise.component';
import { UpdateExerciseComponent } from './BackOffice/exercise-management/update-exercise/update-exercise.component';
import { WorkoutsComponent } from './FrontOffice/workouts/workouts.component';
import { ExercisedaysComponent } from './FrontOffice/exercisedays/exercisedays.component';
import { ExerciseComponent } from './FrontOffice/exercise/exercise.component';
import { MyworkoutsComponent } from './FrontOffice/myworkouts/myworkouts.component';
import { MyexercisesDayComponent } from './FrontOffice/myexercises-day/myexercises-day.component';
import { StartExerciseComponent } from './FrontOffice/start-exercise/start-exercise.component';

import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';

import { QuestionComponent } from './MentalComponents/question/question.component';
import { AnswerComponent } from './MentalComponents/answer/answer.component';
import { QuizComponent } from './MentalComponents/quiz/quiz.component';

import { AddQuestionComponent } from './MentalComponents/add-question/add-question.component';
import { AddAnswerComponent } from './MentalComponents/add-answer/add-answer.component';
import { AddQuizComponent } from './MentalComponents/add-quiz/add-quiz.component';
import { ROUTES, RouterModule } from '@angular/router';
import { UpdateAnswerComponent } from './MentalComponents/update-answer/update-answer.component';
import { UpdateQuestionComponent } from './MentalComponents/update-question/update-question.component';
import { UpdateQuizComponent } from './MentalComponents/update-quiz/update-quiz.component';
import { NoteComponent } from './MentalComponents/note/note.component';
import { AddNoteComponent } from './MentalComponents/add-note/add-note.component';
import { UpdateNoteComponent } from './MentalComponents/update-note/update-note.component';
import { ShowComponent } from './MentalComponents/show/show.component';


import { QuizClientComponent } from './MentalComponents/quiz-client/quiz-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QuizNotifyComponent } from './MentalComponents/quiz-notify/quiz-notify.component';
import { ToastrModule } from 'ngx-toastr';
import { RatingComponent } from './MentalComponents/rating/rating.component';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { QuizShowComponent } from './MentalComponents/quiz-show/quiz-show.component';
import { AcceuilMentalComponent } from './MentalComponents/acceuil-mental/acceuil-mental.component';


import { FoodComponent } from "./Food/food/food.component";
import { AddFoodComponent } from "./add-food/add-food.component";
import { UpdateFoodComponent } from "./update-food/update-food.component";
import { AddNutritionalGoalComponent } from "./add-nutritional-goal/add-nutritional-goal.component";
import { ListNutritionalGoalComponent } from "./list-nutritional-goal/list-nutritional-goal.component";
import { EditNutritionalGoalComponent } from "./edit-nutritional-goal/edit-nutritional-goal.component";
import { EditNutritionTrackingComponent } from "./edit-nutrition-tracking/edit-nutrition-tracking.component";
import { ListNutritionTrackingComponent } from "./list-nutrition-tracking/list-nutrition-tracking.component";
import { NutritionTrackComponent } from "./add-nutrition-tracking/add-nutrition-tracking.component";
import { DailyCalorieServiceService } from "./services/daily-calorie-service.service";

import { NotificationService } from "./services/notification.service";

import { ListrackComponent } from './listrack/listrack.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { EventManagementComponent } from './BackOffice/event-management/event-management.component';
import { AddEventComponent } from './BackOffice/event-management/add-event/add-event.component';
import { UpdateEventComponent } from './BackOffice/event-management/update-event/update-event.component';
import { MyparticipationManagementComponent } from './FrontOffice/myparticipation-management/myparticipation-management.component';
import { ParticipationManagementComponent } from './FrontOffice/participation-management/participation-management.component';
import { EventgroupeManagementComponent } from './FrontOffice/eventgroupe-management/eventgroupe-management.component';
import { ParticipationFormDialogComponent } from './FrontOffice/participation-form-dialog/participation-form-dialog.component';
import { UpdateParticipationDialogComponentComponent } from './FrontOffice/update-participation-dialog-component/update-participation-dialog-component.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MailSenderServiceService } from './mail-sender-service.service';










import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatCardModule } from '@angular/material/card';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ErrorInterceptor } from './services/error.interceptor';
import { LoginforgetpasswordComponent } from './pages/loginforgetpassword/loginforgetpassword.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostAbonnementComponent } from './components/post-abonnement/post-abonnement.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './customer/components/dabhoard/dashboard/dashboard.component';
import { CartComponent } from './customer/components/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { PlaceOrderComponent } from './customer/components/place-order/place-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MatMenuModule } from '@angular/material/menu';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { PostAbonnementFaqComponent } from './customer/components/post-abonnement-faq/post-abonnement-faq.component'; // Importez MatMenuModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    LoginforgetpasswordComponent,
    AppComponent,
    AllTemplateBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    FooterBackComponent,
    AllTemplateFrontComponent,
    BodyFrontComponent,
    FooterFrontComponent,
    NavBarFrontComponent,
    WorkoutManagementComponent,
    AddWorkoutComponent,
    UpdateWorkoutComponent,
    ExercicedayManagementComponent,
    AddExerciseDayComponent,
    UpdateExerciseDayComponent,
    ExerciseManagementComponent,
    AddExerciseComponent,
    UpdateExerciseComponent,
    WorkoutsComponent,
    ExercisedaysComponent,
    ExerciseComponent,
    MyworkoutsComponent,
    MyexercisesDayComponent,
    StartExerciseComponent,
  
   
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    QuestionComponent,
    AnswerComponent,
    QuizComponent,
    AddQuestionComponent,
    AddAnswerComponent,
    AddQuizComponent,
    UpdateAnswerComponent,
    UpdateQuestionComponent,
    UpdateQuizComponent,
    NoteComponent,
    AddNoteComponent,
    UpdateNoteComponent,
    ShowComponent,
    AllTemplateFrontComponent,
    BodyFrontComponent,
    NavBarFrontComponent,
    FooterFrontComponent,
    QuizClientComponent,
    QuizNotifyComponent,
    RatingComponent,
    QuizShowComponent,
    AcceuilMentalComponent,
  
   
    

    

    AllTemplateBackComponent,
    SidebarBackComponent,
    NavbarBackComponent,
    FooterBackComponent,
   
    FoodComponent,
    AddFoodComponent,
    UpdateFoodComponent,
    AddNutritionalGoalComponent,
    ListNutritionalGoalComponent,
    EditNutritionalGoalComponent,
    EditNutritionTrackingComponent,
    ListNutritionTrackingComponent,
    NutritionTrackComponent,
    ListrackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
  
    NavBarFrontComponent,
    BodyFrontComponent,
    NutritionComponent,
    EventManagementComponent,
    AddEventComponent,
    UpdateEventComponent,
    MyparticipationManagementComponent,
    ParticipationManagementComponent,
    EventgroupeManagementComponent,
    ParticipationFormDialogComponent,
    UpdateParticipationDialogComponentComponent,
    MapDialogComponent,
     

  
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    UserDashboardComponent,
    ProfileComponent,
    VerificationComponent,
    PostCategoryComponent,
    PostAbonnementComponent,
    UpdateAbonnementComponent,
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PostCouponComponent,
    CouponsComponent,
    PlaceOrderComponent,
    OrdersComponent,
    MyOrdersComponent,
    PostAbonnementFaqComponent

    
    
  
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    LeafletModule,
    ReactiveFormsModule,MatDialogModule,MatToolbarModule,
   MatInputModule,MatNativeDateModule,
    MatFormFieldModule,NoopAnimationsModule,
    FormsModule,MatIconModule,MatDatepickerModule,
    AppRoutingModule,MatDividerModule,MatMenuModule,
    HttpClientModule, MatSnackBarModule,MatSelectModule,
    MatCardModule,MatTableModule
  
   
   
  ],
 
 
  providers: [
   
    MailSenderServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NotificationService ,// Assurez-vous que MailSenderServiceService est également dans les fournisseurs si ce n'est pas déjà le cas
  ],
  bootstrap: [AppComponent],
})

   
   
    
    
    
 



export class AppModule { }
