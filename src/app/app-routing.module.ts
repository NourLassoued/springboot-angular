import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginforgetpasswordComponent } from './pages/loginforgetpassword/loginforgetpassword.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostAbonnementComponent } from './components/post-abonnement/post-abonnement.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateAbonnementComponent } from './components/update-abonnement/update-abonnement.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './customer/components/dabhoard/dashboard/dashboard.component';
import { CartComponent } from './customer/components/cart/cart.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MyOrdersComponent } from './customer/components/my-orders/my-orders.component';
import { PostAbonnementFaqComponent } from './customer/components/post-abonnement-faq/post-abonnement-faq.component';
import { WorkoutManagementComponent } from './BackOffice/workout-management/workout-management.component';
import { AddWorkoutComponent } from './BackOffice/workout-management/add-workout/add-workout.component';
import { UpdateWorkoutComponent } from './BackOffice/workout-management/update-workout/update-workout.component';
import { ExercicedayManagementComponent } from './BackOffice/exerciceday-management/exerciceday-management.component';
import { AddExerciseDayComponent } from './BackOffice/exerciceday-management/add-exercise-day/add-exercise-day.component';
import { UpdateExerciseDayComponent } from './BackOffice/exerciceday-management/update-exercise-day/update-exercise-day.component';
import { ExerciseManagementComponent } from './BackOffice/exercise-management/exercise-management.component';
import { AddExerciseComponent } from './BackOffice/exercise-management/add-exercise/add-exercise.component';
import { UpdateExerciseComponent } from './BackOffice/exercise-management/update-exercise/update-exercise.component';
import { WorkoutsComponent } from './FrontOffice/workouts/workouts.component';
import { BodyFrontComponent } from './FrontOffice/body-front/body-front.component';
import { ExercisedaysComponent } from './FrontOffice/exercisedays/exercisedays.component';
import { ExerciseComponent } from './FrontOffice/exercise/exercise.component';
import { MyworkoutsComponent } from './FrontOffice/myworkouts/myworkouts.component';
import { MyexercisesDayComponent } from './FrontOffice/myexercises-day/myexercises-day.component';
import { StartExerciseComponent } from './FrontOffice/start-exercise/start-exercise.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { QuestionComponent } from './MentalComponents/question/question.component';
import { AddQuestionComponent } from './MentalComponents/add-question/add-question.component';
import { AddAnswerComponent } from './MentalComponents/add-answer/add-answer.component';
import { AddQuizComponent } from './MentalComponents/add-quiz/add-quiz.component';
import { AnswerComponent } from './MentalComponents/answer/answer.component';
import { QuizComponent } from './MentalComponents/quiz/quiz.component';
import { UpdateQuestionComponent } from './MentalComponents/update-question/update-question.component';
import { UpdateAnswerComponent } from './MentalComponents/update-answer/update-answer.component';
import { UpdateQuizComponent } from './MentalComponents/update-quiz/update-quiz.component';
import { AddNoteComponent } from './MentalComponents/add-note/add-note.component';
import { UpdateNoteComponent } from './MentalComponents/update-note/update-note.component';
import { NoteComponent } from './MentalComponents/note/note.component';
import { ShowComponent } from './MentalComponents/show/show.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { QuizClientComponent } from './MentalComponents/quiz-client/quiz-client.component';
import { QuizNotifyComponent } from './MentalComponents/quiz-notify/quiz-notify.component';
import { QuizShowComponent } from './MentalComponents/quiz-show/quiz-show.component';
import { AcceuilMentalComponent } from './MentalComponents/acceuil-mental/acceuil-mental.component';
import { FoodComponent } from './Food/food/food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { AddNutritionalGoalComponent } from './add-nutritional-goal/add-nutritional-goal.component';
import { ListNutritionalGoalComponent } from './list-nutritional-goal/list-nutritional-goal.component';
import { EditNutritionalGoalComponent } from './edit-nutritional-goal/edit-nutritional-goal.component';
import { NutritionTrackComponent } from './add-nutrition-tracking/add-nutrition-tracking.component';
import { ListNutritionTrackingComponent } from './list-nutrition-tracking/list-nutrition-tracking.component';
import { EditNutritionTrackingComponent } from './edit-nutrition-tracking/edit-nutrition-tracking.component';
import { ListrackComponent } from './listrack/listrack.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { EventManagementComponent } from './BackOffice/event-management/event-management.component';
import { AddEventComponent } from './BackOffice/event-management/add-event/add-event.component';
import { UpdateEventComponent } from './BackOffice/event-management/update-event/update-event.component';
import { EventgroupeManagementComponent } from './FrontOffice/eventgroupe-management/eventgroupe-management.component';
import { MyparticipationManagementComponent } from './FrontOffice/myparticipation-management/myparticipation-management.component';

