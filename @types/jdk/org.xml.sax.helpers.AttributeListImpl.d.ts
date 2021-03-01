declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class AttributeListImpl implements org.xml.sax.AttributeList {

          names: java.util.List<java.lang.String>
          types: java.util.List<java.lang.String>
          values: java.util.List<java.lang.String>
          public constructor()
          public constructor(arg0: org.xml.sax.AttributeList)
          public setAttributeList(arg0: org.xml.sax.AttributeList): void
          public addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          public removeAttribute(arg0: java.lang.String): void
          public clear(): void
          public getLength(): int
          public getName(arg0: int): java.lang.String
          public getType(arg0: int): java.lang.String
          public getValue(arg0: int): java.lang.String
          public getType(arg0: java.lang.String): java.lang.String
          public getValue(arg0: java.lang.String): java.lang.String
        }

      }
    }
  }
}
