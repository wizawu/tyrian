declare namespace jdk {
  namespace dynalink {

    class DynamicLinkerFactory {
      public constructor()
      public setClassLoader(arg0: java.lang.ClassLoader): void
      public setPrioritizedLinkers(arg0: java.util.List<jdk.dynalink.linker.GuardingDynamicLinker>): void
      public setPrioritizedLinkers(...vargs: (jdk.dynalink.linker.GuardingDynamicLinker | jdk.dynalink.linker.GuardingDynamicLinker$$lambda)[]): void
      public setPrioritizedLinker(arg0: jdk.dynalink.linker.GuardingDynamicLinker | jdk.dynalink.linker.GuardingDynamicLinker$$lambda): void
      public setFallbackLinkers(arg0: java.util.List<jdk.dynalink.linker.GuardingDynamicLinker>): void
      public setFallbackLinkers(...vargs: (jdk.dynalink.linker.GuardingDynamicLinker | jdk.dynalink.linker.GuardingDynamicLinker$$lambda)[]): void
      public setSyncOnRelink(arg0: boolean | java.lang.Boolean): void
      public setUnstableRelinkThreshold(arg0: number | java.lang.Integer): void
      public setPrelinkTransformer(arg0: jdk.dynalink.linker.GuardedInvocationTransformer | jdk.dynalink.linker.GuardedInvocationTransformer$$lambda): void
      public setAutoConversionStrategy(arg0: jdk.dynalink.linker.MethodTypeConversionStrategy | jdk.dynalink.linker.MethodTypeConversionStrategy$$lambda): void
      public setInternalObjectsFilter(arg0: jdk.dynalink.linker.MethodHandleTransformer | jdk.dynalink.linker.MethodHandleTransformer$$lambda): void
      public createLinker(): jdk.dynalink.DynamicLinker
      public getAutoLoadingErrors(): java.util.List<java.util.ServiceConfigurationError>
    }

  }
}
