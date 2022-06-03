document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    document.getElementById('morph').innerText = ""
    const familiarName = document.querySelector('input').value
    try{
        const response = await fetch(`https://ni-no-kuni-guide.herokuapp.com/api/${familiarName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('famName').innerText = data.Name
        document.querySelector('img').src = (data.image)
        document.getElementById('food').innerText = data.FavoriteFoods
        document.getElementById('location').innerText = data.Location
        for(i=0;i<data.Metamorph.length;i++){
            if(i==0 && data.Metamorph[i+1]){
                document.getElementById('morph').innerText += data.Metamorph[i] + " &  "
            } else {
                document.getElementById('morph').innerText += " "+ data.Metamorph[i]
            }
            
        }
        
        document.getElementById('morphLevel').innerText = data.morphLevel
        document.getElementById('maxLevel').innerText = data.maxLevel
        
    }catch(error){
        console.log(error)
    }
}