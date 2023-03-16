declare namespace java {
  namespace lang {
    interface ProcessHandle extends java.lang.Comparable<java.lang.ProcessHandle> {
      pid(): number
      of?(arg0: number | java.lang.Long): java.util.Optional<java.lang.ProcessHandle>
      current?(): java.lang.ProcessHandle
      parent(): java.util.Optional<java.lang.ProcessHandle>
      children(): java.util.stream.Stream<java.lang.ProcessHandle>
      descendants(): java.util.stream.Stream<java.lang.ProcessHandle>
      allProcesses?(): java.util.stream.Stream<java.lang.ProcessHandle>
      info(): java.lang.ProcessHandle$Info
      onExit(): java.util.concurrent.CompletableFuture<java.lang.ProcessHandle>
      supportsNormalTermination(): boolean
      destroy(): boolean
      destroyForcibly(): boolean
      isAlive(): boolean
      hashCode(): number
      equals(arg0: java.lang.Object | any): boolean
      compareTo(arg0: java.lang.ProcessHandle): number
      compareTo?(arg0: java.lang.Object | any): number
    }
  }
}
