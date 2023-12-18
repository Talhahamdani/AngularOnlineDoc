import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddtodoComponent, Todo} from "../addtodo/addtodo.component";
import {TodoService} from "../todo.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DeletedialogComponent} from "../deletedialog/deletedialog.component";

@Component({
  selector: 'app-mytimeline',
  templateUrl: './mytimeline.component.html',
  styleUrls: ['./mytimeline.component.css']
})
export class MytimelineComponent implements OnInit{
  longText = "";
  todoList:Todo[];
  menuData: any[] = [];
  notificationIcon = 'notifications'; //my start icone
  // notificationTooltip = ' Thread Notifications Off';
  showNotification: boolean = true;
  notificationTooltip: string = 'Notification On';
  constructor(private dialogService: MatDialog,private todoService:TodoService,private snackBar: MatSnackBar) {}

  onAdd() {
    const dialogRef=this.dialogService.open(AddtodoComponent,{
      width:"800px",
      height:"480px",
      data:{id:'',name1:'',name2:''}
    })
    dialogRef.afterClosed().subscribe(res =>{
     if(res){
       this.todoService.createTodo(res).then((todo)=>console.log(todo));

     }
    });
  }
  ngOnInit() {
    this.todoService.fetchTodo().subscribe(todos => {
      this.todoList = todos.map(todoItem => {
        const data = todoItem.payload.doc.data() as Todo
        const id = todoItem.payload.doc.id
        return {id , ...data}
      })
    })
    this.fetchMenuData();
  }
  fetchMenuData(): void {
    this.todoService.getCollectionData('pak').subscribe(
      (data) => {
        this.menuData = data;
        console.log('here data',this.menuData)
      },
      (error) => {
        console.error('Error fetching menu data:', error);
      }
    );
  }

  onEdit(item: Todo) {
    const dialogRef = this.dialogService.open(AddtodoComponent, {
      width: "800px",
      height: "480px",
      data: { ...item },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        // Make sure to include the original id
        const updatedTodo = { ...res, id: item.id };
        this.todoService.updateTodo(updatedTodo).then((todo) => console.log(todo));
        this.showSnackbar('Thread updated successfully');
      }
    });
  }

  onDelete(item:Todo){

    const dialogRef = this.dialogService.open(DeletedialogComponent, {
      height: "280px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        // User clicked "Yes" in the confirmation dialog
        this.todoService.deleteTodo(item);
        this.showSnackbar('Thread deleted successfully');
      }
    });
  }
  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['customsnackbar'],
    });
  }
  toggleNotification() {
    if (this.notificationIcon === 'notifications') {
      this.notificationIcon = 'cancel';
      this.notificationTooltip = 'Notifications Off';
      this.showSnackBar('Your notification data updated');
      // this.showNotification = !this.showNotification;
    } else {
      this.notificationIcon = 'notifications';
      this.notificationTooltip = 'Notifications On';
      this.showSnackBar('Your notification data updated');

    }
    this.showNotification = !this.showNotification;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
