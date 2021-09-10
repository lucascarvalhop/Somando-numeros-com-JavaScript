<script>
        a.addEventListener('click', clicar){
            tn1 = window.document.querySelector('.txt1')
            tn2 = window.document.querySelector('.txt2')
            res = window.document.querySelector('.res')
            n1 = Number(tn1.value)
            n2 = Number(tn2.value)
            s = n1 + n2
            res.innerText = `A soma entre ${n1} e ${n2} é igual a ${s}`
        }
    </script>