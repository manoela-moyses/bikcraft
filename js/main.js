document.documentElement.classList.add("js");

if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    time: 5000
  });

  new SimpleSlide({
    slide: "portfolio",
    nav: true,
    time: 5000
  });
}

if (window.SimpleAnime) {
  new SimpleAnime({
  });
}

if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp",
    button: "#submit",
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o e-mail contato@bikcraft.com.</p></div>",
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso!</h2><p>Em breve entraremos em contato com você.</p></div>"
  });
}
