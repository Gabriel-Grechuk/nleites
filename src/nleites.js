(function () {
  const leites = [
    "https://nutritotal.com.br/publico-geral/wp-content/uploads/2023/11/consumo-de-leite-de-vaca.png.webp",
    "https://midias.em.com.br/_midias/jpg/2024/06/30/1200x720/1_copo_de_leite-38564104.jpg",
    "https://i0.wp.com/portalcontexto.com.br/wp-content/uploads/2020/08/Comendo-leite.gif",
    "https://media1.tenor.com/m/ZpTHz81BL_AAAAAd/leite-receita.gif",
    "https://claudiapedrosa.wordpress.com/wp-content/uploads/2011/12/gif-leite1.gif",
    "https://wickbold.com.br/wp-content/uploads/2023/11/Quais-sao-os-tipos-de-leite-de-vaca-.webp",
    "https://s2-g1.glbimg.com/d4rnbnuodTxCmEUjTIgOz9YNkEY=/0x0:1200x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/N/m/aQXLbLRrulZz0VJa4ZZA/foto2.jpg",
    "https://forbes.com.br/wp-content/uploads/2023/05/agro_leite_31mai23_manusapon-kasosod_Guettyimages.jpg",
    "https://ichef.bbci.co.uk/ace/ws/660/cpsprodpb/698A/production/_109981072_83487af7-eed0-46da-b3bc-691d9f4fae1a.jpg.webp",
    "https://lojacvscesta.com.br/cdn/shop/products/caixa-italac_420x360.png",
    "https://receitadaboa.com.br/wp-content/uploads/2024/07/Imagem-ilustrativa-de-leite-condensado.webp",
    "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/06/22/815872291-beneficios-do-leite.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/aa/2021/10/11/leite-em-po-composto-lacteo-formula-infantil-1633991063427_v2_900x506.jpg",
    "https://media.giphy.com/media/ZOPnASEU8dQWc/giphy.gif",
    "https://i.makeagif.com/media/1-19-2017/87K1aj.gif",
    "https://http2.mlstatic.com/D_NQ_NP_2X_766720-MLB54357118388_032023-F-promoco-italac-1cx-creme-de-leite-1cx-leite-condensado.webp",
    "https://static.congressoemfoco.com.br/CONG_MATERIA/2025/05/09/cfa67c_CONG_MATERIA_800eduardoleitejpeg.jpg",
    "https://i.gifer.com/2ro8.gif",
    "https://data.textstudio.com/output/sample/animated/6/5/1/9/leite-4-9156.gif",
    "https://pande.com.br/2021/wp-content/uploads/2019/05/gif-piracanjuba-todos.gif",
    "https://pande.com.br/2021/wp-content/uploads/2019/05/Piracanjuba-1440X800.png.webp",
    "https://i0.wp.com/portalcontexto.com.br/wp-content/uploads/2020/08/giphy.gif",
    "https://piracanjuba-health-nutrition-prd.s3.sa-east-1.amazonaws.com/content/image/qual-a-fun%C3%A7%C3%A3o-dos-estabilizantes-do-leite-64.png",
    "https://foodsafetybrazil.org/wp-content/uploads/2023/12/sa_1703631598_Formol_no_Leite_nao-1850x1308.png",
    "https://wallpapers.com/images/hd/milk-background-nn4uqvyma4v02ltr.jpg",
    "https://nutritotal.com.br/pro/wp-content/uploads/2019/03/nota1-leite-pode-reduzir-glicemia-novosite.jpg.webp",
  ];

  function nLeites() {
    const images = document.getElementsByTagName("img");
    for (const image of images) {
      const randomIndex = Math.round((Math.random() % leites.length) * 10);
      image.src = leites[randomIndex];
    }
  }

  nLeites();
  document.addEventListener("scrollend", () => nLeites());
})();
