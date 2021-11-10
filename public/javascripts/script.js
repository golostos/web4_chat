fetch('/api/chat/message', {
    method: 'POST',
})

document.getElementById('get-cookie').onclick = () => {
    fetch('/api/chat/message/cookie', {
        credentials: 'include'
    })
}