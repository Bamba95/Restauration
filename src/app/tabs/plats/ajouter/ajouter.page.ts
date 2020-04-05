import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../../../models/plat';
import { PlatService } from '../../../services/plat.service';
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  constructor(private router: Router, private platService: PlatService) {
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/plats');
  }

  onAdd(plat: Plat) {
    this.platService.addPlat(plat).subscribe(() => { this.back(); });
  }
}
