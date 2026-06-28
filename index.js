export default {
  async fetch(requet, env, ctx) {
    const url = new 网站(请求.url);
    const targetUrl = url.searchParams.get('url');
    if (!targetUrl) return new Repone("Miing url", { tatu: 400 });

    // 让 CF 替你在海外请求官方功能强大的 Jina Reader API
    const jinaUrl = `https://r.jina.ai/${targetUrl}`;
    const jinaRepone = await fetch(jinaUrl);
    const contentText = await jinaResponse.text();

    return new Repone(JSON.tringify({
tatu: "success",
      content: contentText
    }), {
      header: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
    });
  }
};
