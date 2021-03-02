declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class NamespaceSupport {
          public static readonly XMLNS: java.lang.String
          public static readonly NSDECL: java.lang.String
          public constructor()
          public reset(): void
          public pushContext(): void
          public popContext(): void
          public declarePrefix(arg0: java.lang.String, arg1: java.lang.String): boolean
          public processName(arg0: java.lang.String, arg1: java.lang.String[], arg2: boolean): java.lang.String[]
          public getURI(arg0: java.lang.String): java.lang.String
          public getPrefixes(): java.util.Enumeration<java.lang.String>
          public getPrefix(arg0: java.lang.String): java.lang.String
          public getPrefixes(arg0: java.lang.String): java.util.Enumeration<java.lang.String>
          public getDeclaredPrefixes(): java.util.Enumeration<java.lang.String>
          public setNamespaceDeclUris(arg0: boolean): void
          public isNamespaceDeclUris(): boolean
        }

      }
    }
  }
}
