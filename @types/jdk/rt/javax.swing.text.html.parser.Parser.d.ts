declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    class Parser implements javax.swing.text.html.parser.DTDConstants {
                        protected dtd: javax.swing.text.html.parser.DTD
                        protected strict: boolean
                        public constructor(arg0: javax.swing.text.html.parser.DTD)
                        protected getCurrentLine(): int
                        protected makeTag(arg0: javax.swing.text.html.parser.Element, arg1: boolean): javax.swing.text.html.parser.TagElement
                        protected makeTag(arg0: javax.swing.text.html.parser.Element): javax.swing.text.html.parser.TagElement
                        protected getAttributes(): javax.swing.text.SimpleAttributeSet
                        protected flushAttributes(): void
                        protected handleText(arg0: char[]): void
                        protected handleTitle(arg0: char[]): void
                        protected handleComment(arg0: char[]): void
                        protected handleEOFInComment(): void
                        protected handleEmptyTag(arg0: javax.swing.text.html.parser.TagElement): void
                        protected handleStartTag(arg0: javax.swing.text.html.parser.TagElement): void
                        protected handleEndTag(arg0: javax.swing.text.html.parser.TagElement): void
                        protected handleError(arg0: int, arg1: java.lang.String | string): void
                        protected error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                        protected error(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected error(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected error(arg0: java.lang.String | string): void
                        protected startTag(arg0: javax.swing.text.html.parser.TagElement): void
                        protected endTag(arg0: boolean): void
                        protected markFirstTime(arg0: javax.swing.text.html.parser.Element): void
                        public parseDTDMarkup(): string
                        protected parseMarkupDeclarations(arg0: java.lang.StringBuffer): boolean
                        public parse(arg0: java.io.Reader): void
                        protected getCurrentPos(): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}