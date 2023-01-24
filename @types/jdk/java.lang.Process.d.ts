declare namespace java {
  namespace lang {
    abstract class Process {
      public constructor()
      public abstract getOutputStream(): java.io.OutputStream
      public abstract getInputStream(): java.io.InputStream
      public abstract getErrorStream(): java.io.InputStream
      public abstract waitFor(): number
      public waitFor(arg0: number | java.lang.Long, arg1: java.util.concurrent.TimeUnit): boolean
      public abstract exitValue(): number
      public abstract destroy(): void
      public destroyForcibly(): java.lang.Process
      public supportsNormalTermination(): boolean
      public isAlive(): boolean
      public pid(): number
      public onExit(): java.util.concurrent.CompletableFuture<java.lang.Process>
      public toHandle(): java.lang.ProcessHandle
      public info(): java.lang.ProcessHandle$Info
      public children(): java.util.stream.Stream<java.lang.ProcessHandle>
      public descendants(): java.util.stream.Stream<java.lang.ProcessHandle>
    }
  }
}
