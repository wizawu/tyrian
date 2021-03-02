declare namespace java {
  namespace lang {

    class ProcessBuilder {
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.util.List<java.lang.String>)
      public constructor(...arg0: java.lang.String[])
      public command(arg0: java.util.List<java.lang.String>): java.lang.ProcessBuilder
      public command(...arg0: java.lang.String[]): java.lang.ProcessBuilder
      public command(): java.util.List<java.lang.String>
      public environment(): java.util.Map<java.lang.String,java.lang.String>
      environment(arg0: java.lang.String[]): java.lang.ProcessBuilder
      public directory(): java.io.File
      public directory(arg0: java.io.File): java.lang.ProcessBuilder
      public redirectInput(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
      public redirectOutput(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
      public redirectError(arg0: java.lang.ProcessBuilder$Redirect): java.lang.ProcessBuilder
      public redirectInput(arg0: java.io.File): java.lang.ProcessBuilder
      public redirectOutput(arg0: java.io.File): java.lang.ProcessBuilder
      public redirectError(arg0: java.io.File): java.lang.ProcessBuilder
      public redirectInput(): java.lang.ProcessBuilder$Redirect
      public redirectOutput(): java.lang.ProcessBuilder$Redirect
      public redirectError(): java.lang.ProcessBuilder$Redirect
      public inheritIO(): java.lang.ProcessBuilder
      public redirectErrorStream(): boolean
      public redirectErrorStream(arg0: boolean): java.lang.ProcessBuilder
      public start(): java.lang.Process
      public static startPipeline(arg0: java.util.List<java.lang.ProcessBuilder>): java.util.List<java.lang.Process>
    }

  }
}
