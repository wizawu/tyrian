declare namespace jdk {
  namespace dynalink {
    namespace beans {

      class BeansLinker implements jdk.dynalink.linker.GuardingDynamicLinker {
        public constructor()
        public constructor(arg0: jdk.dynalink.beans.MissingMemberHandlerFactory | jdk.dynalink.beans.MissingMemberHandlerFactory$$lambda)
        public getLinkerForClass(arg0: java.lang.Class<unknown>): jdk.dynalink.linker.TypeBasedGuardingDynamicLinker
        static getStaticLinkerForClass(arg0: java.lang.Class<unknown>): jdk.dynalink.linker.TypeBasedGuardingDynamicLinker
        public static isDynamicMethod(arg0: java.lang.Object | any): boolean
        public static isDynamicConstructor(arg0: java.lang.Object | any): boolean
        public static getConstructorMethod(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string): java.lang.Object
        public static getReadableInstancePropertyNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public static getWritableInstancePropertyNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public static getInstanceMethodNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public static getReadableStaticPropertyNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public static getWritableStaticPropertyNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public static getStaticMethodNames(arg0: java.lang.Class<unknown>): java.util.Set<java.lang.String>
        public getGuardedInvocation(arg0: jdk.dynalink.linker.LinkRequest, arg1: jdk.dynalink.linker.LinkerServices): jdk.dynalink.linker.GuardedInvocation
      }

    }
  }
}
