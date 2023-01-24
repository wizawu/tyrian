declare namespace javax {
  namespace tools {
    class ForwardingJavaFileObject<F extends javax.tools.JavaFileObject>
      extends javax.tools.ForwardingFileObject<F>
      implements javax.tools.JavaFileObject
    {
      protected constructor(arg0: F)
      public getKind(): javax.tools.JavaFileObject$Kind
      public isNameCompatible(arg0: java.lang.String | string, arg1: javax.tools.JavaFileObject$Kind): boolean
      public getNestingKind(): javax.lang.model.element.NestingKind
      public getAccessLevel(): javax.lang.model.element.Modifier
    }
  }
}
