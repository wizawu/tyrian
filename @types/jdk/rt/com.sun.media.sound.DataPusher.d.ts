declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class DataPusher implements java.lang.Runnable {
                    public constructor(arg0: javax.sound.sampled.SourceDataLine, arg1: javax.sound.sampled.AudioFormat, arg2: byte[], arg3: int)
                    public constructor(arg0: javax.sound.sampled.SourceDataLine, arg1: javax.sound.sampled.AudioInputStream)
                    public start(): void
                    public start(arg0: boolean): void
                    public stop(): void
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class DataPusher$$Lambda implements java.lang.Runnable {
                    public constructor(arg0: javax.sound.sampled.SourceDataLine, arg1: javax.sound.sampled.AudioFormat, arg2: byte[], arg3: int)
                }
            }
        }
    }
}