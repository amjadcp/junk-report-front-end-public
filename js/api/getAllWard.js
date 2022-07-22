const getAllWard=async()=>{
    let res = await fetch(`${ROOT_URL}/api/common/get-all-ward`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        credentials: 'same-origin'
    })
    if(res.status===200){
        await res.json().then(res=>{
            res.data.forEach(ward=>{
                document.getElementById('ward-number').innerHTML += 
                `
                <option value="${ward.wardNo}">Ward${ward.wardNo}</option>
                `
            })
        })
    }
}

getAllWard()
