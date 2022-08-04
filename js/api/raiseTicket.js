document.getElementById('raise').addEventListener('click', async()=>{
    const name = document.getElementById('name').value
    const phoneNumber = document.getElementById('phone-number').value
    const wardNo = document.getElementById('ward-number').value
    const houseNo = document.getElementById('house-no').value
    const address = document.getElementById('address').value
    const pincode = document.getElementById('pincode').value
    let waste = []
    document.getElementsByName('waste').forEach(e=>{
        if(e.checked) waste.push(e.value)
    })
    if(name!==''&&phoneNumber!==''&&wardNo!==''&&houseNo!==''&&address!==''&&pincode!==''&&waste!==''){
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let res = await fetch(`${ROOT_URL}/api/ticket/raise-ticket`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                name, phoneNumber, wardNo, houseNo, address, pincode, waste
            }),
            credentials: 'same-origin'
        })
        if(res.status===201){
            alert('Your Ticket is Submited')
            location.reload()
        }else alert('Something went wrong!')
    }else alert('Fill the form')
    document.getElementById('name').value = ''
    document.getElementById('phone-number').value = ''
    document.getElementById('ward-number').value = ''
    document.getElementById('house-no').value = ''
    document.getElementById('address').value = ''
    document.getElementById('pincode').value = ''
    // document.getElementById('waste').value = ''
})

















// const raiseTicket=async(name, phoneNumber, wardNumber, houseNumber, address, pincode, typeofWaste, weight)=>{
// }


const login=async(phoneNumber)=>{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let res = await fetch(`${ROOT_URL}/api/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
            "phoneNumber": phoneNumber
        }),
        credentials: 'same-origin'
    })
    if(res.status===200){
        await res.json().then(res=>{ 
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('first', true)
            localStorage.setItem('phoneNumber', phoneNumber)
        })
        location.replace('./otp.html')
    }
    else{
        alert('Invalid Phone Number')
    }
}