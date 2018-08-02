declare namespace org {
    namespace xml {
        namespace sax {
            interface Attributes {
                getLength(): int
                getURI(arg0: int): string
                getLocalName(arg0: int): string
                getQName(arg0: int): string
                getType(arg0: int): string
                getValue(arg0: int): string
                getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                getIndex(arg0: java.lang.String | string): int
                getType(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                getType(arg0: java.lang.String | string): string
                getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                getValue(arg0: java.lang.String | string): string
            }
        }
    }
}