declare namespace javax {
    namespace sound {
        namespace midi {
            namespace spi {
                abstract class SoundbankReader {
                    public constructor()
                    public getSoundbank(arg0: java.net.URL): javax.sound.midi.Soundbank
                    public getSoundbank(arg0: java.io.InputStream): javax.sound.midi.Soundbank
                    public getSoundbank(arg0: java.io.File): javax.sound.midi.Soundbank
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}