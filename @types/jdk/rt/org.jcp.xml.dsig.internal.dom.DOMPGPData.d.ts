declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
                    namespace dom {
                        class DOMPGPData extends org.jcp.xml.dsig.internal.dom.DOMStructure implements javax.xml.crypto.dsig.keyinfo.PGPData {
                            public constructor(arg0: byte[], arg1: java.util.List<javax.xml.crypto.XMLStructure>)
                            public constructor(arg0: byte[], arg1: byte[], arg2: java.util.List<javax.xml.crypto.XMLStructure>)
                            public constructor(arg0: org.w3c.dom.Element)
                            public getKeyId(): byte[]
                            public getKeyPacket(): byte[]
                            public getExternalElements(): java.util.List
                            public marshal(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: javax.xml.crypto.dom.DOMCryptoContext): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}