declare namespace java {
  namespace lang {

    class StackWalker {
      static readonly DEFAULT_EMPTY_OPTION: java.util.EnumSet<java.lang.StackWalker$Option>
      readonly retainClassRef: boolean
      public static getInstance(): java.lang.StackWalker
      public static getInstance(arg0: java.lang.StackWalker$Option): java.lang.StackWalker
      public static getInstance(arg0: java.util.Set<java.lang.StackWalker$Option>): java.lang.StackWalker
      public static getInstance(arg0: java.util.Set<java.lang.StackWalker$Option>, arg1: int): java.lang.StackWalker
      public walk<T>(arg0: java.util.function$.Function<unknown,T>): T
      public forEach(arg0: java.util.function$.Consumer<unknown>): void
      public getCallerClass(): java.lang.Class<unknown>
      static newInstance(arg0: java.util.Set<java.lang.StackWalker$Option>, arg1: java.lang.StackWalker$ExtendedOption): java.lang.StackWalker
      estimateDepth(): int
      hasOption(arg0: java.lang.StackWalker$Option): boolean
      hasLocalsOperandsOption(): boolean
    }

  }
}
