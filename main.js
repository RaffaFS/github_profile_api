$(document).ready(function(){
    const endPoint = 'https://api.github.com/users/raffafs'

    const avatar = $('.profile_avatar');
    const nome = $('.profile_name');
    const nick = $('.profile_username');
    const repositorios = $('.nRepositorios');
    const seguidores = $('.nSeguidores');
    const seguindo = $('.nSeguindo');
    const link = $('.profile_link');

    fetch(endPoint)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        avatar.attr('src', json.avatar_url);
        nome.html(json.name);
        nick.html(json.logi);
        repositorios.html(json.public_repos);
        seguidores.html(json.followers);
        seguindo.html(json.following);
        link.attr('href', json.html_url);
        link.attr('target', '_blank')
    })
    .catch(function(erro){
        alert("Ocorreu um erro")
    })
})