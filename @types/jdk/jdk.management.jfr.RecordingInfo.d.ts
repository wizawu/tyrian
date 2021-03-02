declare namespace jdk {
  namespace management {
    namespace jfr {

      class RecordingInfo {
        constructor(arg0: jdk.jfr.Recording)
        public getName(): java.lang.String
        public getId(): long
        public getDumpOnExit(): boolean
        public getMaxAge(): long
        public getMaxSize(): long
        public getState(): java.lang.String
        public getStartTime(): long
        public getStopTime(): long
        public getSettings(): java.util.Map<java.lang.String,java.lang.String>
        public getDestination(): java.lang.String
        public toString(): java.lang.String
        public getSize(): long
        public isToDisk(): boolean
        public getDuration(): long
        public static from(arg0: javax.management.openmbean.CompositeData): jdk.management.jfr.RecordingInfo
      }

    }
  }
}
