//3: User Profile Updater

//Object
const Person={
    name :"maulik",
    age :22,
    city:'vadodara'
}

//Function updatePerson 
//using 
function updatePerson(Person,newcity, profession){
const updatePerson={...Person,
    city:newcity,
    profession: profession
}
return updatePerson;
}
    const result=updatePerson(Person,city='surat',profession='developer')



console.log(result);//New Update object
console.log(Person);//object