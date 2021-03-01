declare namespace java {
  namespace lang {
    namespace module {

      abstract class ModuleReference {

        protected constructor(arg0: java.lang.module.ModuleDescriptor, arg1: java.net.URI)
        public readonly descriptor(): java.lang.module.ModuleDescriptor
        public readonly location(): java.util.Optional<java.net.URI>
        public abstract open(): java.lang.module.ModuleReader
      }

    }
  }
}
