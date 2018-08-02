declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
class TransformerImpl extends javax.xml.transform.Transformer implements com.sun.org.apache.xalan.internal.xsltc.DOMCache , javax.xml.transform.ErrorListener {
    protected constructor(arg0: java.util.Properties, arg1: int, arg2: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
    protected constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.Translet, arg1: java.util.Properties, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
    public isSecureProcessing(): boolean
    public setSecureProcessing(arg0: boolean): void
    public overrideDefaultParser(): boolean
    public setOverrideDefaultParser(arg0: boolean): void
    protected getTranslet(): com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet
    public isIdentity(): boolean
    public transform(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
    public getOutputHandler(arg0: javax.xml.transform.Result): com.sun.org.apache.xml.internal.serializer.SerializationHandler
    protected setDOM(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM): void
    protected getTransformerFactory(): com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl
    protected getTransletOutputHandlerFactory(): com.sun.org.apache.xalan.internal.xsltc.runtime.output.TransletOutputHandlerFactory
    public getErrorListener(): javax.xml.transform.ErrorListener
    public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
    public getOutputProperties(): java.util.Properties
    public getOutputProperty(arg0: java.lang.String | string): string
    public setOutputProperties(arg0: java.util.Properties): void
    public setOutputProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public transferOutputProperties(arg0: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
    public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public clearParameters(): void
    public getParameter(arg0: java.lang.String | string): java.lang.Object
    public getURIResolver(): javax.xml.transform.URIResolver
    public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
    public retrieveDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.Translet): com.sun.org.apache.xalan.internal.xsltc.DOM
    public error(arg0: javax.xml.transform.TransformerException): void
    public fatalError(arg0: javax.xml.transform.TransformerException): void
    public warning(arg0: javax.xml.transform.TransformerException): void
    public reset(): void
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