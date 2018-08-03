declare namespace javax {
    namespace xml {
        namespace transform {
            abstract class TransformerFactory {
                protected constructor()
                public static newInstance(): javax.xml.transform.TransformerFactory
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.transform.TransformerFactory
                public abstract newTransformer(arg0: javax.xml.transform.Source): javax.xml.transform.Transformer
                public abstract newTransformer(): javax.xml.transform.Transformer
                public abstract newTemplates(arg0: javax.xml.transform.Source): javax.xml.transform.Templates
                public abstract getAssociatedStylesheet(arg0: javax.xml.transform.Source, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.transform.Source
                public abstract setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                public abstract getURIResolver(): javax.xml.transform.URIResolver
                public abstract setFeature(arg0: java.lang.String | string, arg1: boolean): void
                public abstract getFeature(arg0: java.lang.String | string): boolean
                public abstract setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public abstract getAttribute(arg0: java.lang.String | string): java.lang.Object
                public abstract setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                public abstract getErrorListener(): javax.xml.transform.ErrorListener
                public static class: java.lang.Class<any>
            }
        }
    }
}