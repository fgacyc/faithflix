export   async function getUserinfo(oauth2_id){
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user?oauth2_id=${oauth2_id}`)
    return await res.json()
}

export   async function upsertUserInfo(item){
    const  options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user`, {
        ...options,
        body: JSON.stringify(item)
    })
    return await res.json()
}

export   async function updateLoginTime(oauth2_id){
    const  options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user/update/login-timestamp?oauth2_id=${oauth2_id}`, {
        ...options
    })
    return await res.json()
}