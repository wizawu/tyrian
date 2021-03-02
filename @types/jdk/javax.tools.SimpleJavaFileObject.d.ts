declare namespace javax {
  namespace tools {

    class SimpleJavaFileObject implements javax.tools.JavaFileObject {
      protected readonly uri: java.net.URI
      protected readonly kind: javax.tools.JavaFileObject$Kind
      protected constructor(arg0: java.net.URI, arg1: javax.tools.JavaFileObject$Kind)
      public toUri(): java.net.URI
      public getName(): java.lang.String
      public openInputStream(): java.io.InputStream
      public openOutputStream(): java.io.OutputStream
      public openReader(arg0: boolean): java.io.Reader
      public getCharContent(arg0: boolean): java.lang.CharSequence
      public openWriter(): java.io.Writer
      public getLastModified(): long
      public delete(): boolean
      public getKind(): javax.tools.JavaFileObject$Kind
      public isNameCompatible(arg0: java.lang.String, arg1: javax.tools.JavaFileObject$Kind): boolean
      public getNestingKind(): javax.lang.model.element.NestingKind
      public getAccessLevel(): javax.lang.model.element.Modifier
      public toString(): java.lang.String
    }

  }
}
