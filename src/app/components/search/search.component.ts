import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino = '';

  constructor( private _spotifyService: SpotifyService ) { }

  ngOnInit() {
  }

  buscarArtistas() {
    this._spotifyService.getArtist(this.termino).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
