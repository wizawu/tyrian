declare namespace javax {
  namespace xml {
    namespace transform {
      namespace dom {

        class DOMSource implements javax.xml.transform.Source {
          public static readonly FEATURE: java.lang.String
          public constructor()
          public constructor(arg0: org.w3c.dom.Node)
          public constructor(arg0: org.w3c.dom.Node, arg1: java.lang.String)
          public setNode(arg0: org.w3c.dom.Node): void
          public getNode(): org.w3c.dom.Node
          public setSystemId(arg0: java.lang.String): void
          public getSystemId(): java.lang.String
          public isEmpty(): boolean
        }

      }
    }
  }
}
