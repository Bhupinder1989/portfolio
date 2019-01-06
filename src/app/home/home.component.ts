import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catitems = [];
filterdata = [];
  constructor() { }

  ngOnInit() {
    this.catitems = [
      {
      key:"web-design",
      data:[
        {
          "title":"Projects Title 1",
          "link":"https://raiseitfast.com",
          "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
          "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
          "viewMore":""
      
        },
        {
          "title":"Projects Title 2",
          "link":"https://raiseitfast.com",
          "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
          "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
          "viewMore":""
        }
      ]
      },
      {
      key:"web-dev",
      data:[
        {
          "title":"Projects Title 3",
          "link":"https://raiseitfast.com",
          "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
          "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
          "viewMore":""
        },
        {
          "title":"Projects Title 4",
          "link":"https://raiseitfast.com",
          "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
          "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
          "viewMore":""
        }
      
      ]
      },
      {
        key:"angular",
        data:[
          {
            "title":"Projects Title 5",
            "link":"https://raiseitfast.com",
            "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
            "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
            "viewMore":""
          },
          {
            "title":"Projects Title 6",
            "link":"https://raiseitfast.com",
            "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
            "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
            "viewMore":""
          }
        
        ]
        },
        {
          key:"photoshop",
          data:[
            {
              "title":"Projects Title 7",
              "link":"https://raiseitfast.com",
              "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
              "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
              "viewMore":""
            },
            {
              "title":"Projects Title 8",
              "link":"https://raiseitfast.com",
              "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
              "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
              "viewMore":""
            }
          
          ]
          },
          {
            key:"wordpress",
            data:[
              {
                "title":"Projects Title 7",
                "link":"https://raiseitfast.com",
                "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
                "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
                "viewMore":""
              },
              {
                "title":"Projects Title 8",
                "link":"https://raiseitfast.com",
                "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
                "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
                "viewMore":""
              }
            
            ]
            },
            {
              key:"bootstrap",
              data:[
                {
                  "title":"Projects Title 9",
                  "link":"https://raiseitfast.com",
                  "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
                  "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
                  "viewMore":""
                },
                {
                  "title":"Projects Title 10",
                  "link":"https://raiseitfast.com",
                  "skill":"Photoshop, CSS, HTML, Angular 6, Node JS, Wordpress",
                  "desc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem sequi nesciunt.",
                  "viewMore":""
                }
              
              ]
              }
      
      ];
      this.filter('web-design');
      console.log(this.filterdata);
  }


filter(val){

  var filteredContent = this.catitems.filter((value)=>{
    return value.key == val;
  });
  this.filterdata = [];
  this.filterdata =  filteredContent[0].data;
}

}
