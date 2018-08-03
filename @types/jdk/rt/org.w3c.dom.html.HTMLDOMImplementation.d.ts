declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLDOMImplementation extends org.w3c.dom.DOMImplementation {
                    createHTMLDocument(arg0: java.lang.String | string): org.w3c.dom.html.HTMLDocument
                }
                interface HTMLDOMImplementation$$Lambda extends org.w3c.dom.DOMImplementation {
                    (arg0: java.lang.String | string): org.w3c.dom.html.HTMLDocument
                }
            }
        }
    }
}