let h1 = document.createElement('h1')
document.body.append(h1)
h1.className = 'head'
document.querySelector('.head').innerText = 'COVID_19 TRACKER'
h1.style.textAlign = 'center'

let div = document.createElement('div')
div.innerHTML = `<input type="text" id="input-txt">
<button type='button' onclick="yoo()">Search</button>
<div>
    <p id="active"></p>
    <p id="recovered"></p>
    <p id="deaths"></p>
</div>`
div.style.textAlign = 'center'
document.body.append(div)

async function yoo() {
  let inputData = document.getElementById('input-txt').value
  let req = await fetch(
    `https://api.covid19api.com/total/dayone/country/${inputData}`
  )
  let req1 = await req.json()

  let i = req1.length - 1
  let active = req1[i].Active
  document.getElementById('active').innerText = `Total Active Cases: ${active}`
  let recovered = req1[i].Recovered
  document.getElementById(
    'recovered'
  ).innerText = `Total Recovered Cases: ${recovered}`
  let deaths = req1[i].Deaths
  document.getElementById('deaths').innerText = `Total Deaths Cases: ${deaths}`
}
