import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getNews().subscribe(response => {
      console.log(response); 
    });
  }

  public getNews() {
   
    var url = "https://jsonplaceholder.typicode.com/todos/";
    return this.httpClient.get(url);
  }
}
