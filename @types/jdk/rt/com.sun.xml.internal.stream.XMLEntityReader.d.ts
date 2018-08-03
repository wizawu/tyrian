declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    abstract class XMLEntityReader implements com.sun.org.apache.xerces.internal.xni.XMLLocator {
                        public constructor()
                        public abstract setEncoding(arg0: java.lang.String | string): void
                        public abstract getEncoding(): string
                        public abstract getCharacterOffset(): int
                        public abstract setVersion(arg0: java.lang.String | string): void
                        public abstract getVersion(): string
                        public abstract isExternal(): boolean
                        public abstract peekChar(): int
                        public abstract scanChar(): int
                        public abstract scanNmtoken(): string
                        public abstract scanName(): string
                        public abstract scanQName(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
                        public abstract scanContent(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
                        public abstract scanLiteral(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.XMLString): int
                        public abstract scanData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
                        public abstract skipChar(arg0: int): boolean
                        public abstract skipSpaces(): boolean
                        public abstract skipString(arg0: java.lang.String | string): boolean
                        public abstract registerListener(arg0: com.sun.xml.internal.stream.XMLBufferListener): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}