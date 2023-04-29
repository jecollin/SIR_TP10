import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl = 'http://localhost:8080/myapp/users';

    constructor(private http: HttpClient) { }

    getUsersList(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}`);
    }

    createUser(user: User): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, user);
    }

    updateUser(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteUserById(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }


    deleteUser(user: User): void {
        this.deleteUserById(user.id)
            .subscribe( data => {
                console.log(data);
            });
    };

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/${id}`);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}`);
    }
}
