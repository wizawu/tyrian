declare namespace jdk {
  namespace management {
    namespace jfr {

      interface FlightRecorderMXBean extends java.lang.management.PlatformManagedObject {
        public static readonly MXBEAN_NAME: java.lang.String
        newRecording(): number
        takeSnapshot(): number
        cloneRecording(arg0: number | java.lang.Long, arg1: boolean | java.lang.Boolean): number
        startRecording(arg0: number | java.lang.Long): void
        stopRecording(arg0: number | java.lang.Long): boolean
        closeRecording(arg0: number | java.lang.Long): void
        openStream(arg0: number | java.lang.Long, arg1: java.util.Map<java.lang.String,java.lang.String>): number
        closeStream(arg0: number | java.lang.Long): void
        readStream(arg0: number | java.lang.Long): number[]
        getRecordingOptions(arg0: number | java.lang.Long): java.util.Map<java.lang.String,java.lang.String>
        getRecordingSettings(arg0: number | java.lang.Long): java.util.Map<java.lang.String,java.lang.String>
        setConfiguration(arg0: number | java.lang.Long, arg1: java.lang.String | string): void
        setPredefinedConfiguration(arg0: number | java.lang.Long, arg1: java.lang.String | string): void
        setRecordingSettings(arg0: number | java.lang.Long, arg1: java.util.Map<java.lang.String,java.lang.String>): void
        setRecordingOptions(arg0: number | java.lang.Long, arg1: java.util.Map<java.lang.String,java.lang.String>): void
        getRecordings(): java.util.List<jdk.management.jfr.RecordingInfo>
        getConfigurations(): java.util.List<jdk.management.jfr.ConfigurationInfo>
        getEventTypes(): java.util.List<jdk.management.jfr.EventTypeInfo>
        copyTo(arg0: number | java.lang.Long, arg1: java.lang.String | string): void
      }

    }
  }
}
