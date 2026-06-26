function executarSistema(){
    // Dados de entrada
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const cupom = document.getElementById("inputCupom").value === "true";

    const valor = Number(
        localStorage.getItem("precoSelecionado")
    );

    // Dados de saída
    const msg = document.getElementById("mensagem-autorizacao");
    const lista = document.getElementById("lista-estoque");
    const relatorio = document.getElementById("relatorio-final");

    // Validação para campos vazios
    if (!nome || isNaN(idade)) {
        alert("coloque seus dados!");
        return;
    }

    if (idade >= 16) {

        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    
        const nomeProduto = localStorage.getItem("produtoSelecionado");
    
        const produto = produtos.find(p => p.nome === nomeProduto);
    
        if (produto && produto.estoque > 0) {
            produto.estoque--;
        }
    
        localStorage.setItem("produtos", JSON.stringify(produtos));
    
    
    
        // Desconto
        let valorFinal = (valor > 500 || cupom) ? valor *0.85 : valor;

   

    relatorio.style.display = "block";
    relatorio.innerHTML = `
    <strong> Resumo do Pedido </strong><br>
    Cliente: ${nome} <br>
    Total Original: R$ ${valor.toFixed(2)} <br>
    <strong> Total com Desconto: R$ ${valorFinal.toFixed(2)} </strong>
    `;
 }else{
        msg.innerText = "Venda bloqueada: Menor de 16 anos.";
        msg.style.color = "#ff4444";
        relatorio.style.display = "none";
        lista.innerHTML = "";
    };

}
