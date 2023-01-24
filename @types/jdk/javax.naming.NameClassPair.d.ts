declare namespace javax {
  namespace naming {
    class NameClassPair implements java.io.Serializable {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: boolean | java.lang.Boolean
      )
      public getClassName(): java.lang.String
      public getName(): java.lang.String
      public setName(arg0: java.lang.String | string): void
      public setClassName(arg0: java.lang.String | string): void
      public isRelative(): boolean
      public setRelative(arg0: boolean | java.lang.Boolean): void
      public getNameInNamespace(): java.lang.String
      public setNameInNamespace(arg0: java.lang.String | string): void
      public toString(): java.lang.String
    }
  }
}
