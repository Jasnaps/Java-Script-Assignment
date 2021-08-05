function Display()
{
    let Name = document.querySelector('#name').value;
    let City = document.querySelector('#city').value;
    document.querySelector('#dis').innerHTML=`<p>${Name}<br/>${City}</p>`;
    
}