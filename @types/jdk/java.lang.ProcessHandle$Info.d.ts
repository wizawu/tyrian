declare namespace java {
  namespace lang {

    interface ProcessHandle$Info {
      command(): java.util.Optional<java.lang.String>
      commandLine(): java.util.Optional<java.lang.String>
      arguments(): java.util.Optional<java.lang.String[]>
      startInstant(): java.util.Optional<java.time.Instant>
      totalCpuDuration(): java.util.Optional<java.time.Duration>
      user(): java.util.Optional<java.lang.String>
    }

  }
}
