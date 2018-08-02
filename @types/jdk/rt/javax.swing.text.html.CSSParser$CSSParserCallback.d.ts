declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                interface CSSParser$CSSParserCallback {
                    handleImport(arg0: java.lang.String | string): void
                    handleSelector(arg0: java.lang.String | string): void
                    startRule(): void
                    handleProperty(arg0: java.lang.String | string): void
                    handleValue(arg0: java.lang.String | string): void
                    endRule(): void
                }
            }
        }
    }
}