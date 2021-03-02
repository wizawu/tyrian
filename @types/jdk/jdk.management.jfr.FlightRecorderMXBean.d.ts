declare namespace jdk {
  namespace management {
    namespace jfr {

      interface FlightRecorderMXBean extends java.lang.management.PlatformManagedObject {
        public static readonly MXBEAN_NAME: java.lang.String
        newRecording(): long
        takeSnapshot(): long
        cloneRecording(arg0: long, arg1: boolean): long
        startRecording(arg0: long): void
        stopRecording(arg0: long): boolean
        closeRecording(arg0: long): void
        openStream(arg0: long, arg1: java.util.Map<java.lang.String,java.lang.String>): long
        closeStream(arg0: long): void
        readStream(arg0: long): byte[]
        getRecordingOptions(arg0: long): java.util.Map<java.lang.String,java.lang.String>
        getRecordingSettings(arg0: long): java.util.Map<java.lang.String,java.lang.String>
        setConfiguration(arg0: long, arg1: java.lang.String): void
        setPredefinedConfiguration(arg0: long, arg1: java.lang.String): void
        setRecordingSettings(arg0: long, arg1: java.util.Map<java.lang.String,java.lang.String>): void
        setRecordingOptions(arg0: long, arg1: java.util.Map<java.lang.String,java.lang.String>): void
        getRecordings(): java.util.List<jdk.management.jfr.RecordingInfo>
        getConfigurations(): java.util.List<jdk.management.jfr.ConfigurationInfo>
        getEventTypes(): java.util.List<jdk.management.jfr.EventTypeInfo>
        copyTo(arg0: long, arg1: java.lang.String): void
      }

    }
  }
}
