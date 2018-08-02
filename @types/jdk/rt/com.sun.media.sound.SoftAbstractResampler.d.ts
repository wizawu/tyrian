declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class SoftAbstractResampler implements com.sun.media.sound.SoftResampler {
                    public constructor()
                    public getPadding(): int
                    public interpolate(arg0: float[], arg1: float[], arg2: float, arg3: float[], arg4: float, arg5: float[], arg6: int[], arg7: int): void
                    public openStreamer(): com.sun.media.sound.SoftResamplerStreamer
                    public static class: java.lang.Class<any>
                }
                abstract class SoftAbstractResampler$$Lambda implements com.sun.media.sound.SoftResampler {
                    public constructor()
                }
            }
        }
    }
}