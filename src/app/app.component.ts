import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ecommerce-plataform';
  widthImg = 300;
  favNumber:number = 3;
  img: string = 'https://source.unsplash.com/random'
  btnDisabled: boolean = false;
  btnDisabled2: boolean = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  progress_a: number = 100;
  progress_b: number = 58;
  person = {
    name: 'Josue',
    age: 20,
    heLovesAngular: true
  };
  names: string[] = ['Josue', 'Jorgelina', 'Juan', 'Jordana', 'Joana'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  products = [
    {
      name: 'Army Of Two II',
      price: 35,
      image: this.img,
      stars: 5 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Army-Devils-Cartel-Sony-Playstation-Game/dp/B00A2IPVDQ/ref=sr_1_1?keywords=army+of+two+devils+poster+ps3&qid=1673557779&sprefix=army+of+two+devils+cartel+%2Caps%2C389&sr=8-1'
    },
    {
      name: 'Minecraft',
      price: 29.99,
      image: this.img,
      stars: 4.8 + ' / ' +  5,
      category: 'all',
      link: 'https://www.amazon.com/-/es/Minecraft-PlayStation-3/dp/B00JQHU9RC/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31RLT5F8CIBJW&keywords=Minecraft+ps3&qid=1673556622&sprefix=minecraft+ps3%2Caps%2C484&sr=8-1'
    },
    {
      name: 'Crash Bandicoot NK',
      price: 12.99,
      image: this.img,
      stars: 4.8 + ' / ' +  5,
      link: 'https://www.amazon.com/-/es/Crash-Nitro-Kart-PlayStation-2/dp/B00008NRM7/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=102U3ZH23J3D1&keywords=crash+bandicoot+nitro+kart+ps2&qid=1673556504&sprefix=crash+bandicoot+nitro+kart+%2Caps%2C402&sr=8-1'
    }
  ]

  toggleButton() {
    this.btnDisabled2 = !this.btnDisabled2;
  }

  increaseAge() {
    this.person.age += 1;
  }

  decreaseAge() {
    this.person.age -= 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {

    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log('Tu objeto es' + this.register);
  }

  constructor () {
  }
}
