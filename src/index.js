console.log("hello fuse")
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
let list = [

    {name:'mez',
     surname:'ndv',
     gender: 'male',
     birthday:'1/3/2000',
     email: 'mez@t.com',
     location: 'Biust'
    },
    {name:'mez',
     surname:'ndv',
     gender: 'male',
     birthday:'1/3/2000',
     email: 'mez@t.com',
     location: 'Biust'
    }
    
]
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxe_sHuezTvD3Hi-aGgaGJquo9Xdtsg3k",
  authDomain: "fuseapp-6876b.firebaseapp.com",
  databaseURL: "https://fuseapp-6876b-default-rtdb.firebaseio.com",
  projectId: "fuseapp-6876b",
  storageBucket: "fuseapp-6876b.appspot.com",
  messagingSenderId: "897811826474",
  appId: "1:897811826474:web:75ea467643d822d30a4053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

const starCountRef = ref(db, "userDetails");

onValue(starCountRef, (snapshot) => {
  
  snapshot.forEach((person)=>{

    let data = person.val();
      createCard(data, person.key);
    })
});


function createCard(person, key) {

    const cardContainer = document.getElementById('card-container')
    
    cardContainer.innerHTML += `
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
            <img src="/images/imag.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${person.name} ${person.surname} </h5>
                    <h6 >ID: ${key}</h6>
                    <p> Location: ${person.location} <br/> Gender: ${person.gender } <br/> Birthday: ${person.birthdate} <br/> Email: ${person.email} <br/> </p>
                    <button href="#" class="btn mr-2">See Matches</button>
                    <burron href="#" class="btn "> See reserves</button>
                </div>
        </div>
    </div>
    `;  

}



const searchInput = document.getElementById('search');
const searchbtn = document.getElementById('searchbtn');

searchbtn.addEventListener('click', (e)=>{
  e.preventDefault();

  let id = searchInput.value;
  console.log(id);

  let matchesRef = ref(db, "matches/"+id);

  onValue(matchesRef, (snapshot) => {

    snapshot.forEach((person)=>{

      let data = person.val();
        createCard(data, person.key);
        console.log(data);
    })
  });


})

