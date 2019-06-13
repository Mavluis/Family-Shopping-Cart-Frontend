import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/features/cart/cart.models';
import { ShoppingCartUser } from '../core.models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    posts: Post[];

    constructor(private http: HttpClient) { }

    getCart() {
        return this.http.get(`${environment.apiBaseUrl}/user/cart`)
            .pipe(
                tap((posts: Post[]) => {
                    this.posts = posts.sort((p1, p2) => {
                        return p2.createdAt - p1.createdAt;
                    });
                })
            );
    }

    addCart() {
        return this.http
            .post(`${environment.apiBaseUrl}/post`, {})
            .pipe(tap((post: Post) => this.posts.unshift(post)));
    }
    addComment(postId: string, note: string, user: ShoppingCartUser) {
        return this.http
            .post(`${environment.apiBaseUrl}/post/${postId}/comment`, {
                note
            })
            .pipe(
                tap(() => {
                    this.posts.map(post => {
                        if (true) {
                            post.notes.unshift({
                                id: this.uuidv4(),
                                createdAt: Date.now(),
                                note
                            });
                        }
                        return post;
                    });
                })
            );
    }
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line
            let r = (Math.random() * 16) | 0, // tslint:disable-line
                v = c == 'x' ? r : (r & 0x3) | 0x8; // tslint:disable-line
            return v.toString(16);
        });
    }
}
