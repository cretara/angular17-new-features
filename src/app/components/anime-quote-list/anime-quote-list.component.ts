import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnimeQuote} from "../../models/anime-quote";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-anime-quote-list',
  standalone: true,
  imports: [],
  templateUrl: './anime-quote-list.component.html',
  styleUrl: './anime-quote-list.component.scss'
})
export class AnimeQuoteListComponent implements OnInit {

  #httpClient = inject(HttpClient);

  #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.#httpClient.get<AnimeQuote>('https://animechan.xyz/api/quotes')
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe(() => console.log);
  }

}
