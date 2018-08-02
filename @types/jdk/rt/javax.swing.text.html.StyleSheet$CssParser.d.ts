declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class StyleSheet$CssParser implements javax.swing.text.html.CSSParser$CSSParserCallback {
                    public parseDeclaration(arg0: java.lang.String | string): javax.swing.text.AttributeSet
                    public parseDeclaration(arg0: java.io.Reader): javax.swing.text.AttributeSet
                    public parse(arg0: java.net.URL, arg1: java.io.Reader, arg2: boolean, arg3: boolean): void
                    public handleImport(arg0: java.lang.String | string): void
                    public handleSelector(arg0: java.lang.String | string): void
                    public startRule(): void
                    public handleProperty(arg0: java.lang.String | string): void
                    public handleValue(arg0: java.lang.String | string): void
                    public endRule(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}