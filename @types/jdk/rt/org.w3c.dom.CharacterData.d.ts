declare namespace org {
    namespace w3c {
        namespace dom {
            interface CharacterData extends org.w3c.dom.Node {
                getData(): string
                setData(arg0: java.lang.String | string): void
                getLength(): int
                substringData(arg0: int, arg1: int): string
                appendData(arg0: java.lang.String | string): void
                insertData(arg0: int, arg1: java.lang.String | string): void
                deleteData(arg0: int, arg1: int): void
                replaceData(arg0: int, arg1: int, arg2: java.lang.String | string): void
            }
        }
    }
}