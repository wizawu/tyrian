declare namespace javax {
  namespace sound {
    namespace sampled {

      interface SourceDataLine extends javax.sound.sampled.DataLine {
        open(arg0: javax.sound.sampled.AudioFormat, arg1: number | java.lang.Integer): void
        open(arg0: javax.sound.sampled.AudioFormat): void
        write(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      }

    }
  }
}
