function validareNotEmpty(text)
{
    const fv=document.getElementById(text).value.trim()
    if(!fv)
    {
        document.getElementById(text+'_error').classList.remove("form-error")
        setTimeout(()=> document.getElementById(text+'_error').classList.add("form-error"),1500)
    }
    else if(text==="fullname")
    {
        getData('https://api.agify.io/?name='+fv).then((rasp)=>{
            const newDiv = document.createElement("div")
            const newContent = document.createTextNode("Salut, varsta ta este "+rasp.age+" ?")
            newDiv.appendChild(newContent)
            const currentDiv = document.getElementById(text)
            currentDiv.after(newDiv)
            setTimeout(()=> newDiv.remove(),1500)
        })
        
    }
}

function validareEmail(text)
{
    const fv=document.getElementById(text).value.trim()
    const regex=new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    if(!regex.test(fv))
    {
        document.getElementById(text+'_error').classList.add("form-error")
        setTimeout(()=> document.getElementById(text+'_error').classList.remove("form-error"),1500)
    }
}

function formSubmit(form)
{   
    const name=form.fullname.value

    alert(name+' multumim ca ne-ati contactat!')
}

function changeColor()
{
    if(localStorage.getItem('color')!=='general')
    {
        document.getElementById('general').classList.replace('general','contact')
        document.getElementById('contact').classList.replace('contact','general')
        localStorage.setItem('color','general')
    }
    else
    {
        document.getElementById('contact').classList.replace('general','contact')
        document.getElementById('general').classList.replace('contact','general')
        localStorage.setItem('color','contact')
    }
    
}

async function getData(url) 
{
    try {
        const response = await fetch(url)
        if (!response.ok) 
        {
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
      console.error(error.message)
    }
}
  