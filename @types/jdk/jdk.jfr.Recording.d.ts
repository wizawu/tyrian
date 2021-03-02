declare namespace jdk {
  namespace jfr {

    class Recording implements java.io.Closeable {
      public constructor(arg0: java.util.Map<java.lang.String,java.lang.String>)
      public constructor()
      public constructor(arg0: jdk.jfr.Configuration)
      public start(): void
      public scheduleStart(arg0: java.time.Duration): void
      public stop(): boolean
      public getSettings(): java.util.Map<java.lang.String,java.lang.String>
      public getSize(): long
      public getStopTime(): java.time.Instant
      public getStartTime(): java.time.Instant
      public getMaxSize(): long
      public getMaxAge(): java.time.Duration
      public getName(): java.lang.String
      public setSettings(arg0: java.util.Map<java.lang.String,java.lang.String>): void
      public getState(): jdk.jfr.RecordingState
      public close(): void
      public copy(arg0: boolean): jdk.jfr.Recording
      public dump(arg0: java.nio.file.Path): void
      public isToDisk(): boolean
      public setMaxSize(arg0: long): void
      public setMaxAge(arg0: java.time.Duration): void
      public setDestination(arg0: java.nio.file.Path): void
      public getDestination(): java.nio.file.Path
      public getId(): long
      public setName(arg0: java.lang.String): void
      public setDumpOnExit(arg0: boolean): void
      public getDumpOnExit(): boolean
      public setToDisk(arg0: boolean): void
      public getStream(arg0: java.time.Instant, arg1: java.time.Instant): java.io.InputStream
      public getDuration(): java.time.Duration
      public setDuration(arg0: java.time.Duration): void
      public enable(arg0: java.lang.String): jdk.jfr.EventSettings
      public disable(arg0: java.lang.String): jdk.jfr.EventSettings
      public enable(arg0: java.lang.Class<jdk.jfr.Event>): jdk.jfr.EventSettings
      public disable(arg0: java.lang.Class<jdk.jfr.Event>): jdk.jfr.EventSettings
      getInternal(): jdk.jfr.internal.PlatformRecording
    }

  }
}
