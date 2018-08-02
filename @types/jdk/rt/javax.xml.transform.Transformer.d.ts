declare namespace javax {
    namespace xml {
        namespace transform {
            abstract class Transformer {
                protected constructor()
                public reset(): void
                public transform(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.Result): void
                public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getParameter(arg0: java.lang.String | string): java.lang.Object
                public clearParameters(): void
                public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
                public getURIResolver(): javax.xml.transform.URIResolver
                public setOutputProperties(arg0: java.util.Properties): void
                public getOutputProperties(): java.util.Properties
                public setOutputProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public getOutputProperty(arg0: java.lang.String | string): string
                public setErrorListener(arg0: javax.xml.transform.ErrorListener): void
                public getErrorListener(): javax.xml.transform.ErrorListener
                public static class: java.lang.Class<any>
            }
        }
    }
}