declare namespace javax {
  namespace xml {
    namespace crypto {
      namespace dsig {
        namespace dom {

          class DOMSignContext extends javax.xml.crypto.dom.DOMCryptoContext implements javax.xml.crypto.dsig.XMLSignContext {
            public constructor(arg0: java.security.Key, arg1: org.w3c.dom.Node)
            public constructor(arg0: java.security.Key, arg1: org.w3c.dom.Node, arg2: org.w3c.dom.Node)
            public constructor(arg0: javax.xml.crypto.KeySelector, arg1: org.w3c.dom.Node)
            public constructor(arg0: javax.xml.crypto.KeySelector, arg1: org.w3c.dom.Node, arg2: org.w3c.dom.Node)
            public setParent(arg0: org.w3c.dom.Node): void
            public setNextSibling(arg0: org.w3c.dom.Node): void
            public getParent(): org.w3c.dom.Node
            public getNextSibling(): org.w3c.dom.Node
          }

        }
      }
    }
  }
}
