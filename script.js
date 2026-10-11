document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',event=>{const target=link.getAttribute('href');if(target==='#'){event.preventDefault();}})});
