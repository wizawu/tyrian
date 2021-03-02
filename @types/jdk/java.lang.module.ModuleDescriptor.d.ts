declare namespace java {
  namespace lang {
    namespace module {

      class ModuleDescriptor implements java.lang.Comparable<java.lang.module.ModuleDescriptor> {
        static readonly $assertionsDisabled: boolean
        constructor(arg0: java.lang.String, arg1: java.lang.module.ModuleDescriptor$Version, arg2: java.util.Set<java.lang.module.ModuleDescriptor$Modifier>, arg3: java.util.Set<java.lang.module.ModuleDescriptor$Requires>, arg4: java.util.Set<java.lang.module.ModuleDescriptor$Exports>, arg5: java.util.Set<java.lang.module.ModuleDescriptor$Opens>, arg6: java.util.Set<java.lang.String>, arg7: java.util.Set<java.lang.module.ModuleDescriptor$Provides>, arg8: java.util.Set<java.lang.String>, arg9: java.lang.String, arg10: int, arg11: boolean)
        public name(): java.lang.String
        public modifiers(): java.util.Set<java.lang.module.ModuleDescriptor$Modifier>
        public isOpen(): boolean
        public isAutomatic(): boolean
        public requires(): java.util.Set<java.lang.module.ModuleDescriptor$Requires>
        public exports(): java.util.Set<java.lang.module.ModuleDescriptor$Exports>
        public opens(): java.util.Set<java.lang.module.ModuleDescriptor$Opens>
        public uses(): java.util.Set<java.lang.String>
        public provides(): java.util.Set<java.lang.module.ModuleDescriptor$Provides>
        public version(): java.util.Optional<java.lang.module.ModuleDescriptor$Version>
        public rawVersion(): java.util.Optional<java.lang.String>
        public toNameAndVersion(): java.lang.String
        public mainClass(): java.util.Optional<java.lang.String>
        public packages(): java.util.Set<java.lang.String>
        public compareTo(arg0: java.lang.module.ModuleDescriptor): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        public static newModule(arg0: java.lang.String, arg1: java.util.Set<java.lang.module.ModuleDescriptor$Modifier>): java.lang.module.ModuleDescriptor$Builder
        public static newModule(arg0: java.lang.String): java.lang.module.ModuleDescriptor$Builder
        public static newOpenModule(arg0: java.lang.String): java.lang.module.ModuleDescriptor$Builder
        public static newAutomaticModule(arg0: java.lang.String): java.lang.module.ModuleDescriptor$Builder
        public static read(arg0: java.io.InputStream, arg1: java.util.function$.Supplier<java.util.Set<java.lang.String>>): java.lang.module.ModuleDescriptor
        public static read(arg0: java.io.InputStream): java.lang.module.ModuleDescriptor
        public static read(arg0: java.nio.ByteBuffer, arg1: java.util.function$.Supplier<java.util.Set<java.lang.String>>): java.lang.module.ModuleDescriptor
        public static read(arg0: java.nio.ByteBuffer): java.lang.module.ModuleDescriptor
        public compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
