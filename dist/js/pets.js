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
   const modalWindow = document.querySelector('.modal .modal_dialog'),
         btns = document.querySelectorAll('.friends_btn'),
         modal = document.querySelector('.modal'),
         close = document.querySelector('.modal_close');


    close.addEventListener('click', closeModal);

    modal.addEventListener('click', (e)=>{
        if(e.target == modal || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });

    const element = document.createElement('div');
    function createModalZero(){
             element.innerHTML = `
                    <img src="assets/img/pets-katrine.svg" alt="katrine" class="modal_img">
                    <div class="modal_descr">
                    <h2>Katrine</h2>
                        <h3>Cat - British Shorthair</h3>
                        <p>Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.</p>
                       <ul class="modal_item">
                           <li><span>Age:</span>2 months</li>
                           <li><span>Inoculations:</span> none</li>
                           <li><span>Diseases:</span>none</li>
                             <li><span>Parasites:</span>none</li>    
                         </ul>
                     </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalOne(){
             element.innerHTML = `
                    <img src="assets/img/pets-jennifer.svg" alt="jennifer" class="modal_img">
                    <div class="modal_descr">
                        <h2>Jennifer</h2>
                        <h3>Dog -Labrador</h3>
                        <p>Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
                        '3 months</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>3 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalTwo(){
             element.innerHTML = `
                    <img src='assets/img/pets-woody.svg' alt="woody" class="modal_img">
                    <div class="modal_descr">
                        <h2>Woody</h2>
                        <h3>Dog - Golden Retriever</h3>
                        <p>Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
                        '2 months</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>2.5 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalThree(){
             element.innerHTML = `
                    <img src="assets/img/pets-sophia.svg" alt="Sophia" class="modal_img">
                    <div class="modal_descr">
                        <h2>Sophia</h2>
                        <h3>Dog - Shih tzu</h3>
                        <p>Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
                        '2.5 months</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>2.5 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalFour(){
             element.innerHTML = `
                    <img src="assets/img/pets-timmy.svg" alt="timmy" class="modal_img">
                    <div class="modal_descr">
                        <h2>Timmy</h2>
                        <h3>Cat - British Shorthair</h3>
                        <p>Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>3 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalFive(){
             element.innerHTML = `
                    <img src="assets/img/pets-charly.svg" alt="Charly" class="modal_img">
                    <div class="modal_descr">
                        <h2>Charly</h2>
                        <h3>Dog - Jack Russell Terrier</h3>
                        <p>his cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>3 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalSix(){
             element.innerHTML = `
                    <img src="assets/img/pets-scarlet.svg" alt="Scarlett" class="modal_img">
                    <div class="modal_descr">
                        <h2>Scarlett</h2>
                        <h3>Dog - Jack Russell Terrier</h3>
                        <p>Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and wi       make a loyal companion and a wonderful family dog or a good companion for a single individual too since s       likes to hang out and be with her human.</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>3 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
    }

    function createModalSeven(){
             element.innerHTML = `
                    <img src="assets/img/pets-freddie.svg" alt="Freddie" class="modal_img">
                    <div class="modal_descr">
                        <h2>Freddie</h2>
                        <h3>Cat - British Shorthair</h3>
                        <p>Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings an    bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lo    in his life, and is looking to find his forever home.</p>
                        <ul class="modal_item">
                            <li><span>Age:</span>2 months</li>
                            <li><span>Inoculations:</span> none</li>
                            <li><span>Diseases:</span>none</li>
                            <li><span>Parasites:</span>none</li>    
                        </ul>
                    </div>
        `;
        element.classList.add('modal_content');
        modalWindow.append(element);
        openModal();
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
        console.log(index);
        if (index === 0 ){
           createModalZero();
        }else if (index === 1){
            createModalOne();
        }else if (index === 2){
            createModalTwo();
        }else if (index === 3){
            createModalThree();
        }else if (index === 4){
            createModalFour();
        }else if (index === 5){
            createModalFive();
        }else if (index === 6){
            createModalSix();
        }else if (index === 7){
            createModalSeven();
        }else {
            return;
        }
    };

    for (let i = 0; i < btns.length; i++) {
       btns[i].onclick = handler;
    }           
});



