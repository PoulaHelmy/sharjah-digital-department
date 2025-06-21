import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {StateService} from '@core/services';
import {FileData} from '@core/models/response';

@Component({
  selector: 'app-download-center',
  imports: [
    TranslatePipe
  ],
  templateUrl: './download-center.component.html',
  standalone: true,
  styleUrl: './download-center.component.scss'
})
export class DownloadCenterComponent implements OnInit {
  public stateService = inject(StateService);
  files: FileData[] = [];

  ngOnInit() {
    this.files = this.stateService.getData().downloadCenter.files || [];
  }
}
