declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ls {
                interface LSSerializer {
                    getDomConfig(): org.w3c.dom.DOMConfiguration
                    getNewLine(): string
                    setNewLine(arg0: java.lang.String | string): void
                    getFilter(): org.w3c.dom.ls.LSSerializerFilter
                    setFilter(arg0: org.w3c.dom.ls.LSSerializerFilter): void
                    write(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.ls.LSOutput): boolean
                    writeToURI(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): boolean
                    writeToString(arg0: org.w3c.dom.Node): string
                }
            }
        }
    }
}