const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs'
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147'
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145'
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany'
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz'
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367'
}
]

function drawPackages() {
    let template = ''
    currentPackages.forEach(p => template += `<div class="col-2 btn btn-outline-dark">${p.to}</div>`)
    let packagesElm = document.getElementById('packages')
    packagesElm.innerHTML = template
}
drawPackages()

function filterHeavy() {
    currentPackages = packages.filter(p => p.heavy == true)
    console.log('heavy', currentPackages);
    drawPackages()
}

function filterPriority() {
    currentPackages = packages.filter(p => p.priority == true)
    console.log('priority', currentPackages)
    drawPackages()
}

function filterTo() {
    currentPackages = packages.filter(p => p.to == '')
    console.log('to', currentPackages)
    drawPackages()
}

function filterFragile() {
    currentPackages = packages.filter(p => p.fragile == true)
    console.log('fragile', currentPackages)
    drawPackages()
}

function filterTrackingNumber() {
    currentPackages = packages.filter(p => p.trackingNumber = '')
    console.log('trackingNumber', currentPackages)
    drawPackages()
}

function missing() {
    let missing = allPackages.find(p => p.to == to)
    console.log('missing', to, missing)
    if (missing.trackingNumber == undefined) {

    }
}

