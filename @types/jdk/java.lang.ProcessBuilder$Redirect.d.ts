declare namespace java {
  namespace lang {

    abstract class ProcessBuilder$Redirect {
      public static readonly PIPE: java.lang.ProcessBuilder$Redirect
      public static readonly INHERIT: java.lang.ProcessBuilder$Redirect
      public static readonly DISCARD: java.lang.ProcessBuilder$Redirect
      static readonly $assertionsDisabled: boolean
      public abstract type(): java.lang.ProcessBuilder$Redirect$Type
      public file(): java.io.File
      append(): boolean
      public static from(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
      public static to(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
      public static appendTo(arg0: java.io.File): java.lang.ProcessBuilder$Redirect
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
    }

  }
}
