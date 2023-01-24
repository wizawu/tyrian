declare namespace javax {
  namespace sound {
    namespace midi {
      namespace spi {
        abstract class SoundbankReader {
          public constructor()
          public abstract getSoundbank(arg0: java.net.URL): javax.sound.midi.Soundbank
          public abstract getSoundbank(arg0: java.io.InputStream): javax.sound.midi.Soundbank
          public abstract getSoundbank(arg0: java.io.File): javax.sound.midi.Soundbank
        }
      }
    }
  }
}
