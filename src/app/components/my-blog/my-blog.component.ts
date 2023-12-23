import { Component } from '@angular/core';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.scss']
})
export class MyBlogComponent {


  posts = [ 
    {
     title:'Getting Started with Angular: A Beginner’s Guide',
     url:'https://medium.com/@duddukurisai63/title-getting-started-with-angular-a-beginners-guide-7efd708130b8',
     imageUrl:'../../../assets/posts/post-1.png',
     description:''
    },
    {
     title:'Securing Angular Routes: A Comprehensive Guide to Implementing Auth Guards',
     url:'https://medium.com/@duddukurisai63/securing-angular-routes-a-comprehensive-guide-to-implementing-auth-guards-b0b728f5c453',
     imageUrl:'../../../assets/posts/post-2.png',
     description:''
    },
    {
     title:'Demystifying Angular Directives: A Comprehensive Exploration',
     url:'https://medium.com/@duddukurisai63/title-demystifying-angular-directives-a-comprehensive-exploration-7b60af2e557b',
     imageUrl:'../../../assets/posts/post-3.jpg',
     description:''
    },
    {
     title:'Understanding Angular’s Various Subjects: A Comprehensive Overview',
     url:'https://medium.com/@duddukurisai63/title-understanding-angulars-various-subjects-a-comprehensive-overview-b93befb73d16',
     imageUrl:'../../../assets/posts/post-4.png',
     description:''
    },
    {
     title:'Mastering Data Sharing Between Angular Components',
     url:'https://medium.com/@duddukurisai63/mastering-data-sharing-between-angular-components-4184c34ddaae',
     imageUrl:'../../../assets/posts/post-5.png',
     description:''
    },
    {
     title:'Mastering Angular Services: Simplifying Application Logic',
     url:'https://medium.com/@duddukurisai63/title-mastering-angular-services-simplifying-application-logic-b8d23df192f2',
     imageUrl:'../../../assets/posts/post-6.png',
     description:''
    },
    {
     title:'Demystifying the Angular.json Configuration File',
     url:'https://medium.com/@duddukurisai63/demystifying-the-angular-json-configuration-file-8097e6e403d6',
     imageUrl:'../../../assets/posts/post-7.png',
     description:''
    },
    {
     title:'Mastering Angular Bundle Sizes for Optimal Performance',
     url:'https://medium.com/@duddukurisai63/mastering-angular-bundle-sizes-for-optimal-performance-c31ab023f381',
     imageUrl:'../../../assets/posts/post-8.png',
     description:''
    },
    {
     title:'Exploring Angular Content Projection: Enhance Component Flexibility',
     url:'https://medium.com/@duddukurisai63/exploring-angular-content-projection-enhance-component-flexibility-4dfc54fa3a8c',
     imageUrl:'../../../assets/posts/post-9.webp',
     description:''
    },
    {
     title:'Crafting an Organized Angular Project Structure',
     url:'https://medium.com/@duddukurisai63/crafting-an-organized-angular-project-structure-8ac918407680',
     imageUrl:'../../../assets/posts/post-10.png',
     description:''
    },
    {
     title:'Angular Unit Testing ',
     url:'https://medium.com/@duddukurisai63/angular-service-unit-testing-example-ca121e3bdc72',
     imageUrl:'../../../assets/posts/post-11.jpg',
     description:''
    },
    {
     title:'Enhancing Angular Performance with Lazy Loading',
     url:'https://medium.com/@duddukurisai63/enhancing-angular-performance-with-lazy-loading-6afa135c8293',
     imageUrl:'../../../assets/posts/post-12.webp',
     description:''
    },
]

openNewWindow(url) {
var link = document.createElement("a")
link.href = url
link.target = "_blank"
link.click()
}
}
