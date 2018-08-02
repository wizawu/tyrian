declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class DirectAudioDevice$DirectDL extends com.sun.media.sound.AbstractDataLine implements com.sun.media.sound.EventDispatcher$LineMonitor {
                    protected mixerIndex: int
                    protected deviceID: int
                    protected id: long
                    protected waitTime: int
                    protected flushing: boolean
                    protected isSource: boolean
                    protected bytePosition: long
                    protected doIO: boolean
                    protected stoppedWritten: boolean
                    protected drained: boolean
                    protected monitoring: boolean
                    protected softwareConversionSize: int
                    protected hardwareFormat: javax.sound.sampled.AudioFormat
                    protected noService: boolean
                    protected lockNative: java.lang.Object
                    protected constructor(arg0: javax.sound.sampled.DataLine$Info, arg1: com.sun.media.sound.DirectAudioDevice, arg2: javax.sound.sampled.AudioFormat, arg3: int, arg4: int, arg5: int, arg6: boolean)
                    public available(): int
                    public drain(): void
                    public flush(): void
                    public getLongFramePosition(): long
                    public write(arg0: byte[], arg1: int, arg2: int): int
                    protected requiresServicing(): boolean
                    public checkLine(): void
                    public static class: java.lang.Class<any>
                }
                class DirectAudioDevice$DirectDL$$Lambda extends com.sun.media.sound.AbstractDataLine implements com.sun.media.sound.EventDispatcher$LineMonitor {
                    protected mixerIndex: int
                }
            }
        }
    }
}