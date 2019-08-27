import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from "@angular/core";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ViewCell } from "ng2-smart-table";
@Component({
  templateUrl: "./action.component.html",
  styleUrls: ["./action.component.scss"]
})
export class ActionComponent implements ViewCell, OnInit {
  status: string;
  amount: number;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  @Input() value: string | number;
  @Input() rowData: any;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.status = this.value["action"];
    this.amount = this.value["amount"];
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  closeModal() {
    this.modalRef.hide();
  }
}
