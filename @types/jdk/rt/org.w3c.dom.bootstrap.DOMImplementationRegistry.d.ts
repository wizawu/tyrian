declare namespace org {
    namespace w3c {
        namespace dom {
            namespace bootstrap {
                class DOMImplementationRegistry {
                    public static readonly PROPERTY: string
                    public static newInstance(): org.w3c.dom.bootstrap.DOMImplementationRegistry
                    public getDOMImplementation(arg0: java.lang.String | string): org.w3c.dom.DOMImplementation
                    public getDOMImplementationList(arg0: java.lang.String | string): org.w3c.dom.DOMImplementationList
                    public addSource(arg0: org.w3c.dom.DOMImplementationSource): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}