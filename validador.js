function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia').value, 10);
    const bairro = document.getElementById('bairro').value.trim();
    const escolha = document.getElementById('escolha').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const disponibilidade = document.getElementById('disponibilidade').value.trim();
    const vendasExperiencia = document.getElementById('vendasExperiencia').value;
    const estoqueExperiencia = document.getElementById('estoqueExperiencia').value;
    const conhecimentoSneakers = parseInt(document.getElementById('conhecimentoSneakers').value);
    const marcasPreferidas = document.getElementById('marcasPreferidas').value.trim();
    const caixaExperiencia = document.getElementById('caixaExperiencia').value;
    const atendimentoNivel = parseInt(document.getElementById('atendimentoNivel').value);
    const equipe = document.getElementById('equipe').value;
    const inventario = document.getElementById('inventario').value;
    const pdv = document.getElementById('pdv').value;
    const controle = document.getElementById('controle').value;
    const peso = document.getElementById('peso').value;
    const vendasSociais = document.getElementById('vendasSociais').value;
    const organizacao = parseInt(document.getElementById('organizacao').value);
    const metas = document.getElementById('metas').value;
    const embalagem = document.getElementById('embalagem').value;
    const marketplaces = document.getElementById('marketplaces').value;
    const fds = document.getElementById('fds').value;
    const cnh = document.getElementById('cnh').value;
    const obs = document.getElementById('obs').value.trim();

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return;
    }
    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('CPF inválido. Digite 11 números.');
        return;
    }
    if (isNaN(idade) || idade < 18) {
        alert('Você precisa ter 18 anos ou mais.');
        return;
    }
    if (!cidade) {
        alert('Preencha a cidade.');
        return;
    }
    if (!bairro) {
        alert('Preencha o bairro.');
        return;
    }
    if (!cep || cep.length !== 8 || isNaN(cep)) {
        alert('CEP inválido. Digite 8 números.');
        return;
    }
    if (isNaN(experiencia) || experiencia < 0) {
        alert('Experiência inválida.');
        return;
    }
    if (!escolha) {
        alert('Selecione uma área de interesse.');
        return;
    }

    if (!disponibilidade) {
        alert('Informe sua disponibilidade de horário.');
        return;
    }
    if (!vendasExperiencia) {
        alert('Informe se já trabalhou com vendas.');
        return;
    }
    if (!estoqueExperiencia) {
        alert('Informe se já trabalhou com estoque.');
        return;
    }
    if (isNaN(conhecimentoSneakers) || conhecimentoSneakers < 1 || conhecimentoSneakers > 5) {
        alert('Informe seu nível de conhecimento em sneakers (1 a 5).');
        return;
    }
    if (!marcasPreferidas) {
        alert('Cite algumas marcas de tênis que conhece.');
        return;
    }
    if (!caixaExperiencia) {
        alert('Informe se tem experiência com caixa.');
        return;
    }
    if (isNaN(atendimentoNivel) || atendimentoNivel < 1 || atendimentoNivel > 5) {
        alert('Informe seu nível de atendimento ao cliente (1 a 5).');
        return;
    }
    if (!equipe) {
        alert('Informe se trabalha bem em equipe.');
        return;
    }
    if (!inventario) {
        alert('Informe se já fez inventário.');
        return;
    }
    if (!pdv) {
        alert('Informe se sabe usar sistema de PDV.');
        return;
    }
    if (!controle) {
        alert('Informe se conhece controle de estoque.');
        return;
    }
    if (!peso) {
        alert('Informe se consegue levantar caixas pesadas.');
        return;
    }
    if (!vendasSociais) {
        alert('Informe se usa redes sociais para vendas.');
        return;
    }
    if (isNaN(organizacao) || organizacao < 1 || organizacao > 5) {
        alert('Informe seu nível de organização (1 a 5).');
        return;
    }
    if (!metas) {
        alert('Informe se já trabalhou com metas.');
        return;
    }
    if (!embalagem) {
        alert('Informe se sabe embalar e despachar produtos.');
        return;
    }
    if (!marketplaces) {
        alert('Informe se conhece marketplaces.');
        return;
    }
    if (!fds) {
        alert('Informe se pode trabalhar aos finais de semana.');
        return;
    }
    if (!cnh) {
        alert('Informe se possui CNH.');
        return;
    }

    console.log("Formulário validado com sucesso!");
    console.table({
        nome, cpf, idade, cidade, bairro, cep, experiencia, escolha,
        email, telefone, disponibilidade, vendasExperiencia, estoqueExperiencia,
        conhecimentoSneakers, marcasPreferidas, caixaExperiencia, atendimentoNivel,
        equipe, inventario, pdv, controle, peso, vendasSociais, organizacao,
        metas, embalagem, marketplaces, fds, cnh, obs
    });

    alert("Formulário enviado com sucesso!");
    console.log({ nome, cpf, cidade, bairro, cep, idade, experiencia, escolha });
}