declare namespace org {
  namespace xml {
    namespace sax {
      namespace ext {

        class Attributes2Impl extends org.xml.sax.helpers.AttributesImpl implements org.xml.sax.ext.Attributes2 {

          public constructor()
          public constructor(arg0: org.xml.sax.Attributes)
          public isDeclared(arg0: int): boolean
          public isDeclared(arg0: java.lang.String, arg1: java.lang.String): boolean
          public isDeclared(arg0: java.lang.String): boolean
          public isSpecified(arg0: int): boolean
          public isSpecified(arg0: java.lang.String, arg1: java.lang.String): boolean
          public isSpecified(arg0: java.lang.String): boolean
          public setAttributes(arg0: org.xml.sax.Attributes): void
          public addAttribute(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): void
          public removeAttribute(arg0: int): void
          public setDeclared(arg0: int, arg1: boolean): void
          public setSpecified(arg0: int, arg1: boolean): void
        }

      }
    }
  }
}
