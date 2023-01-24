declare namespace jdk {
  namespace management {
    namespace jfr {
      class RecordingInfo {
        constructor(arg0: jdk.jfr.Recording)
        public getName(): java.lang.String
        public getId(): number
        public getDumpOnExit(): boolean
        public getMaxAge(): number
        public getMaxSize(): number
        public getState(): java.lang.String
        public getStartTime(): number
        public getStopTime(): number
        public getSettings(): java.util.Map<java.lang.String, java.lang.String>
        public getDestination(): java.lang.String
        public toString(): java.lang.String
        public getSize(): number
        public isToDisk(): boolean
        public getDuration(): number
        public static from(arg0: javax.management.openmbean.CompositeData): jdk.management.jfr.RecordingInfo
      }
    }
  }
}
