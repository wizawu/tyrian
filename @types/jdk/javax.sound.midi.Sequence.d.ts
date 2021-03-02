declare namespace javax {
  namespace sound {
    namespace midi {

      class Sequence {
        public static readonly PPQ: float
        public static readonly SMPTE_24: float
        public static readonly SMPTE_25: float
        public static readonly SMPTE_30DROP: float
        public static readonly SMPTE_30: float
        protected divisionType: float
        protected resolution: int
        protected tracks: java.util.Vector<javax.sound.midi.Track>
        public constructor(arg0: number | java.lang.Float, arg1: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Float, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public getDivisionType(): number
        public getResolution(): number
        public createTrack(): javax.sound.midi.Track
        public deleteTrack(arg0: javax.sound.midi.Track): boolean
        public getTracks(): javax.sound.midi.Track[]
        public getMicrosecondLength(): number
        public getTickLength(): number
        public getPatchList(): javax.sound.midi.Patch[]
      }

    }
  }
}
