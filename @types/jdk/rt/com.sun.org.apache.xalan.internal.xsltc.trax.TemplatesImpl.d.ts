declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                class TemplatesImpl implements javax.xml.transform.Templates , java.io.Serializable {
                                    public static readonly DESERIALIZE_TRANSLET: string
                                    protected constructor(arg0: byte[][], arg1: java.lang.String | string, arg2: java.util.Properties, arg3: int, arg4: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
                                    protected constructor(arg0: java.lang.Class[], arg1: java.lang.String | string, arg2: java.util.Properties, arg3: int, arg4: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
                                    public constructor()
                                    public overrideDefaultParser(): boolean
                                    public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                                    public getTransletIndex(): int
                                    protected setTransletName(arg0: java.lang.String | string): void
                                    protected getTransletName(): string
                                    public newTransformer(): javax.xml.transform.Transformer
                                    public getOutputProperties(): java.util.Properties
                                    public getStylesheetDOM(): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public setStylesheetDOM(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}