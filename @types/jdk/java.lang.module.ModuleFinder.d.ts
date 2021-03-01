declare namespace java {
  namespace lang {
    namespace module {

      interface ModuleFinder {

        find(arg0: java.lang.String): java.util.Optional<java.lang.module.ModuleReference>
        findAll(): java.util.Set<java.lang.module.ModuleReference>
        ofSystem(): java.lang.module.ModuleFinder
        of(...arg0: java.nio.file.Path[]): java.lang.module.ModuleFinder
        compose(...arg0: java.lang.module.ModuleFinder[]): java.lang.module.ModuleFinder
      }

    }
  }
}
