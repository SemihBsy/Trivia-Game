const url = "https://opentdb.com/api.php?amount=1"


const request = $.ajax(url)

request.then((data) => {
    console.log(data)
})