const routes: Routes = [
  {
    path: "Admin",
    component: AllTemplateBackComponent,
    children: [
      {
        path: "ManageWorkout",
        component: WorkoutManagementComponent
      },
      {
        path: "AddWorkout",
        component: AddWorkoutComponent
      },
      {
        path: "UpdateWorkout/:id",
        component: UpdateWorkoutComponent
      },
      {
        path: "ManageExerciceDay",
        component: ExercicedayManagementComponent
      },
      {
        path: "AddExerciseDay",
        component: AddExerciseDayComponent
      },
      {
        path: "UpdateExerciseDay/:id",
        component: UpdateExerciseDayComponent
      },
      {
        path: "ManageExercise",
        component: ExerciseManagementComponent
      },
      {
        path: "AddExercise",
        component: AddExerciseComponent
      },
      {
        path: "UpdateExercise/:id",
        component: UpdateExerciseComponent
      },
      {
        path: "ManageEvent",
        component: EventManagementComponent
      },
      {
        path: "AddEvent",
        component: AddEventComponent
      },
      {
        path: "UpdateEvent/:id",
        component: UpdateEventComponent
      },
      
      
    ]
  },
  
 
  { path: '', component: AllTemplateFrontComponent }, 
  
  { path: 'Admin', component: AllTemplateBackComponent},
  { path: 'listQuestion', component: QuestionComponent},
  { path: 'listAnswer', component: AnswerComponent},
  { path: 'listQuiz', component: QuizComponent},
  { path: 'listNote', component: NoteComponent},
  { path: 'addQuestion', component: AddQuestionComponent},
  { path: 'addAnswer', component: AddAnswerComponent},
  { path: 'addQuiz', component: AddQuizComponent},
  { path: 'addNote', component: AddNoteComponent},
  { path: 'updateQuestion/:id', component: UpdateQuestionComponent},
  { path: 'updateAnswer/:id', component: UpdateAnswerComponent},
  { path: 'updateQuiz/:id', component: UpdateQuizComponent},
  { path: 'updateNote/:id', component: UpdateNoteComponent},
  {path: 'quiz-details/:id', component:ShowComponent},
  {path: 'quiz-client', component:QuizClientComponent},
  {path: 'quiz-notify', component:QuizNotifyComponent},
  {path: 'show', component:ShowComponent},
  {path: 'show-quiz', component:QuizShowComponent},
  {path: 'acc', component:AcceuilMentalComponent},
 
  { path: 'admin', component: AllTemplateBackComponent },
  { path: 'foods', component: FoodComponent } ,// Ajoutez cette ligne pour lier FoodComponent à la route 'foods'
  {path:'addFood',component:AddFoodComponent},
  { path: 'updateFood/:foodId', component: UpdateFoodComponent },
  {path:'addnutritiongoal',component:AddNutritionalGoalComponent},
  {path:'showNutgoal',component:ListNutritionalGoalComponent},

  { path: 'updateNutritionalGoal/:id', component:EditNutritionalGoalComponent},
  { path: 'addTracking/:userId', component: NutritionTrackComponent },
  {path:'showtrack', component:ListNutritionTrackingComponent},
  { path: 'updateNutritiontrack/:id', component: EditNutritionTrackingComponent },
  {path:'listtrack/:userId',component:ListrackComponent},
  {path:'nutrition',component:NutritionComponent},
  
  {
    path: "workouts",
    component:WorkoutsComponent
  },
  {
    path: "myworkouts",
    component:MyworkoutsComponent
  },
  {
    path:"home",
    component:BodyFrontComponent
  }
  ,
  {
    path:"exercise-days/:id",
    component:ExercisedaysComponent
  },
  {
    path:"my-exercise-days/:id",
    component:MyexercisesDayComponent
  }
  ,
  {
    path:"exercises/:id",
    component:ExerciseComponent
  },
  {
    path:"start-exercise/:id",
    component:StartExerciseComponent
  },
  {
    path: "event",
    component:EventgroupeManagementComponent
  },
  {
    path: "myparticipation",
    component:MyparticipationManagementComponent
  },
 
  {
    path:'signup',
    component : SignupComponent,
    pathMatch: 'full',
  },
  {
    path:'login',
    component : LoginComponent,
    
  },
  { path: 'forgetpassword', component: LoginforgetpasswordComponent},
  { path: 'verification', component: VerificationComponent},
  {
    path:"admin",
    component : AllTemplateBackComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'category',
        component:PostCategoryComponent
      },
      {
        path:'abonnement',
        component:PostAbonnementComponent
      },
      {
        path:'abonnement/:abonnementId',
        component:UpdateAbonnementComponent
      },
      {
        path:'dashboard',
        component:NavbarComponent
      },
      {
        path:'post-coupon',
        component:PostCouponComponent
      },
      {
        path:'coupons',
        component:CouponsComponent
      },

      {
        path:'orders',
        component:OrdersComponent
      },
      
      {
        path:'faq/:abonnementId',
        component:PostAbonnementFaqComponent
      },
    
    
      

    ]
  },
  /*{
    path:'user-dashboard',
    component : UserDashboardComponent,
    pathMatch:'full',
    canActivate: [NormalGuard],
  },*/
  {
    path:'customer',
    component : DashboardComponent,
    canActivate:[NormalGuard],
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/cart',
    canActivate:[NormalGuard],
    component : CartComponent,
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },
  {
    path:'customer/my_orders',
    component : MyOrdersComponent,
    canActivate:[NormalGuard],
    
     /* children:[
      {
        path:'cart',
        component:CartComponent
      },
    ] */
  
  },

  {path:"",
  component: AllTemplateFrontComponent
  }
];












 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

