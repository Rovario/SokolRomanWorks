// завдання 1

const btnColor = document.getElementById('changeColorBtn');
        
btnColor.addEventListener('click', function() {
    document.body.style.backgroundColor = '#3498db';
});




// завдання 2

function dropMenu(){
    let dropdownMenu = document.createElement("div");
    dropdownMenu.className = "ddMenu"
    document.body.appendChild(dropdownMenu);

    let btnMenu = document.createElement("button");
    btnMenu.textContent = "випадаюче меню";
    dropdownMenu.appendChild(btnMenu);

    let ddContent = document.createElement("div");
    ddContent.className = "ddContent";
    ddContent.innerHTML = "<p>текст випадаючого меню</p>";
    dropdownMenu.appendChild(ddContent);


    dropdownMenu.style.paddingTop = "20px"
    ddContent.style.display = "none"
    ddContent.style.position = "absolute"
    ddContent.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2) "
    ddContent.style.minWidth = "160px"
    ddContent.style.backgroundColor = "white"
    ddContent.style.padding = "12px 16px"


    btnMenu.addEventListener('click', function() {
        ddContent.style.display = "block"
    });

    ddContent.addEventListener('mouseout', function() {
        ddContent.style.display = "none"
    });
}

dropMenu()




// завдання 3

function clickerCount(){
    let clickerDiv = document.createElement("div");
    document.body.appendChild(clickerDiv);

    let btnClick = document.createElement("button");
    btnClick.textContent = "  тапати хамстера  "
    clickerDiv.appendChild(btnClick);

    let cl = 0;
    let clickLenght = document.createElement("text");
    clickLenght.textContent = cl;
    clickerDiv.appendChild(clickLenght);

    btnClick.addEventListener('click', function(){
        cl = cl + 1
        clickLenght.textContent = cl;
    })

    clickerDiv.style.paddingTop = "20px"
    clickLenght.style.paddingLeft = "20px"
}

clickerCount()




// завдання 4

function formF() {
    let formDiv = document.createElement("div");
    document.body.appendChild(formDiv);

    let password = document.createElement("input");
    password.placeholder = "  введіть пароль  "
    formDiv.appendChild(password);

    let btnForm = document.createElement("button");
    btnForm.textContent = "  перевірити пароль  "
    formDiv.appendChild(btnForm);

    formDiv.style.paddingTop = "20px"
    
    btnForm.addEventListener('click', function(){
        if (password.value == "12345678"){
            alert("ПАРОЛЬ ПРАВИЛЬНИЙ ЧІНАЗЕС");
            password.value = "";
        } else if (password.value == ""){
            alert("ти нічо не написав");
            password.value = "";
        } else {
            alert("НЕПРАВИЛЬНИЙ ПАРОЛЬ");
            password.value = "";
        }
    })
}

formF()




// завдання 5

function galleryF() {
    const images = document.querySelectorAll('#gallery img[id^="r"]');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            this.style.width = "200px";
        });
        
        img.addEventListener('mouseout', function() {
            this.style.width = "50px";
        });
    });
}

galleryF();

//!!!!!!!!!!!!!!!!!

//ПОЧИТАЙТЕ БУДЬ ЛАСКА

//!!!!!!!!!!!!!!!!!

/*зробив тільки перші 5 завдань бо на інші просто нехватає часу,
 прошу будь ласка мене зрозуміти, я це все зараз робив поки був хворий, і за цей час в мене ще
  заборгувалися 2 практичні, тому я буду їх розбирати і пробувати робити, і прошу мене не бити 
  за те що я трохи запізно скину практичні, через хворобу в мене невиходить нормально мислити 
  і робити ці завдання, якщо в мене з'явиться вільний час, то я постараюсь ще доробити решту 5 завдань, 
  надіюсь ви мене зрозумієте бо ще разом з цим я активно готуюсь до НМТ і все на раз мені трохи важко, дякую.
  */














