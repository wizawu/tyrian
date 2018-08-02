declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class ElementState {
                                public rawName: string
                                public localName: string
                                public namespaceURI: string
                                public preserveSpace: boolean
                                public empty: boolean
                                public afterElement: boolean
                                public afterComment: boolean
                                public doCData: boolean
                                public unescaped: boolean
                                public inCData: boolean
                                public prefixes: java.util.Map<java.lang.String, java.lang.String>
                                public constructor()
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}