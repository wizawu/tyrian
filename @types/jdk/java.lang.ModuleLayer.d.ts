declare namespace java {
  namespace lang {
    class ModuleLayer {
      public defineModulesWithOneLoader(
        arg0: java.lang.module.Configuration,
        arg1: java.lang.ClassLoader
      ): java.lang.ModuleLayer
      public defineModulesWithManyLoaders(
        arg0: java.lang.module.Configuration,
        arg1: java.lang.ClassLoader
      ): java.lang.ModuleLayer
      public defineModules(
        arg0: java.lang.module.Configuration,
        arg1: java.util.function$.Function<java.lang.String, java.lang.ClassLoader>
      ): java.lang.ModuleLayer
      public static defineModulesWithOneLoader(
        arg0: java.lang.module.Configuration,
        arg1: java.util.List<java.lang.ModuleLayer>,
        arg2: java.lang.ClassLoader
      ): java.lang.ModuleLayer$Controller
      public static defineModulesWithManyLoaders(
        arg0: java.lang.module.Configuration,
        arg1: java.util.List<java.lang.ModuleLayer>,
        arg2: java.lang.ClassLoader
      ): java.lang.ModuleLayer$Controller
      public static defineModules(
        arg0: java.lang.module.Configuration,
        arg1: java.util.List<java.lang.ModuleLayer>,
        arg2: java.util.function$.Function<java.lang.String, java.lang.ClassLoader>
      ): java.lang.ModuleLayer$Controller
      public configuration(): java.lang.module.Configuration
      public parents(): java.util.List<java.lang.ModuleLayer>
      layers(): java.util.stream.Stream<java.lang.ModuleLayer>
      public modules(): java.util.Set<java.lang.Module>
      public findModule(arg0: java.lang.String | string): java.util.Optional<java.lang.Module>
      public findLoader(arg0: java.lang.String | string): java.lang.ClassLoader
      public toString(): java.lang.String
      public static empty(): java.lang.ModuleLayer
      public static boot(): java.lang.ModuleLayer
      getServicesCatalog(): jdk.internal.module.ServicesCatalog
      bindToLoader(arg0: java.lang.ClassLoader): void
      static layers(arg0: java.lang.ClassLoader): java.util.stream.Stream<java.lang.ModuleLayer>
    }
  }
}
