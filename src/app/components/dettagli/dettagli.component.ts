import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { IFunctionDescr, IFunctions, IGroup, IUsers } from 'src/app/interfaces/group-list';
import { ItemslistService } from 'src/app/services/itemslist.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent {
  @Input() groupName?: string;
  @Input() minValue?: string;
  @Input() maxValue?: string;

  @ViewChildren('checks') checkboxes: any;

  data?: IGroup;
  creation: boolean;
  functions?: IFunctions[];
  funcs: IFunctionDescr[];
  allUsers: IUsers[];
  currUsers?: IUsers[];

  constructor(private group: GroupService, private items: ItemslistService, private route: ActivatedRoute) {
    this.data = group.getCurrentGroup();
    this.funcs = items.functions;
    this.functions = this.data?.functions;
    this.allUsers = items.users;
    this.currUsers = this.data?.users;
    this.creation = false;

    this.route.queryParams.pipe(
      filter(params => params['state'])
    ).subscribe(x => {
      if (x['state'] == 'create') {
        this.currUsers = this.allUsers;
        this.creation = true;
      }
    })
  }

  isFuncInFunctions(func: any): boolean {
    if(this.functions) {
      return this.functions?.some(f => f.functionCode === func.function_code);
    }
    return false;
  }

  getFunctionMinValue(func: any, maxOmin: string) {
    const foundFunction = this.functions?.find(f => f.functionCode === func.function_code)

    if (maxOmin == "max") {
      return foundFunction ? foundFunction.maxValue : '';
    }

    return foundFunction ? foundFunction.minValue : '';
  }

  createGroup() {
    const selectedFunctions = this.checkboxes
      .filter((checkbox: any) => checkbox.checked)
    
    console.log(selectedFunctions)
  }

  addGroup(fs: IFunctions, gN: string, id: number, min: string, max: string, users: IUsers, warning?: string) {
    
  }
}