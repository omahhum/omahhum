const RAW_HTML_42 = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>42手眼完整結構化資料庫</title>
    <style>
        :root { --primary: #2c3e50; --accent: #8e44ad; --bg-light: #f9f9f9; }
        body { font-family: "Microsoft JhengHei", system-ui, sans-serif; max-width: 1000px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1 { border-bottom: 3px solid var(--accent); padding-bottom: 10px; }
        
        /* 網格佈局 */
        #database-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        
        /* 卡片樣式 */
        .hand-entry { 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            padding: 15px; 
            background: #fff; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            transition: transform 0.2s;
        }
        .hand-entry:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        
        /* 標題與標籤 */
        .hand-id { font-size: 0.9em; color: #666; font-weight: bold; background: #eee; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 5px; }
        .hand-name { margin: 5px 0 10px 0; color: var(--primary); font-size: 1.3em; }
        .dept-tag { font-size: 0.8em; color: #fff; background-color: var(--accent); padding: 2px 8px; border-radius: 10px; vertical-align: middle; }
        
        /* 內容區塊 */
        .info-row { margin-bottom: 8px; font-size: 0.95em; }
        .info-label { font-weight: bold; color: #555; }
        .mantra-box { 
            background: #eef; 
            border-left: 3px solid var(--accent); 
            padding: 8px; 
            font-family: "Courier New", monospace; 
            font-size: 0.9em; 
            margin-top: 10px;
            word-break: break-all;
        }
    </style>
</head>
<body>

    <h1>大悲心陀羅尼 42 手眼資料庫</h1>
    <p>資料格式說明：此頁面包含完整的 <code>data-</code> 屬性，供程式讀取。</p>

    <main id="database-container">

        <article class="hand-entry" 
            data-id="1" 
            data-name="如意珠手眼" 
            data-bodhisattva="摩尼與願觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Left" 
            data-table-index="L16" 
            data-function="富饒種種珍寶資具">
            <span class="hand-id">No. 1</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">如意珠手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>摩尼與願觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 16 (左理如意珠)</div>
            <div class="info-row"><span class="info-label">功用：</span>富饒種種珍寶資具</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲得富饒財寶者，應修摩尼法。唯隨所願求，執持寶物而來施與。</div>
            <div class="mantra-box">（一）唵嚩日羅(二合)達磨(金剛法)振多摩抳(如意珠)入嚩羅(光明)嚩羅泥(與願)娑嚩賀</div>
        </article>

        <article class="hand-entry" 
            data-id="2" 
            data-name="絹索手眼" 
            data-bodhisattva="持索觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Left" 
            data-table-index="L4" 
            data-function="種種不安。求安隱">
            <span class="hand-id">No. 2</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">絹索手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持索觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 4 (左理羂索形)</div>
            <div class="info-row"><span class="info-label">功用：</span>種種不安。求安隱</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲得安隱者，當修羂索法。左手屈臂握羂索。</div>
            <div class="mantra-box">（二）唵嚩日羅(二合)達磨(二)鉢娜麼(二合)播捨(蓮華索)吽(遍引義)地瑟咤(守護二合加持)薩網(二合無可反)摩含(二合於我)娑縛賀</div>
        </article>

        <article class="hand-entry" 
            data-id="3" 
            data-name="寶砵手眼" 
            data-bodhisattva="寶砵觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Both" 
            data-table-index="L20" 
            data-function="腹中諸病">
            <span class="hand-id">No. 3</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">寶砵手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>寶砵觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 20 (理智持寶鉢)</div>
            <div class="info-row"><span class="info-label">功用：</span>腹中諸病</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲療腹中病者，可修寶鉢法。但二手當齊上持寶鉢。</div>
            <div class="mantra-box">（三）唵嚩日羅(二合)達磨(金剛法)阿鳴娜羅輸藍(無腹中病)娑縛(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="4" 
            data-name="寶劍手眼" 
            data-bodhisattva="寶劍觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Right" 
            data-table-index="R4" 
            data-function="降伏一切魍魎鬼神">
            <span class="hand-id">No. 4</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">寶劍手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>寶劍觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 4 (右智寶劍手)</div>
            <div class="info-row"><span class="info-label">功用：</span>降伏一切魍魎鬼神</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲降伏魍魎鬼神者，應修寶劍法。唯右手執劍令竪。</div>
            <div class="mantra-box">（四）唵嚩日羅(二合)達磨(一)竭誐(劍也)薩嚩藍羅(二合)訶(一切鬼也)薩娑(二合)吒(破壞)娑嚩賀</div>
        </article>

        <article class="hand-entry" 
            data-id="5" 
            data-name="跋折羅手眼" 
            data-bodhisattva="金剛觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Right" 
            data-table-index="R12" 
            data-function="降伏一切天魔神">
            <span class="hand-id">No. 5</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">跋折羅手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>金剛觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 12 (右智持三劍/跋折羅手)</div>
            <div class="info-row"><span class="info-label">功用：</span>降伏一切天魔神</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲降伏大魔神者，當修嚩日囉(二合)法。但右手執三鈷杵。</div>
            <div class="mantra-box">（五）唵紇哩(二合入種子)縛日羅(二合)婆抳(執金剛)摩羅鉢羅(二合)摩[口*栗]夜(二合護魔)娑縛(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="6" 
            data-name="金剛杵手眼" 
            data-bodhisattva="持杵觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Left" 
            data-table-index="L12" 
            data-function="摧伏一切怨敵">
            <span class="hand-id">No. 6</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">金剛杵手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持杵觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 12 (左理金剛杵)</div>
            <div class="info-row"><span class="info-label">功用：</span>摧伏一切怨敵</div>
            <div class="info-row"><span class="info-label">描述：</span>若人為摧怨敵者，應修金剛杵法(獨股金剛)。右手執獨鈷杵當左肩如打勢。</div>
            <div class="mantra-box">（六）唵紇哩(二合入種子)縛日羅(二合)播儜(執金剛)薩嚩設咄嚕(一切怨加云云敵於加怨冬)娑破(二合)吒也(破壞)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="7" 
            data-name="施無畏手眼" 
            data-bodhisattva="除怖觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Right" 
            data-table-index="R16" 
            data-function="一切處。怖畏不安">
            <span class="hand-id">No. 7</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">施無畏手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>除怖觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 16 (右智施無畏)</div>
            <div class="info-row"><span class="info-label">功用：</span>一切處。怖畏不安</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲離怖畏者，當修施無畏法。唯舒右手垂五指現掌。</div>
            <div class="mantra-box">（七）唵縛日羅(二合)達磨(一)薩嚩他(引遍也)爾那爾那(勝能勝義)佩野曩奢那(除怨怖)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="8" 
            data-name="日摩尼手眼" 
            data-bodhisattva="日精觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Left" 
            data-table-index="L1" 
            data-function="眼闇無光明">
            <span class="hand-id">No. 8</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">日摩尼手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>日精觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 1 (左定持日輪)</div>
            <div class="info-row"><span class="info-label">功用：</span>眼闇無光明</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲眼闇求光明者，可修日摩尼法。唯左手拳上持火頗胝。</div>
            <div class="mantra-box">（八）唵嚩日羅(二合)達摩(一)阿儞地耶(日)入嚩(二合)羅(光明)儞乞蒭(二合眼也)娑嚩訶</div>
        </article>

        <article class="hand-entry" 
            data-id="9" 
            data-name="月摩尼手眼" 
            data-bodhisattva="月精觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Right" 
            data-table-index="R1" 
            data-function="熱毒病求清涼">
            <span class="hand-id">No. 9</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">月摩尼手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>月精觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 1 (右惠淨月輪)</div>
            <div class="info-row"><span class="info-label">功用：</span>熱毒病求清涼</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲消除一切熱惱者，應修月摩尼法。唯右手拳持水頗胝。</div>
            <div class="mantra-box">（九）唵嚩日羅(二合)達摩(一)戰陀耶(月)薩嚩(二引)娜(引)賀鉢羅(二合)捨弭(除一切熱惱)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="10" 
            data-name="寶弓手眼" 
            data-bodhisattva="持寶弓觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Left" 
            data-table-index="L5" 
            data-function="榮官益職">
            <span class="hand-id">No. 10</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">寶弓手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持寶弓觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 5 (左定寶弓形)</div>
            <div class="info-row"><span class="info-label">功用：</span>榮官益職</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲增榮官職者，當修寶弓法。但定惠手持橫弓。</div>
            <div class="mantra-box">（十）唵嚩日羅(二合)達磨建吒馱努沙(弓)阿鉢羅(二合)底訶多耶(無障礙)三摩地娑嚩賀</div>
        </article>

        <article class="hand-entry" 
            data-id="11" 
            data-name="寶箭手眼" 
            data-bodhisattva="速值觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Right" 
            data-table-index="R5" 
            data-function="諸善朋友早相逢">
            <span class="hand-id">No. 11</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">寶箭手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>速值觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 5 (右惠寶箭形)</div>
            <div class="info-row"><span class="info-label">功用：</span>諸善朋友早相逢</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲得善友者，當修寶箭法。唯右手持箭首，以箭尻置左手上。</div>
            <div class="mantra-box">（十一）唵嚩日羅(二合)達磨(一)羅怛那(二合)劍努(寶箭)曼殊(妙音)薩怛婆(二合眾生)曳醯曳呬(速來)羅(引)我羅我(愛染愛染)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="12" 
            data-name="楊柳手眼" 
            data-bodhisattva="藥王觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Right" 
            data-table-index="R14" 
            data-function="身上種種病">
            <span class="hand-id">No. 12</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">楊柳手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>藥王觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 14 (右智楊柳枝)</div>
            <div class="info-row"><span class="info-label">功用：</span>身上種種病</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲消除身上眾病者，當修楊柳枝藥法。唯右手執楊柳枝。</div>
            <div class="mantra-box">（十二）唵嚩日羅(二合)達磨(金剛法)陛煞(上)爾耶(二合藥也)羅惹耶(王)娑嚩(二合)賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="13" 
            data-name="白拂手眼" 
            data-bodhisattva="拂難觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Left" 
            data-table-index="L14" 
            data-function="除身上惡障難">
            <span class="hand-id">No. 13</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">白拂手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>拂難觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 14 (左理白拂形)</div>
            <div class="info-row"><span class="info-label">功用：</span>除身上惡障難</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲解脫一切障難者，當修白拂法。左手持白拂。</div>
            <div class="mantra-box">（十三）唵嚩日羅(二合)達磨(一)戍迦羅嚩囉弭也制曩(白拂)薩嚩魔羅娑耶(一切障難)尾目吃底(二合解脫)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="14" 
            data-name="胡瓶手眼" 
            data-bodhisattva="持瓶觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Right" 
            data-table-index="R8" 
            data-function="一切善和眷屬">
            <span class="hand-id">No. 14</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">胡瓶手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持瓶觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 8 (右智執胡瓶)</div>
            <div class="info-row"><span class="info-label">功用：</span>一切善和眷屬</div>
            <div class="info-row"><span class="info-label">描述：</span>若求善和眷屬者，當修胡瓶法。唯右手執胡瓶。</div>
            <div class="mantra-box">（十四）唵嚩日羅(二合)達磨(金剛法)摩賀昧怛哩(二合大慈)網娑嚩(發生)娑嚩(二合)賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="15" 
            data-name="榜排手眼" 
            data-bodhisattva="現怒觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Left" 
            data-table-index="L19" 
            data-function="辟除一切虎狼豺豹諸惡獸">
            <span class="hand-id">No. 15</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">榜排手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>現怒觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 19 (左定榜排形)</div>
            <div class="info-row"><span class="info-label">功用：</span>辟除一切虎狼豺豹諸惡獸</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲辟除一切惡獸者，當修榜棑法。唯左手向外持榜棑形。</div>
            <div class="mantra-box">（十五）唵嚩日羅(二合)達磨(金剛法)薩嚩沒哩(二合)始止(二合)迦薩跛曩俱羅(蝎蛇及鼠狼等)思孕(二合引)賀(師)尾也(二合引)伽羅(二合大虫)哩乞沙(二合猪熊)哆羅里乞沙(二合羆)遮末羅爾(引)尾鞞(摩竭魚等)吽(念恐怖)發吒(破壞)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="16" 
            data-name="銊斧手眼" 
            data-bodhisattva="鎮難觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Right" 
            data-table-index="R11" 
            data-function="一切時處。好離官難">
            <span class="hand-id">No. 16</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">銊斧手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>鎮難觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 11 (右惠鉞斧形)</div>
            <div class="info-row"><span class="info-label">功用：</span>一切時處。好離官難</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲離官難者，應修鉞斧法。但右手持鉞斧。</div>
            <div class="mantra-box">（十六）唵嚩日羅達磨(金剛法)跛羅戍(鉞斧)囉惹婆耶(王難)尾目乞底(解脫)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="17" 
            data-name="玉環手眼" 
            data-bodhisattva="持環觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Left" 
            data-table-index="L9" 
            data-function="男女僕使">
            <span class="hand-id">No. 17</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">玉環手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持環觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 9 (左定執玉環)</div>
            <div class="info-row"><span class="info-label">功用：</span>男女僕使</div>
            <div class="info-row"><span class="info-label">描述：</span>若求男女僕使者，須行玉環法。但左手當心持玉環。</div>
            <div class="mantra-box">（十七）唵嚩日羅(二合)達磨(金剛法)尾灑野(境界)獵馱(獲得)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="18" 
            data-name="白蓮手眼" 
            data-bodhisattva="分荼利觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Left" 
            data-table-index="L7" 
            data-function="種種功德">
            <span class="hand-id">No. 18</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">白蓮手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>分荼利觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 7 (左定白蓮華)</div>
            <div class="info-row"><span class="info-label">功用：</span>種種功德</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲成就功德者，當修白蓮法。唯左手執白蓮華。</div>
            <div class="mantra-box">（十八）唵嚩日羅(二合)達磨(一)參婆吠鉢娜磨(二合白華)尼履儞(入為華鬘以莊嚴法身)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="19" 
            data-name="青蓮手眼" 
            data-bodhisattva="見佛觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Right" 
            data-table-index="R7" 
            data-function="欲得往生十方淨土">
            <span class="hand-id">No. 19</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">青蓮手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>見佛觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 7 (右惠青蓮華)</div>
            <div class="info-row"><span class="info-label">功用：</span>欲得往生十方淨土</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲往生十方淨土者，當修青蓮法。但右手執青蓮華。</div>
            <div class="mantra-box">（十九）唵嚩日羅(二合)達磨(一)[寧*頁]羅鉢納麼(青蓮)嗢蘖跢(生)勃馱尾灑[怡-台+(盈-又+乂)](佛同)娑嚩賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="20" 
            data-name="寶鏡手眼" 
            data-bodhisattva="鏡智觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Left" 
            data-table-index="L18" 
            data-function="大智慧">
            <span class="hand-id">No. 20</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">寶鏡手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>鏡智觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 18 (左理寶鏡珠)</div>
            <div class="info-row"><span class="info-label">功用：</span>大智慧</div>
            <div class="info-row"><span class="info-label">描述：</span>若人求智惠者，應修寶鏡法。唯左手當心持寶鏡向外。</div>
            <div class="mantra-box">（二十）唵嚩日羅(二合)達磨(一)薩嚩悉地(成就一切)摩訶枳孃(二合)曩(大智惠)娑嚩(二合)賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="21" 
            data-name="紫蓮手眼" 
            data-bodhisattva="見蓮觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Right" 
            data-table-index="R6" 
            data-function="面見十方一切諸佛">
            <span class="hand-id">No. 21</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">紫蓮手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>見蓮觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 6 (右智紫蓮華)</div>
            <div class="info-row"><span class="info-label">功用：</span>面見十方一切諸佛</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲見諸如來者，當修紫蓮法。但右手執紫蓮華。</div>
            <div class="mantra-box">（二十一）唵嚩日羅(二合)達磨(一)乳(而主反)耄羅娑納納麼(二合紫蓮華)薩嚩勃馱(一切佛)枳攘(二合)曩(知也)娑乞蒭(二合)毘耶(見也)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="22" 
            data-name="寶篋手眼" 
            data-bodhisattva="見隱觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Left" 
            data-table-index="L10" 
            data-function="地中伏藏">
            <span class="hand-id">No. 22</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">寶篋手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>見隱觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 10 (左理寶篋形)</div>
            <div class="info-row"><span class="info-label">功用：</span>地中伏藏</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲見地中伏藏者，應修寶篋法。唯左手置寶篋。</div>
            <div class="mantra-box">（二十二）唵嚩日羅(二合)達磨(金剛法)斫具數(本眼也)伽咤耶(開也)阿鉢羅(二合)底訶哆耶(無障礙)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="23" 
            data-name="五色雲手眼" 
            data-bodhisattva="仙雲觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Right" 
            data-table-index="R2" 
            data-function="仙道">
            <span class="hand-id">No. 23</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">五色雲手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>仙雲觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 2 (右智五色雲)</div>
            <div class="info-row"><span class="info-label">功用：</span>仙道</div>
            <div class="info-row"><span class="info-label">描述：</span>若人為成就仙法者，當修五色雲法。但右手持五色雲。</div>
            <div class="mantra-box">（二十三）唵嚩日羅(二合)達磨(一)半者路婆銘伽(五色雲)悉馱(引)尾地也(二合)馱羅南(成就明仙者)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="24" 
            data-name="軍持手眼" 
            data-bodhisattva="禪定觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Left" 
            data-table-index="L8" 
            data-function="生梵天">
            <span class="hand-id">No. 24</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">軍持手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>禪定觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 8 (左理軍持瓶)</div>
            <div class="info-row"><span class="info-label">功用：</span>生梵天</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲生梵天者，應修軍持法。唯左手執軍持。</div>
            <div class="mantra-box">（二十四）唵嚩日羅(二合)達磨(一)娑嚩(二合)娑嚩(自性)沒羅(二合)訶摩(二合)抳提婆(梵天)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="25" 
            data-name="紅蓮手眼" 
            data-bodhisattva="天花觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Left" 
            data-table-index="L6" 
            data-function="往生諸天宮">
            <span class="hand-id">No. 25</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">紅蓮手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>天花觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 6 (左理紅蓮華)</div>
            <div class="info-row"><span class="info-label">功用：</span>往生諸天宮</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲生諸天宮殿者作紅蓮法。唯左手執蓮華。</div>
            <div class="mantra-box">（二十五）唵嚩日羅(二合)達磨(一)矩索薩婆鉢納麼(紅蓮)薩嚩提婆嗢蘖多(生一切天)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="26" 
            data-name="戟稍手眼" 
            data-bodhisattva="破賊觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Left" 
            data-table-index="L3" 
            data-function="辟除他方逆賊">
            <span class="hand-id">No. 26</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">戟稍手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>破賊觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 3 (左定執戟鞘)</div>
            <div class="info-row"><span class="info-label">功用：</span>辟除他方逆賊</div>
            <div class="info-row"><span class="info-label">描述：</span>若人為攝縛一切逆賊者，當修戟鞘法。但左手舉上執戟鞘長等身。</div>
            <div class="mantra-box">（二十六）唵嚩日羅(二合)達磨　阿尾捨(攝縛)主(引)羅婆耶(賊難)吽發吒娑嚩賀</div>
        </article>

        <article class="hand-entry" 
            data-id="27" 
            data-name="數珠手眼" 
            data-bodhisattva="念珠觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Right" 
            data-table-index="R19" 
            data-function="十方諸佛速來授手">
            <span class="hand-id">No. 27</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">數珠手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>念珠觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 19 (右惠持念珠)</div>
            <div class="info-row"><span class="info-label">功用：</span>十方諸佛速來授手</div>
            <div class="info-row"><span class="info-label">描述：</span>若為諸佛來授手者，應修數珠法。但右手捻數珠。</div>
            <div class="mantra-box">（二十七）唵嚩日羅(二合)達磨(一)薩嚩怛他(引)蘖多(引一切如來)入嚩(二合)羅(光明)布惹(手)母捺羅唅(印我)娑嚩(二合)賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="28" 
            data-name="寶螺手眼" 
            data-bodhisattva="持螺觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Left" 
            data-table-index="L13" 
            data-function="召呼一切諸天善神">
            <span class="hand-id">No. 28</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">寶螺手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>持螺觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 13 (左定寶螺形)</div>
            <div class="info-row"><span class="info-label">功用：</span>召呼一切諸天善神</div>
            <div class="info-row"><span class="info-label">描述：</span>若為召呼一切善神乞守護者，當修寶螺法。但左手臂持寶螺。</div>
            <div class="mantra-box">（二十八）唵嚩日羅(二合)達磨(一)摩訶達摩吃哩(二合大法音)暗(遍滿)薩嚩提婆曩誐(一切天龍)藥乞叉(二合)曳醯曳呬(速來)囉乞叉囉乞叉(二合)[牟*含](擁護)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="29" 
            data-name="髑髏手眼" 
            data-bodhisattva="縳鬼觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Right" 
            data-table-index="R18" 
            data-function="使令一切鬼神">
            <span class="hand-id">No. 29</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">髑髏手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>縳鬼觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 18 (右智髑髏杖)</div>
            <div class="info-row"><span class="info-label">功用：</span>使令一切鬼神</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲使令一切鬼神者，當作髑髏法。唯右手執髑髏杖。</div>
            <div class="mantra-box">（二十九）唵嚩日羅(二合)達磨(一)努史也磨薩頗馱囉(死人頭)薩嚩蘖羅(二合)訶(一切鬼)阿吠捨(攝縛)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="30" 
            data-name="寶鐸手眼" 
            data-bodhisattva="法音觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Left" 
            data-table-index="L15" 
            data-function="成就一切上妙梵音聲">
            <span class="hand-id">No. 30</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">寶鐸手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>法音觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 15 (左定寶鈴鐸)</div>
            <div class="info-row"><span class="info-label">功用：</span>成就一切上妙梵音聲</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲成就上妙梵音者，須作寶鐸法。但左手持寶金剛鈴。</div>
            <div class="mantra-box">（三十）唵嚩日羅(二合)達磨(金剛法)吠捨斛(鈴喜義)悉馱(引)沒羅(二合)訶磨(二合)吃哩(梵音成就)阿乞叉(二合)羅(無盡)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="31" 
            data-name="寶印手眼" 
            data-bodhisattva="智印觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Right" 
            data-table-index="R15" 
            data-function="口業辭辯巧妙">
            <span class="hand-id">No. 31</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">寶印手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>智印觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 15 (右惠寶智印)</div>
            <div class="info-row"><span class="info-label">功用：</span>口業辭辯巧妙</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲成就妙辯才者，當作寶印法。唯右手當心持寶印形。</div>
            <div class="mantra-box">（三十一）唵嚩日羅(二合)達磨(一)枳壤(二合)曩母捺羅(二合智印)尼濕嚩(二合)曩(種種也法)摩護那也(大廣也)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="32" 
            data-name="鐵鉤手眼" 
            data-bodhisattva="鉤召觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Left" 
            data-table-index="L11" 
            data-function="善神龍王常來擁護">
            <span class="hand-id">No. 32</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">鐵鉤手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>鉤召觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 11 (左定鐵鉤形)</div>
            <div class="info-row"><span class="info-label">功用：</span>善神龍王常來擁護</div>
            <div class="info-row"><span class="info-label">描述：</span>若為龍天善神來加護者作鐵鉤法。唯左手持鉤。</div>
            <div class="mantra-box">（三十二）唵嚩日羅(二合)達磨(金剛法)俱奢弱(鉤召)薩嚩提吠曩藝(於倪反引一切天龍)囉乞叉(二合)[牟*含](擁護)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="33" 
            data-name="錫杖手眼" 
            data-bodhisattva="慈杖觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Right" 
            data-table-index="R3" 
            data-function="慈悲覆護一切眾生">
            <span class="hand-id">No. 33</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">錫杖手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>慈杖觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 3 (右惠持錫杖)</div>
            <div class="info-row"><span class="info-label">功用：</span>慈悲覆護一切眾生</div>
            <div class="info-row"><span class="info-label">描述：</span>若人求慈悲心者作錫杖法。但右手執錫杖。</div>
            <div class="mantra-box">（三十三）唵嚩日羅(二合)達磨(金剛法)三昧耶(本誓)摩訶迦嚧抳迦(具大悲心)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="34" 
            data-name="蓮華合掌手眼" 
            data-bodhisattva="現敬觀自在菩薩" 
            data-dept="蓮華部" 
            data-method="敬愛法" 
            data-hand-side="Both" 
            data-table-index="R20" 
            data-function="一切眾生常相恭敬愛念">
            <span class="hand-id">No. 34</span> <span class="dept-tag">蓮華部・敬愛法</span>
            <h2 class="hand-name">蓮華合掌手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>現敬觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 20 (定惠蓮華合)</div>
            <div class="info-row"><span class="info-label">功用：</span>一切眾生常相恭敬愛念</div>
            <div class="info-row"><span class="info-label">描述：</span>若人求人愛者，當修合掌法。唯二手當心作蓮華合掌。</div>
            <div class="mantra-box">（三十四）唵嚩日羅(二合)達磨(金剛法)悉馱(引)嚩施迦羅(成就歡愛)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="35" 
            data-name="化佛手眼" 
            data-bodhisattva="不離觀自在菩薩" 
            data-dept="佛部" 
            data-method="息災法" 
            data-hand-side="Left" 
            data-table-index="L17" 
            data-function="生生之處不離諸佛邊">
            <span class="hand-id">No. 35</span> <span class="dept-tag">佛部・息災法</span>
            <h2 class="hand-name">化佛手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>不離觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 17 (左定化佛尊)</div>
            <div class="info-row"><span class="info-label">功用：</span>生生之處不離諸佛邊</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲不離諸佛邊者可修化佛法。唯左手掌上安置化佛。</div>
            <div class="mantra-box">（三十五）唵嚩日羅(二合)達磨(金剛法)悉馱(引)波羅蜜多(成就到彼岸)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="36" 
            data-name="宮殿手眼" 
            data-bodhisattva="大勢觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Left" 
            data-table-index="L2" 
            data-function="生生世世常在佛宮殿中">
            <span class="hand-id">No. 36</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">宮殿手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>大勢觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>左手 2 (左理持宮殿)</div>
            <div class="info-row"><span class="info-label">功用：</span>生生世世常在佛宮殿中。不處胎藏中受身</div>
            <div class="info-row"><span class="info-label">描述：</span>若欲不處胞胎身者，須作宮殿法。但左手持宮殿形。</div>
            <div class="mantra-box">（三十六）唵嚩日羅(二合)達磨(金剛法)薩嚩播野若賀野(滅一切惡趣)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="37" 
            data-name="寶經手眼" 
            data-bodhisattva="般若觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Right" 
            data-table-index="R10" 
            data-function="多聞廣學">
            <span class="hand-id">No. 37</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">寶經手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>般若觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 10 (右智寶經典)</div>
            <div class="info-row"><span class="info-label">功用：</span>多聞廣學</div>
            <div class="info-row"><span class="info-label">描述：</span>若人求多聞者，當修般若經法(是寶經也)。唯右手當心，持智印出生般若理趣經。</div>
            <div class="mantra-box">（三十七）唵嚩日羅(二合)達磨(一)鉢羅(二合)若(二冶反般若也此云智惠)素怛藍(二合經也)摩訶那也(大廣也)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="38" 
            data-name="金輪手眼" 
            data-bodhisattva="不轉觀自在菩薩" 
            data-dept="金剛部" 
            data-method="調伏法" 
            data-hand-side="Right" 
            data-table-index="R9" 
            data-function="菩提心常不退轉">
            <span class="hand-id">No. 38</span> <span class="dept-tag">金剛部・調伏法</span>
            <h2 class="hand-name">金輪手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>不轉觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 9 (右惠持金輪)</div>
            <div class="info-row"><span class="info-label">功用：</span>從今身至佛身。菩提心常不退轉</div>
            <div class="info-row"><span class="info-label">描述：</span>若為菩提心不退者應修不轉輪法。但右手持金輪。</div>
            <div class="mantra-box">（三十八）唵嚩日羅(二合)達磨(一)悉馱(引)菩地質跢(成就菩提心)嚩栗拏斫乞羅(金輪)阿薩拏(無動)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="39" 
            data-name="頂上化佛手眼" 
            data-bodhisattva="灌頂觀自在菩薩" 
            data-dept="羯磨部" 
            data-method="鉤召法" 
            data-hand-side="Right" 
            data-table-index="R17" 
            data-function="十方諸佛速來摩頂授記">
            <span class="hand-id">No. 39</span> <span class="dept-tag">羯磨部・鉤召法</span>
            <h2 class="hand-name">頂上化佛手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>灌頂觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 17 (右惠頂上佛)</div>
            <div class="info-row"><span class="info-label">功用：</span>十方諸佛速來摩頂授記</div>
            <div class="info-row"><span class="info-label">描述：</span>若人欲得一切如來灌頂授記者，應修頂上化佛法。唯二手拳頂上安置化佛。</div>
            <div class="mantra-box">（三十九）唵嚩日羅(二合)達磨(金剛法)毘詵者(灌頂)鉢囉底車(授也)菩馱達羅抳(佛地)娑嚩(二合)賀(引)</div>
        </article>

        <article class="hand-entry" 
            data-id="40" 
            data-name="蒲桃手眼" 
            data-bodhisattva="護地觀自在菩薩" 
            data-dept="摩尼部" 
            data-method="增益法" 
            data-hand-side="Right" 
            data-table-index="R13" 
            data-function="果蓏諸穀稼">
            <span class="hand-id">No. 40</span> <span class="dept-tag">摩尼部・增益法</span>
            <h2 class="hand-name">蒲桃手眼</h2>
            <div class="info-row"><span class="info-label">本尊：</span>護地觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>右手 13 (右惠蒲桃形)</div>
            <div class="info-row"><span class="info-label">功用：</span>果蓏諸穀稼</div>
            <div class="info-row"><span class="info-label">描述：</span>若為成就五穀等一切食物者，應修蒲桃法。唯左手持蒲桃。</div>
            <div class="mantra-box">（四十）唵嚩日羅(二合)達磨(一)悉馱(引)達羅抳娑羅娑羅(地味成就也)娑嚩(二合)賀</div>
        </article>

        <article class="hand-entry" 
            data-id="41" 
            data-name="甘露手" 
            data-bodhisattva="甘露王菩薩" 
            data-dept="特殊部" 
            data-method="特殊手眼" 
            data-hand-side="Special" 
            data-table-index="N/A" 
            data-function="清涼">
            <span class="hand-id">No. 41</span> <span class="dept-tag">特殊手眼</span>
            <h2 class="hand-name">甘露手</h2>
            <div class="info-row"><span class="info-label">本尊：</span>甘露王菩薩、甘露觀自在菩薩</div>
            <div class="info-row"><span class="info-label">手位：</span>不分左右</div>
            <div class="info-row"><span class="info-label">功用：</span>若為一切飢渴有情及諸餓鬼得清涼者</div>
            <div class="info-row"><span class="info-label">描述：</span>當於甘露手。</div>
            <div class="mantra-box">真言：「唵(引)素嚕素嚕鉢羅(二合)素嚕鉢羅(二合)素嚕素嚕素嚕野薩嚩(二合)賀」</div>
        </article>

        <article class="hand-entry" 
            data-id="42" 
            data-name="總攝千臂手" 
            data-bodhisattva="千手千眼觀自在菩薩本尊" 
            data-dept="特殊部" 
            data-method="總攝法" 
            data-hand-side="Special" 
            data-table-index="N/A" 
            data-function="伏魔">
            <span class="hand-id">No. 42</span> <span class="dept-tag">特殊手眼</span>
            <h2 class="hand-name">總攝千臂手</h2>
            <div class="info-row"><span class="info-label">本尊：</span>千手千眼觀自在菩薩本尊</div>
            <div class="info-row"><span class="info-label">手位：</span>總攝千臂印</div>
            <div class="info-row"><span class="info-label">功用：</span>此印能伏三千大千世界魔怨</div>
            <div class="info-row"><span class="info-label">描述：</span>總攝千臂印。</div>
            <div class="mantra-box">呪曰：「怛姪他(一)　婆盧枳帝(二)　攝伐囉耶(三)　薩婆咄(徒訥切)瑟吒(四)　烏訶耶彌(五)　莎訶(六)」</div>
        </article>

    </main>

    <script>
        // 範例：如何透過 JavaScript 讀取所有資料
        console.log("資料庫載入中...");
        const hands = [];
        document.querySelectorAll('.hand-entry').forEach(el => {
            hands.push({
                id: el.dataset.id,
                name: el.dataset.name,
                bodhisattva: el.dataset.bodhisattva,
                dept: el.dataset.dept,
                function: el.dataset.function
            });
        });
        console.log("已解析 " + hands.length + " 筆手眼資料:", hands);
    </script>
</body>
</html>
`;