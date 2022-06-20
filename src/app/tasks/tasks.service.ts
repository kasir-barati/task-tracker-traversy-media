import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../task/task.model';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'content-type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.apiUrl.concat('/tasks');
  }

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
 * CORS origin error
 *
 * - private baseUrl = 'http://localhost:5000/tasks';
 *
 * Wrong usage:
 * - private baseUrl = 'localhost:5000/tasks';
 */
