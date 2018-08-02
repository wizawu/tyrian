declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                class SmartTransformerFactoryImpl extends javax.xml.transform.sax.SAXTransformerFactory {
                                    public constructor()
                                    public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                                    public getErrorListener(): javax.xml.transform.ErrorListener
                                    public getAttribute(arg0: java.lang.String | string): java.lang.Object
                                    public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                    public getFeature(arg0: java.lang.String | string): boolean
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