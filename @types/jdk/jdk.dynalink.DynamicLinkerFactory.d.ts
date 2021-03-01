declare namespace jdk {
  namespace dynalink {

    class DynamicLinkerFactory {

      public constructor()
      public setClassLoader(arg0: java.lang.ClassLoader): void
      public setPrioritizedLinkers(arg0: java.util.List<jdk.dynalink.linker.GuardingDynamicLinker>): void
      public setPrioritizedLinkers(...arg0: jdk.dynalink.linker.GuardingDynamicLinker[]): void
      public setPrioritizedLinker(arg0: jdk.dynalink.linker.GuardingDynamicLinker): void
      public setFallbackLinkers(arg0: java.util.List<jdk.dynalink.linker.GuardingDynamicLinker>): void
      public setFallbackLinkers(...arg0: jdk.dynalink.linker.GuardingDynamicLinker[]): void
      public setSyncOnRelink(arg0: boolean): void
      public setUnstableRelinkThreshold(arg0: int): void
      public setPrelinkTransformer(arg0: jdk.dynalink.linker.GuardedInvocationTransformer): void
      public setAutoConversionStrategy(arg0: jdk.dynalink.linker.MethodTypeConversionStrategy): void
      public setInternalObjectsFilter(arg0: jdk.dynalink.linker.MethodHandleTransformer): void
      public createLinker(): jdk.dynalink.DynamicLinker
      public getAutoLoadingErrors(): java.util.List<java.util.ServiceConfigurationError>
    }

  }
}
