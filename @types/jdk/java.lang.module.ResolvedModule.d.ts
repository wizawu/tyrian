declare namespace java {
  namespace lang {
    namespace module {
      class ResolvedModule {
        constructor(arg0: java.lang.module.Configuration, arg1: java.lang.module.ModuleReference)
        public configuration(): java.lang.module.Configuration
        public reference(): java.lang.module.ModuleReference
        descriptor(): java.lang.module.ModuleDescriptor
        public name(): java.lang.String
        public reads(): java.util.Set<java.lang.module.ResolvedModule>
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public toString(): java.lang.String
      }
    }
  }
}
