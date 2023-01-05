const API_KEY = "c641f86cd5634d868e0023a9acef7fe7";
const fetchIpInfo = ip => {
    return fetch(`https://api.geoapify.com/v1/ipinfo?ip=${ip}&apiKey=${API_KEY}`)
        .then(response => response.json())
        .catch(err => console.error(err));
}

/* Testing different ways to declare a function in JS*/
/* /const $ = function(selector){
    return document.querySelector(selector)
} */

const $ = selector => document.querySelector(selector)
/* const $2 = (selector) => document.querySelector(selector)
const $3 = function(selector){
    return document.querySelector(selector)
}
function $4(selector){
   return document.querySelector(selector)
} */
const $form = $('#form')
const $input = $("#input")
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }
    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})