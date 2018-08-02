declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
abstract class AudioFloatConverter {
    public constructor()
    public static getConverter(arg0: javax.sound.sampled.AudioFormat): com.sun.media.sound.AudioFloatConverter
    public getFormat(): javax.sound.sampled.AudioFormat
    public toFloatArray(arg0: byte[], arg1: int, arg2: float[], arg3: int, arg4: int): float[]
    public toFloatArray(arg0: byte[], arg1: float[], arg2: int, arg3: int): float[]
    public toFloatArray(arg0: byte[], arg1: int, arg2: float[], arg3: int): float[]
    public toFloatArray(arg0: byte[], arg1: float[], arg2: int): float[]
    public toFloatArray(arg0: byte[], arg1: float[]): float[]
    public toByteArray(arg0: float[], arg1: int, arg2: int, arg3: byte[], arg4: int): byte[]
    public toByteArray(arg0: float[], arg1: int, arg2: byte[], arg3: int): byte[]
    public toByteArray(arg0: float[], arg1: int, arg2: int, arg3: byte[]): byte[]
    public toByteArray(arg0: float[], arg1: int, arg2: byte[]): byte[]
    public toByteArray(arg0: float[], arg1: byte[]): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}