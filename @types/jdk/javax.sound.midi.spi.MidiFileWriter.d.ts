declare namespace javax {
  namespace sound {
    namespace midi {
      namespace spi {

        abstract class MidiFileWriter {
          public constructor()
          public abstract getMidiFileTypes(): number[]
          public abstract getMidiFileTypes(arg0: javax.sound.midi.Sequence): number[]
          public isFileTypeSupported(arg0: number | java.lang.Integer): boolean
          public isFileTypeSupported(arg0: number | java.lang.Integer, arg1: javax.sound.midi.Sequence): boolean
          public abstract write(arg0: javax.sound.midi.Sequence, arg1: number | java.lang.Integer, arg2: java.io.OutputStream): number
          public abstract write(arg0: javax.sound.midi.Sequence, arg1: number | java.lang.Integer, arg2: java.io.File): number
        }

      }
    }
  }
}
