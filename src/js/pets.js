"use strict";

window.addEventListener('DOMContentLoaded', function() {

    // hamburger

    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.close');

    hamburger.addEventListener('click',() =>{
    menu.classList.add('menu_active');
    });
    closeBtn.addEventListener('click',() =>{
     menu.classList.remove('menu_active');
    });

    // modal

    const btns = document.querySelectorAll('.friends_btn'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal_close'),
        element = document.createElement('div');


    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e)=>{
        if(e.target == modal || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });

    class MenuCard {
        constructor (src,alt,title, subtitle ,descr,parent,age,inoculations, diseases,parasites){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.subtitle = subtitle;
            this.descr = descr;
            this.parent = document.querySelector('.modal .modal_dialog');
            this.age = age;
            this.inoculations = inoculations;
            this.diseases =diseases;
            this.parasites =parasites;
        }

        render(){
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt} class="modal_img">
                    <div class="modal_descr">
                        <h2>${this.title}</h2>
                        <h3>${this.subtitle}</h3>
                        <p>${this.descr}</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>${this.age}</li>
                            <li><span>Inoculations:</span>${this.inoculations}</li>
                            <li><span>Diseases:</span>${this.diseases}</li>
                            <li><span>Parasites:</span>${this.parasites}</li>    
                        </ul>
                    </div>
            `;
            this.parent.append(element);
            element.classList.add('modal_content');
            openModal();
        }
    }
    function openModal (){
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    let handler = function() {
        let index = Array.prototype.indexOf.call(btns, this);
        if (index === 0 ){
            new MenuCard(
                "assets/img/pets-katrine.svg",
                "Katrine",
                "Katrine",
                "Cat - British Shorthair",
                "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
                "2 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 1){
            new MenuCard(
                "assets/img/pets-jennifer.svg",
                "Jennifer",
                "Jennifer",
                "Dog -Labrador",
                "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
                "3 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 2){
            new MenuCard(
                "assets/img/pets-woody.svg",
                "Woody",
                "Woody",
                "Dog - Golden Retriever",
                "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
                "2.5 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 3){
            new MenuCard(
                "assets/img/pets-sophia.svg",
                "Sophia",
                "Sophia",
                "Dog - Shih tzu",
                "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
                "2 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 4){
            new MenuCard(
                "assets/img/pets-timmy.svg",
                "Timmy",
                "Timmy",
                "Cat - British Shorthair",
                "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
                "3 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 5){
            new MenuCard(
                "assets/img/pets-charly.svg",
                "Charly",
                "Charly",
                "Dog - Jack Russell Terrier",
                "his cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
                "3 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 6){
            new MenuCard(
                "assets/img/pets-scarlet.svg",
                "Scarlett",
                "Scarlett",
                "Dog - Jack Russell Terrier",
                "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and wi       make a loyal companion and a wonderful family dog or a good companion for a single individual too since s       likes to hang out and be with her human.",
                "3 months",
                "none",
                "none",
                "none",
            ).render();
        }else if (index === 7){
            new MenuCard(
                "assets/img/pets-freddie.svg",
                "Freddie",
                "Freddie",
                "Cat - British Shorthai",
                "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings an    bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lo    in his life, and is looking to find his forever home.",
                "2 months",
                "none",
                "none",
                "none",
            ).render();
        }else {
            return;
        }
    };

    for (let i = 0; i < btns.length; i++) {
       btns[i].onclick = handler;
    }            
});



