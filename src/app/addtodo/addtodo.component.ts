import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipListboxChange, MatChipOption} from "@angular/material/chips";
import {TodoService} from "../todo.service";


export interface Todo{
  id:string,
  name1:string
  name2:string
}
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit{
  todoForm: FormGroup;
  options = ['Importance', 'Notice', 'Critical', 'Normal'];
  selectedOptions: { [key: string]: boolean } = {};
  menuData: any[] = [];
  isChecked: boolean = false;
  constructor(private dialogService: MatDialogRef<AddtodoComponent>,@Inject(MAT_DIALOG_DATA) public data: Todo, private formBuilder: FormBuilder,private todoService:TodoService) {}


  ngOnInit() {
    console.log('data',this.data.id)
    this.initForm();
    this.fetchMenuData()
  }

  initForm() {
    this.todoForm = this.formBuilder.group({
      name1: [this.data.name1, Validators.required],
      name2: [this.data.name2, Validators.required],
    });
  }
  closeDialog() {
    this.dialogService.close()
  }

  fetchMenuData(): void {
    this.todoService.getCollectionData('pak').subscribe(
      (data) => {
        this.menuData = data;
        console.log('here data', this.menuData)
      },
      (error) => {
        console.error('Error fetching menu data:', error);
      }
    );
  }

  onPriorityClick(selectedOption: string): void {
    // Reset all options to false
    this.options.forEach(option => this.selectedOptions[option] = false);

    // Set the clicked option to true
    this.selectedOptions[selectedOption] = true;
  }

    onCheckboxChange() {
      // Add your logic here for when the checkbox state changes
      // You can use this.isChecked if you need to check the current state
      console.log('Checkbox state changed');
    }


}
