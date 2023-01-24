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
          public addAttribute(
            arg0: java.lang.String | string,
            arg1: java.lang.String | string,
            arg2: java.lang.String | string
          ): void
          public removeAttribute(arg0: java.lang.String | string): void
          public clear(): void
          public getLength(): number
          public getName(arg0: number | java.lang.Integer): java.lang.String
          public getType(arg0: number | java.lang.Integer): java.lang.String
          public getValue(arg0: number | java.lang.Integer): java.lang.String
          public getType(arg0: java.lang.String | string): java.lang.String
          public getValue(arg0: java.lang.String | string): java.lang.String
        }
      }
    }
  }
}
