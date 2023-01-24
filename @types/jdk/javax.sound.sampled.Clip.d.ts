declare namespace javax {
  namespace sound {
    namespace sampled {
      interface Clip extends javax.sound.sampled.DataLine {
        readonly LOOP_CONTINUOUSLY: int
        open(
          arg0: javax.sound.sampled.AudioFormat,
          arg1: number[] | java.lang.Byte[],
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): void
        open(arg0: javax.sound.sampled.AudioInputStream): void
        getFrameLength(): number
        getMicrosecondLength(): number
        setFramePosition(arg0: number | java.lang.Integer): void
        setMicrosecondPosition(arg0: number | java.lang.Long): void
        setLoopPoints(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        loop(arg0: number | java.lang.Integer): void
      }
    }
  }
}
