import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../task';

const headers = new HttpHeaders({
  'content-type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:5000/tasks';
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  deleteTaskById(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + '/' + id);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const { reminder, ...rest } = task;
    return this.httpClient.put<Task>(
      this.baseUrl + '/' + task.id,
      {
        ...rest,
        reminder: !task.reminder,
      },
      {
        headers,
      },
    );
  }

  addTask(task: Partial<Task>): Observable<Task> {
    return this.httpClient.post<Task>(
      this.baseUrl,
      { ...task },
      { headers },
    );
  }
}

/**
 * Correct usage:
 * - private baseUrl = 'http://localhost:5000/tasks';
 *
 * Wrong usage:
 * - private baseUrl = 'localhost:5000/tasks';
 */
