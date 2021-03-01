declare namespace javax {
  namespace tools {

    interface JavaFileObject extends javax.tools.FileObject {

      getKind(): javax.tools.JavaFileObject$Kind
      isNameCompatible(arg0: java.lang.String, arg1: javax.tools.JavaFileObject$Kind): boolean
      getNestingKind(): javax.lang.model.element.NestingKind
      getAccessLevel(): javax.lang.model.element.Modifier
    }

  }
}
