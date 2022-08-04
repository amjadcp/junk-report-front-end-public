document.getElementById('send').addEventListener('click', async()=>{
    const phoneNumber = document.getElementById('phone-number').value
    const ticketId = document.getElementById('ticket-id').value

    if(phoneNumber!==''&&ticketId!==''){
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let res = await fetch(`${ROOT_URL}/api/ticket/report`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                ticketId, phoneNumber
            }),
            credentials: 'same-origin'
        })
        if(res.status===201){
            alert('Your Issue is Reported')
            location.reload()
            document.getElementById('ticket-id').value = ''
            document.getElementById('phone-number').value = ''
        }
        else if(res.status===404){
            alert('Invalid Token')
            location.reload()
        }
        else if(res.status===400){
            alert('Only can report after 7 days of ticket raise')
            location.reload()
        }
        else alert('Check your Ticket ID!!!')
    }else alert('Fill the form')
    
})