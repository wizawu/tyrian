declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class AttributesImpl implements org.xml.sax.Attributes {
          length: int
          data: java.lang.String[]
          public constructor()
          public constructor(arg0: org.xml.sax.Attributes)
          public getLength(): number
          public getURI(arg0: number | java.lang.Integer): java.lang.String
          public getLocalName(arg0: number | java.lang.Integer): java.lang.String
          public getQName(arg0: number | java.lang.Integer): java.lang.String
          public getType(arg0: number | java.lang.Integer): java.lang.String
          public getValue(arg0: number | java.lang.Integer): java.lang.String
          public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): number
          public getIndex(arg0: java.lang.String | string): number
          public getType(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
          public getType(arg0: java.lang.String | string): java.lang.String
          public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
          public getValue(arg0: java.lang.String | string): java.lang.String
          public clear(): void
          public setAttributes(arg0: org.xml.sax.Attributes): void
          public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
          public setAttribute(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): void
          public removeAttribute(arg0: number | java.lang.Integer): void
          public setURI(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          public setLocalName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          public setQName(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          public setType(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          public setValue(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        }

      }
    }
  }
}
