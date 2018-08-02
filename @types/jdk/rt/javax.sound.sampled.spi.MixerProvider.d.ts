declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace spi {
abstract class MixerProvider {
    public constructor()
    public isMixerSupported(arg0: javax.sound.sampled.Mixer$Info): boolean
    public getMixerInfo(): javax.sound.sampled.Mixer$Info[]
    public getMixer(arg0: javax.sound.sampled.Mixer$Info): javax.sound.sampled.Mixer
    public static class: java.lang.Class<any>
}

            }
        }
    }
}