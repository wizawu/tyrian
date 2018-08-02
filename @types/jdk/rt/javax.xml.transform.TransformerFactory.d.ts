declare namespace javax {
    namespace xml {
        namespace transform {
            abstract class TransformerFactory {
                protected constructor()
                public static newInstance(): javax.xml.transform.TransformerFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.transform.TransformerFactory
                public newTransformer(arg0: javax.xml.transform.Source): javax.xml.transform.Transformer
                public newTransformer(): javax.xml.transform.Transformer
                public newTemplates(arg0: javax.xml.transform.Source): javax.xml.transform.Templates
                public getAssociatedStylesheet(arg0: javax.xml.transform.Source, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.transform.Source
                public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                public getURIResolver(): javax.xml.transform.URIResolver
                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                public getFeature(arg0: java.lang.String | string): boolean
                public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getAttribute(arg0: java.lang.String | string): java.lang.Object
                public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                public getErrorListener(): javax.xml.transform.ErrorListener
                public static class: java.lang.Class<any>
            }
        }
    }
}