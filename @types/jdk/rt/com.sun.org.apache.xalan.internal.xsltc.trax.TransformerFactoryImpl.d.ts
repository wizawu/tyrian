declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                class TransformerFactoryImpl extends javax.xml.transform.sax.SAXTransformerFactory implements com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader , javax.xml.transform.ErrorListener {
                                    public static readonly TRANSLET_NAME: string
                                    public static readonly DESTINATION_DIRECTORY: string
                                    public static readonly PACKAGE_NAME: string
                                    public static readonly JAR_NAME: string
                                    public static readonly GENERATE_TRANSLET: string
                                    public static readonly AUTO_TRANSLET: string
                                    public static readonly USE_CLASSPATH: string
                                    public static readonly DEBUG: string
                                    public static readonly ENABLE_INLINING: string
                                    public static readonly INDENT_NUMBER: string
                                    protected static readonly DEFAULT_TRANSLET_NAME: string
                                    public constructor()
                                    public getExternalExtensionsMap(): java.util.Map<java.lang.String, java.lang.Class>
                                    public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                                    public getErrorListener(): javax.xml.transform.ErrorListener
                                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                                    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getFeature(arg0: java.lang.String | string): boolean
                                    public overrideDefaultParser(): boolean
                                    public getJdkXmlFeatures(): jdk.xml.internal.JdkXmlFeatures
                                    public getURIResolver(): javax.xml.transform.URIResolver
                                    public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                                    public getAssociatedStylesheet(arg0: javax.xml.transform.Source, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.transform.Source
                                    public newTransformer(): javax.xml.transform.Transformer
                                    public newTransformer(arg0: javax.xml.transform.Source): javax.xml.transform.Transformer
                                    public newTemplates(arg0: javax.xml.transform.Source): javax.xml.transform.Templates
                                    public newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler
                                    public newTransformerHandler(): javax.xml.transform.sax.TransformerHandler
                                    public newTransformerHandler(arg0: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler
                                    public newTransformerHandler(arg0: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler
                                    public newXMLFilter(arg0: javax.xml.transform.Source): org.xml.sax.XMLFilter
                                    public newXMLFilter(arg0: javax.xml.transform.Templates): org.xml.sax.XMLFilter
                                    public error(arg0: javax.xml.transform.TransformerException): void
                                    public fatalError(arg0: javax.xml.transform.TransformerException): void
                                    public warning(arg0: javax.xml.transform.TransformerException): void
                                    public loadSource(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC): org.xml.sax.InputSource
                                    protected createNewDTMManagerInstance(): com.sun.org.apache.xalan.internal.xsltc.dom.XSLTCDTMManager
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