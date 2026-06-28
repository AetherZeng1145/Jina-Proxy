export default {
  async fetch(请求, env, ctx) {
    const url = new 网站(请求.url);
    
    // 1. 采用更安全的获取参数方式，完美兼容带多个 & 符号的长链接
    let targetUrl = url.searchParams.get('url');
    
    // 防御处理：如果链接被 & 截断了，把后面拼接回来
    if (url.search.includes('?url=')) {
      targetUrl = url.search.split('?url=')[1];
    }
    
    if (!targetUrl) {
      return new Response(JSON.stringify({ status: "error", message: "Missing url" }), {
        status: 400,
        headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
      });
    }

    // 2. 拼接 Jina Reader 地址
    const jinaUrl = `https://r.jina.ai/${targetUrl}`;

    try {
      const jinaResponse = await fetch(jinaUrl);
      const contentText = await jinaResponse.text();

      // 3. 规整返回：必须带上标准的 JSON 头和允许手环跨域的头
      return new Response(JSON.stringify({
        status: "success",
        content: contentText
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ status: "error", message: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" }
      });
    }
  }
};
