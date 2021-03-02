declare namespace java {
  namespace lang {
    namespace module {

      class ModuleDescriptor$Builder {
        readonly name: java.lang.String
        readonly strict: boolean
        readonly modifiers: java.util.Set<java.lang.module.ModuleDescriptor$Modifier>
        readonly open: boolean
        readonly automatic: boolean
        readonly packages: java.util.Set<java.lang.String>
        readonly requires: java.util.Map<java.lang.String,java.lang.module.ModuleDescriptor$Requires>
        readonly exports: java.util.Map<java.lang.String,java.lang.module.ModuleDescriptor$Exports>
        readonly opens: java.util.Map<java.lang.String,java.lang.module.ModuleDescriptor$Opens>
        readonly uses: java.util.Set<java.lang.String>
        readonly provides: java.util.Map<java.lang.String,java.lang.module.ModuleDescriptor$Provides>
        version: java.lang.module.ModuleDescriptor$Version
        rawVersionString: java.lang.String
        mainClass: java.lang.String
        static readonly $assertionsDisabled: boolean
        constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: java.util.Set<java.lang.module.ModuleDescriptor$Modifier>)
        packages(): java.util.Set<java.lang.String>
        public requires(arg0: java.lang.module.ModuleDescriptor$Requires): java.lang.module.ModuleDescriptor$Builder
        public requires(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>, arg1: java.lang.String | string, arg2: java.lang.module.ModuleDescriptor$Version): java.lang.module.ModuleDescriptor$Builder
        requires(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>, arg1: java.lang.String | string, arg2: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public requires(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>, arg1: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public requires(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public exports(arg0: java.lang.module.ModuleDescriptor$Exports): java.lang.module.ModuleDescriptor$Builder
        public exports(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>, arg1: java.lang.String | string, arg2: java.util.Set<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public exports(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>, arg1: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public exports(arg0: java.lang.String | string, arg1: java.util.Set<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public exports(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public opens(arg0: java.lang.module.ModuleDescriptor$Opens): java.lang.module.ModuleDescriptor$Builder
        public opens(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>, arg1: java.lang.String | string, arg2: java.util.Set<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public opens(arg0: java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>, arg1: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public opens(arg0: java.lang.String | string, arg1: java.util.Set<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public opens(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public uses(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public provides(arg0: java.lang.module.ModuleDescriptor$Provides): java.lang.module.ModuleDescriptor$Builder
        public provides(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public packages(arg0: java.util.Set<java.lang.String>): java.lang.module.ModuleDescriptor$Builder
        public version(arg0: java.lang.module.ModuleDescriptor$Version): java.lang.module.ModuleDescriptor$Builder
        public version(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public mainClass(arg0: java.lang.String | string): java.lang.module.ModuleDescriptor$Builder
        public build(): java.lang.module.ModuleDescriptor
      }

    }
  }
}
