import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { CategoriesService } from '../../core/services/categories.service';

declare interface CategoriesTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor( private categoriesService: CategoriesService ) { }

  public dataTable: CategoriesTable;

  ngOnInit() {
    this.dataTable = {
      headerRow: [ 'Name', 'Position', 'Office', 'Age', 'Date', 'Actions' ],
      footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],

      dataRows: [
        ['Airi Satou', 'Andrew Mike', 'Develop', '2015', '99,225', ''],
        ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '54,200', 'btn-round'],
        ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
        ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['Caesar Vance', 'Mike Monday', 'Marketing', '2020', '55,444', 'btn-round'],
        ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '58,990', 'btn-round'],
        ['Charde Marshall', 'Mike Monday', 'Marketing', '2022', '49,990', 'btn-round'],
        ['Colleen Hurst', 'Mike Monday', 'Marketing', '2007', '64,990', 'btn-round'],
        ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
        ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['Garrett Winters', 'Mike Monday', 'Marketing', '2006', '49,443', 'btn-round'],
        ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
        ['Gavin Joyce', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['Gloria Little', 'Mike Monday', 'Marketing', '2018', '88,995', 'btn-round'],
        ['Haley Kennedy', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['Herrod Chandler', 'Mike Monday', 'Marketing', '2019', '77,558', 'btn-round'],
        ['Hope Fuentes', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['Howard Hatfield', 'Andrew Mike', 'Develop', '2004', '99,225', ''],
        ['Jena Gaines', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['Jenette Caldwell', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['Jennifer Chang', 'Mike Monday', 'Marketing', '2013', '90,990', 'btn-round'],
        ['Martena Mccray', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
        ['Michael Silva', 'Mike Monday', 'Marketing', '2013', '50,990', 'btn-round'],
        ['Michelle House', 'Mike Monday', 'Marketing', '2013', '49,450', 'btn-round'],
        ['Paul Byrd', 'Mike Monday', 'Marketing', '2005', '49,990', 'btn-round'],
        ['Prescott Bartlett', 'Mike Monday', 'Marketing', '2005', '49,887', 'btn-round'],
        ['Quinn Flynn', 'Mike Monday', 'Marketing', '2013', '44,990', 'btn-round'],
        ['Rhona Davidson', 'Andrew Mike', 'Develop', '2009', '99,225', ''],
        ['Shou Itou', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['Sonya Frost', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['Suki Burks', 'Mike Monday', 'Marketing', '2013', '22,550', 'btn-round'],
        ['Tatyana Fitzpatrick', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
        ['Tiger Nixon', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['Timothy Mooney', 'Mike Monday', 'Marketing', '2011', '49,990', 'btn-round'],
        ['Unity Butler', 'Mike Monday', 'Marketing', '2013', '11,660', 'btn-round'],
        ['Vivian Harrell', 'Mike Monday', 'Marketing', '2013', '12,990', 'btn-round'],
        ['Yuri Berry', 'Mike Monday', 'Marketing', '2001', '99,990', 'btn-round']
      ]
    };
  }

  ngAfterViewInit() {
    $(document).ready(() => {
      $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
          search: "_INPUT_",
          searchPlaceholder: "Search records",
        }
      });

      const table = $('#datatables').DataTable();

      // Edit record
      table.on('click', '.edit', (e) => {
        this.editCategory();
        let $tr = $(this).closest('tr');
        if ($($tr).hasClass('child')) {
          $tr = $tr.prev('.parent');
        }
        var data = table.row($tr).data();
        alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        e.preventDefault();
      });

      // Delete a record
      table.on('click', '.remove', (e) => {
        this.deleteCategory();
        const $tr = $(this).closest('tr');
        table.row($tr).remove().draw();
        e.preventDefault();
      });

      $('.card .material-datatables label').addClass('form-group');
    })
  }

  createCategory(){
    this.categoriesService.createCategory(1);
  }

  editCategory(){
    this.categoriesService.updateCategory(1);
  }

  deleteCategory(){
    this.categoriesService.deleteCategory(1);
  }

  ngOnDestroy(){
    $('#datatables').DataTable().destroy();
  }
}