const formOne = document.getElementById('form-one')
const emailOne = document.getElementById('email-one')
const getStart = document.getElementById('getStated')


const formTwo = document.getElementById('form-two')
const emailTwo = document.getElementById('email-two')
const getStartFree = document.getElementById('get-start-free')

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
     
    return (false)
}
getStart.addEventListener('click', ()=>{
    const email = emailOne.value
    if(ValidateEmail(email)){
        emailOne.value = ""
    }else{
        formOne.classList.add('error')
        setTimeout(()=>{
            formOne.classList.remove('error')
            emailOne.value = ""
        } , 3000)

    }
})

getStartFree.addEventListener( 'click', ()=>{
    const email = emailTwo.value
    if(ValidateEmail(email)){
        emailTwo.value = ""
    }else{
        formTwo.classList.add('error')
        setTimeout(()=>{
            formTwo.classList.remove('error')
            emailTwo.value = ""
        } , 3000)

    }
}
)