declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    abstract class XMLEntityReader implements com.sun.org.apache.xerces.internal.xni.XMLLocator {
                        public constructor()
                        public setEncoding(arg0: java.lang.String | string): void
                        public getEncoding(): string
                        public getCharacterOffset(): int
                        public setVersion(arg0: java.lang.String | string): void
                        public getVersion(): string
                        public isExternal(): boolean
                        public peekChar(): int
                        public scanChar(): int
                        public scanNmtoken(): string
                        public scanName(): string
                        public scanQName(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
                        public scanContent(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
                        public scanLiteral(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.XMLString): int
                        public scanData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
                        public skipChar(arg0: int): boolean
                        public skipSpaces(): boolean
                        public skipString(arg0: java.lang.String | string): boolean
                        public registerListener(arg0: com.sun.xml.internal.stream.XMLBufferListener): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}