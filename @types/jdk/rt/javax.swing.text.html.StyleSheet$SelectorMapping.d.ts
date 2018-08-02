declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class StyleSheet$SelectorMapping implements java.io.Serializable {
                    public constructor(arg0: int)
                    public getSpecificity(): int
                    public setStyle(arg0: javax.swing.text.Style): void
                    public getStyle(): javax.swing.text.Style
                    public getChildSelectorMapping(arg0: java.lang.String | string, arg1: boolean): javax.swing.text.html.StyleSheet$SelectorMapping
                    protected createChildSelectorMapping(arg0: int): javax.swing.text.html.StyleSheet$SelectorMapping
                    protected getChildSpecificity(arg0: java.lang.String | string): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}