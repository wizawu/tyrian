declare namespace javax {
    namespace xml {
        namespace transform {
            abstract class Transformer {
                protected constructor()
                public reset(): void
                public abstract transform(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
                public abstract setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public abstract getParameter(arg0: java.lang.String | string): java.lang.Object
                public abstract clearParameters(): void
                public abstract setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                public abstract getURIResolver(): javax.xml.transform.URIResolver
                public abstract setOutputProperties(arg0: java.util.Properties): void
                public abstract getOutputProperties(): java.util.Properties
                public abstract setOutputProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public abstract getOutputProperty(arg0: java.lang.String | string): string
                public abstract setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                public abstract getErrorListener(): javax.xml.transform.ErrorListener
                public static class: java.lang.Class<any>
            }
        }
    }
}