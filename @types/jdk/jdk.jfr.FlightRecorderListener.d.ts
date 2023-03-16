declare namespace jdk {
  namespace jfr {
    interface FlightRecorderListener {
      recorderInitialized?(arg0: jdk.jfr.FlightRecorder): void
      recordingStateChanged?(arg0: jdk.jfr.Recording): void
    }
  }
}
