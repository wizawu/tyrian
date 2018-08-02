declare namespace org {
    namespace xml {
        namespace sax {
            interface AttributeList {
                getLength(): int
                getName(arg0: int): string
                getType(arg0: int): string
                getValue(arg0: int): string
                getType(arg0: java.lang.String | string): string
                getValue(arg0: java.lang.String | string): string
            }
        }
    }
}