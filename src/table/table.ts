export class TableComponent implements OnInit {
    @Output()
    private onEditClick: EventEmitter<any> = new EventEmitter();
    @Output()
    private onDeleteClick: EventEmitter<any> = new EventEmitter();
    @Output()
    private onActionClick: EventEmitter<{ name: string; data: any }> =
      new EventEmitter();
  
    @Input()
    public tableData: any[] = [];
    @Input()
    public isRowClickable: boolean = false;
    @Input()
    public itemsPerPage: number = 25;
  
    @Input()
    public editAction: boolean = false;
    @Input()
    public deleteAction: boolean = false;
  
    @Input()
    public set setWidth(value: number) {
      if (value) this.colWidth = value;
    }
  
    @Input()
    public setTimeColumns: any[] = [];
    @Input()
    public setNumericColumns: any[] = [];
    @Input()
    public hiddenColumns: any[] = [];
    @Input()
    public setStatusColor: boolean = false;
    @Input()
    public evenColumns: boolean = false;
  
    //Add columns with action, array of action names
    @Input()
    public actionColumns: any[] = [];
    @Input()
    public columnsToDisplay: { key: string; extraKey?: string; value: string }[] =
      [];
  
    @Input() public checkboxColumns: string[] = [];
    @Input() public checkAllObject: any;
    @Input() public editLabel: any;
  
    @Output() public checkboxChange: EventEmitter<{
      row: any;
      column: string;
      isChecked: boolean;
    }> = new EventEmitter();
    @Output() public allCheckboxChange: EventEmitter<{
      isAllChecked: boolean;
      role: string;
    }> = new EventEmitter();
  
    // default is w-48 of tailwind width
    // select from here 24, 32, 40, 48, 64, 80, 96
    public colWidth: number = 48;
  
    // Add sort key and sort direction
    public sortKey: any = '';
    public sortDirection: string = 'asc';
  
    public current: number = 0;
    public startSlice: number = 0;
    public endSlice: number = 0 + this.itemsPerPage;
  
    public setItemsDisplay(event: any) {
      this.startSlice = event.start;
      this.endSlice = event.end;
    }
  
    public rowEdit(data: any) {
      this.onEditClick.emit(data);
    }
  
    public rowDelete(data: any) {
      this.onDeleteClick.emit(data);
    }
  
    public customAction(columnName: string, rowData: any) {
      this.onActionClick.emit({ name: columnName, data: rowData });
    }
  
    public unsortKeyValue() {
      return 0;
    }
  
    // Add sort data method
    public sortData() {
      this.tableData?.sort((a, b) => {
        if (this.sortDirection === 'asc') {
          return a[this.sortKey] > b[this.sortKey] ? 1 : -1;
        } else {
          return a[this.sortKey] < b[this.sortKey] ? 1 : -1;
        }
      });
    }
  
    public setSort(key: string) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
      this.sortData();
    }
  
    ngOnInit(): void {}
  
    ngOnChanges(changes: SimpleChanges): void {
      if (
        changes['tableData'] ||
        changes['sortKey '] ||
        changes['sortDirection']
      ) {
        this.sortData();
      }
    }
  
    constructor() {}
  
    onCheckboxChange(isChecked: any, row: any, column: any) {
      this.checkboxChange.emit({ row, column, isChecked: isChecked });
    }
  
    onAllCheckboxChange(isAllChecked: boolean, role: any) {
      this.allCheckboxChange.emit({ isAllChecked, role });
    }
  }