//1 DATA

const data = [
  {
    name: "James Skinner",
    age: 35,
    gender: "male",
    lookingfor: "female",
    location: "Leicester",
    image: 'https://randomuser.me/api/portraits/men/93.jpg'
  },
  {
    name: "Molly Scott",
    age: 41,
    gender: "female",
    lookingfor: "male",
    location: "Cambridge",
    image: 'https://randomuser.me/api/portraits/women/93.jpg'
  },
  {
    name: "Frank Smith",
    age: 45,
    gender: "male",
    lookingfor: "female",
    location: "Brighton",
    image: 'https://randomuser.me/api/portraits/men/94.jpg'
  }
];

//4 init iterator to use it in event listener
const profilesIter = profileIterator(data);

//7 Call nextProfile when the page first loads
nextProfile();

//3 Next Event Listener
document.getElementById('next').addEventListener('click', nextProfile);

//5 Next Profile Display for Next btn
function nextProfile(){
  
  //6 set current profile using profile data (4) with profileIterator
  const currentProfile = profilesIter.next().value;

  if(currentProfile != undefined){
    document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `

    document.getElementById('image-display').innerHTML = `
      <img class="w-50" src="${currentProfile.image}">
    `} else {
      // No more profiles 
      window.location.reload();
    }
}


//2 Profile Iterator
// Iterating through a profiles entries. 
function profileIterator(profiles){
  // index start
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false} :
      { done: true }
    }
  };
}
