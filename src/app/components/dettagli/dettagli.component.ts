import { Component, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { IFunctionDescr, IFunctions, IGroup } from 'src/app/interfaces/group-list';
import { ItemslistService } from 'src/app/services/itemslist.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent {
  @Input() groupName?: string;
  @Input() minValue?: string;
  @Input() maxValue?: string;

  data?: IGroup;
  functions?: IFunctions[];
  funcs: IFunctionDescr[];

  constructor(private group: GroupService, private items: ItemslistService) {
    this.data = group.getCurrentGroup();
    this.funcs = items.functions;
    console.log(this.funcs)
    this.functions = this.data?.functions
  }

  isFuncInFunctions(func: any): boolean {
    return this.functions!.some(f => f.functionCode === func.function_code);
  }

  getFunctionMinValue(func: any, maxOmin: string) {
    const foundFunction = this.functions?.find(f => f.functionCode === func.function_code)

    if (maxOmin == "max") {
      return foundFunction ? foundFunction.maxValue : '';
    }

    return foundFunction ? foundFunction.minValue : '';
  }
}