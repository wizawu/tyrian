declare namespace org {
  namespace xml {
    namespace sax {
      namespace helpers {

        class AttributesImpl implements org.xml.sax.Attributes {
          length: int
          data: java.lang.String[]
          public constructor()
          public constructor(arg0: org.xml.sax.Attributes)
          public getLength(): int
          public getURI(arg0: int): java.lang.String
          public getLocalName(arg0: int): java.lang.String
          public getQName(arg0: int): java.lang.String
          public getType(arg0: int): java.lang.String
          public getValue(arg0: int): java.lang.String
          public getIndex(arg0: java.lang.String, arg1: java.lang.String): int
          public getIndex(arg0: java.lang.String): int
          public getType(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
          public getType(arg0: java.lang.String): java.lang.String
          public getValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
          public getValue(arg0: java.lang.String): java.lang.String
          public clear(): void
          public setAttributes(arg0: org.xml.sax.Attributes): void
          public addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): void
          public setAttribute(arg0: int, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String): void
          public removeAttribute(arg0: int): void
          public setURI(arg0: int, arg1: java.lang.String): void
          public setLocalName(arg0: int, arg1: java.lang.String): void
          public setQName(arg0: int, arg1: java.lang.String): void
          public setType(arg0: int, arg1: java.lang.String): void
          public setValue(arg0: int, arg1: java.lang.String): void
        }

      }
    }
  }
}
