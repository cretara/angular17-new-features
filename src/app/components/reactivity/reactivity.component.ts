import { HttpClient } from '@angular/common/http';
import {Component, inject, signal} from '@angular/core';
import {Post} from "../../models/post";
import {Subject, merge, of, switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-reactivity',
  standalone: true,
  imports: [],
  templateUrl: './reactivity.component.html',
  styleUrl: './reactivity.component.scss'
})
export class ReactivityComponent {

  http = inject(HttpClient);

  posts = signal<Post[]>([]);

  reload$: Subject<void> = new Subject<void>();

  constructor() {
    merge(of(null), this.reload$).pipe(
      switchMap(() => {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      }),
      takeUntilDestroyed()
    ).subscribe((posts) =>
      this.posts.set(posts)
    );
  }

  /**
   * Reload the posts
   */
  reload() {
    this.reload$.next();
  }
}
