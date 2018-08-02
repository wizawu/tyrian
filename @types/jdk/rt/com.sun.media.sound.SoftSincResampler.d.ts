declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftSincResampler extends com.sun.media.sound.SoftAbstractResampler {
                    public constructor()
                    public static sinc(arg0: double): double
                    public static wHanning(arg0: int, arg1: float): float[]
                    public static sincTable(arg0: int, arg1: float, arg2: float): float[]
                    public getPadding(): int
                    public interpolate(arg0: float[], arg1: float[], arg2: float, arg3: float[], arg4: float, arg5: float[], arg6: int[], arg7: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}