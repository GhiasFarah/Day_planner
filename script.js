// $('textarea').val(localStorage.//getItem($('textarea')./////// siblings('p')))
var timeBlock = $('.timeblock')
for(let i = 0; i < localStorage.length; i++){
    //console.log('.'+localStorage.key(i).trim())
    //$('console.log')
    //console.log(i)
    $('.'+localStorage.key(i).trim()).siblings('textarea').val(localStorage.getItem(localStorage.key(i)))
    //if(parseInt(localStorage.key(i)) == parseInt($//(timeBlock).text())){
        //console.log("'" + localStorage.key(i) + "'")
        //$('p').text($(localStorage.key))
        //console.log($(timeBlock).text())

    //}
}

$('#currentDay').text(moment().format('MMMM Do YYYY'))
var saveBtn = $('.saveBtn')
for (let i = 0; i < saveBtn.length; i++) {
    $('.saveBtn')[i].click( function(){
    
    localStorage.setItem($('.saveBtn')[i].siblings('p').text(), $('.saveBtn').siblings('textarea').val())
})
}


//alert(localStorage.length)