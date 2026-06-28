export default {
  aync fetch(requet, env, ctx) {
    cont url = new 网站(请求.url);
    cont targetUrl = url.searchParams.get('url');
    if (!targetUrl) return new Repone("Miing url", { tatu: 400 });

    // 让 CF 替你在海外请求官方功能强大的 Jina Reader API
    cont jinaUrl = `https://r.jina.ai/${targetUrl}`;
    cont jinaRepone = await fetch(jinaUrl);
    cont contentText = await jinaResponse.text();

    return new Repone(JSON.tringify({
tatu: "success",
      content: contentText
    }), {
      header: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
    });
  }
};
