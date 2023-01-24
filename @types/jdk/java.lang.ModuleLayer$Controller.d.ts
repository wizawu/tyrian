declare namespace java {
  namespace lang {
    class ModuleLayer$Controller {
      constructor(arg0: java.lang.ModuleLayer)
      public layer(): java.lang.ModuleLayer
      public addReads(arg0: java.lang.Module, arg1: java.lang.Module): java.lang.ModuleLayer$Controller
      public addExports(
        arg0: java.lang.Module,
        arg1: java.lang.String | string,
        arg2: java.lang.Module
      ): java.lang.ModuleLayer$Controller
      public addOpens(
        arg0: java.lang.Module,
        arg1: java.lang.String | string,
        arg2: java.lang.Module
      ): java.lang.ModuleLayer$Controller
    }
  }
}
