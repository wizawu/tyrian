declare namespace javax {
  namespace tools {

    class ToolProvider {
      public constructor()
      public static getSystemJavaCompiler(): javax.tools.JavaCompiler
      public static getSystemDocumentationTool(): javax.tools.DocumentationTool
      public static getSystemToolClassLoader(): java.lang.ClassLoader
    }

  }
}
