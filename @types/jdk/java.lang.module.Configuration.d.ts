declare namespace java {
  namespace lang {
    namespace module {
      class Configuration {
        static readonly $assertionsDisabled: boolean
        targetPlatform(): java.lang.String
        constructor(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.util.Map<java.lang.String, java.util.Set<java.lang.String>>
        )
        public resolve(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.lang.module.ModuleFinder,
          arg2: java.util.Collection<java.lang.String>
        ): java.lang.module.Configuration
        public resolveAndBind(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.lang.module.ModuleFinder,
          arg2: java.util.Collection<java.lang.String>
        ): java.lang.module.Configuration
        static resolveAndBind(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.util.Collection<java.lang.String>,
          arg2: java.io.PrintStream
        ): java.lang.module.Configuration
        public static resolve(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.util.List<java.lang.module.Configuration>,
          arg2: java.lang.module.ModuleFinder,
          arg3: java.util.Collection<java.lang.String>
        ): java.lang.module.Configuration
        public static resolveAndBind(
          arg0: java.lang.module.ModuleFinder,
          arg1: java.util.List<java.lang.module.Configuration>,
          arg2: java.lang.module.ModuleFinder,
          arg3: java.util.Collection<java.lang.String>
        ): java.lang.module.Configuration
        public static empty(): java.lang.module.Configuration
        public parents(): java.util.List<java.lang.module.Configuration>
        public modules(): java.util.Set<java.lang.module.ResolvedModule>
        public findModule(arg0: java.lang.String | string): java.util.Optional<java.lang.module.ResolvedModule>
        descriptors(): java.util.Set<java.lang.module.ModuleDescriptor>
        reads(arg0: java.lang.module.ResolvedModule): java.util.Set<java.lang.module.ResolvedModule>
        configurations(): java.util.stream.Stream<java.lang.module.Configuration>
        public toString(): java.lang.String
      }
    }
  }
}
