import React, {
    Component
} from 'react';
import marked from 'marked'

let firstRender = "# Preview:\n\n<hr></hr>\n\n## Here you can write beautiful markdown and preview the results\n\nUseful ways of showing information using markdown:\n\n+ Show code examples in instructions with tags code <code></code> `<code></code>` or inside ``.\n\n+ Use blockquotes with content inside `<blockquote></bloquote>` tags.\n\n+ If you like creating images or use emoticons you also can use cute emoticons ʕ•́ᴥ•̀ʔっ\n\n+ ... and images <img src='https://fsymbols.com/thumbs/54.png'  width='45' height='35' />\n\n**Need help with syntaxe ? access:** [Markdown Guide!](https://www.markdownguide.org/)"

class Markdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( < div className = "markdown-conteiner" >
            <h1>Welcome to Martini Markdown</h1>
            <div id = "editor">
            <div id = "content"></div>
            <script src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js" ></script>
            <textarea id = "editor"
            name = "editor"
            rows = "10"
            cols = "60"
            form = "previewer"></textarea><form id = "previewer">
            <div dangerouslySetInnerHTML = {
                {
                    __html: marked(firstRender)
                }
            }/></form ></div>
            <footer>[ Created by Camila Bodack 2020 ]</footer>
            </div>);
        }
    }
    export default Markdown
