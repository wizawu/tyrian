declare namespace org {
    namespace classpath {
        namespace icedtea {
            class Config {
                public static PACKAGE_NAME: string
                public static PACKAGE_VERSION: string
                public static class: java.lang.Class<any>
            }
            namespace pulseaudio {
                class PulseAudioTargetDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.TargetDataLine {
                    public static DEFAULT_TARGETDATALINE_NAME: string
                    public close(): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public drain(): void
                    public flush(): void
                    public available(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public start(): void
                    public stop(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public open(): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioMixerInfo extends javax.sound.sampled.Mixer$Info {
                    protected constructor(arg0: string, arg1: string, arg2: string, arg3: string)
                    public static getInfo(): org.classpath.icedtea.pulseaudio.PulseAudioMixerInfo
                    public static class: java.lang.Class<any>
                }
                interface Stream$MovedListener {
                    update(): void
                }
                interface Stream$MovedListener$$Lambda {
                    (): void
                }
                class Stream$Format extends java.lang.Enum<org.classpath.icedtea.pulseaudio.Stream$Format> {
                    public static PA_SAMPLE_U8: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_ULAW: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_ALAW: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S16LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S16BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_FLOAT32LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_FLOAT32BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S32LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S32BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static values(): org.classpath.icedtea.pulseaudio.Stream$Format[]
                    public static valueOf(arg0: string): org.classpath.icedtea.pulseaudio.Stream$Format
                    public static class: java.lang.Class<any>
                }
                class StreamSampleSpecification {
                    public constructor(arg0: org.classpath.icedtea.pulseaudio.Stream$Format, arg1: int, arg2: int)
                    public constructor(arg0: string, arg1: int, arg2: int)
                    public getFormat(): org.classpath.icedtea.pulseaudio.Stream$Format
                    public getRate(): int
                    public getChannels(): int
                    public static class: java.lang.Class<any>
                }
                class PulseAudioDataLine$2 implements org.classpath.icedtea.pulseaudio.Stream$UnderflowListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                interface Stream$UnderflowListener {
                    update(): void
                }
                interface Stream$UnderflowListener$$Lambda {
                    (): void
                }
                interface Stream$CorkListener {
                    update(): void
                }
                interface Stream$CorkListener$$Lambda {
                    (): void
                }
                class SecurityWrapper {
                    public static class: java.lang.Class<any>
                }
                interface Stream$LatencyUpdateListener {
                    update(): void
                }
                interface Stream$LatencyUpdateListener$$Lambda {
                    (): void
                }
                class PulseAudioClip$1 implements org.classpath.icedtea.pulseaudio.Stream$WriteListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                class Stream {
                    public static STATE_UNCONNECTED: long
                    public static STATE_CREATING: long
                    public static STATE_READY: long
                    public static STATE_FAILED: long
                    public static STATE_TERMINATED: long
                    public static FLAG_NOFLAGS: long
                    public static FLAG_START_CORKED: long
                    public static FLAG_INTERPOLATE_TIMING: long
                    public static FLAG_NOT_MONOTONIC: long
                    public static FLAG_AUTO_TIMING_UPDATE: long
                    public static FLAG_NO_REMAP_CHANNELS: long
                    public static FLAG_NO_REMIX_CHANNELS: long
                    public static FLAG_FIX_FORMAT: long
                    public static FLAG_FIX_RATE: long
                    public static FLAG_FIX_CHANNELS: long
                    public static FLAG_DONT_MOVE: long
                    public static FLAG_VARIABLE_RATE: long
                    public static FLAG_PEAK_DETECT: long
                    public static FLAG_START_MUTED: long
                    public static FLAG_ADJUST_LATENCY: long
                    public static FLAG_EARLY_REQUESTS: long
                    public static FLAG_DONT_INHIBIT_AUTO_SUSPEND: long
                    public static FLAG_START_UNMUTED: long
                    public static FLAG_FAIL_ON_SUSPEND: long
                    public static DEFAULT_DEVICE: string
                    public static checkNativeStreamState(arg0: long): long
                    public bytesInBuffer(): int
                    public static class: java.lang.Class<any>
                }
                class Debug {
                    public static class: java.lang.Class<any>
                }
                class PulseAudioDataLine$1 implements org.classpath.icedtea.pulseaudio.Stream$StateListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioTargetPort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public static class: java.lang.Class<any>
                }
                interface Stream$StateListener {
                    update(): void
                }
                interface Stream$StateListener$$Lambda {
                    (): void
                }
                interface ContextListener {
                    update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                interface ContextListener$$Lambda {
                    (arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                interface Stream$UpdateTimingInfoListener {
                    update(): void
                }
                interface Stream$UpdateTimingInfoListener$$Lambda {
                    (): void
                }
                interface Stream$ReadListener {
                    update(): void
                }
                interface Stream$ReadListener$$Lambda {
                    (): void
                }
                class PulseAudioSourceDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.SourceDataLine , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_SOURCEDATALINE_NAME: string
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public write(arg0: byte[], arg1: int, arg2: int): int
                    public available(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public drain(): void
                    public flush(): void
                    public close(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public stop(): void
                    public start(): void
                    public open(): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
                interface Stream$SuspendedListener {
                    update(): void
                }
                interface Stream$SuspendedListener$$Lambda {
                    (): void
                }
                class StreamBufferAttributes {
                    public static SANE_DEFAULT: int
                    public static MAX_VALUE: int
                    public static MIN_VALUE: int
                    public static class: java.lang.Class<any>
                }
                class PulseAudioSourcePort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public static class: java.lang.Class<any>
                }
                class PulseAudioClip$ClipThread extends java.lang.Thread {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                abstract class PulseAudioLine implements javax.sound.sampled.Line {
                    protected lineListeners: java.util.List<javax.sound.sampled.LineListener>
                    protected controls: java.util.List<javax.sound.sampled.Control>
                    protected isOpen: boolean
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    protected fireLineEvent(arg0: javax.sound.sampled.LineEvent): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
                interface Stream$PlaybackStartedListener {
                    update(): void
                }
                interface Stream$PlaybackStartedListener$$Lambda {
                    (): void
                }
                class PulseAudioDataLine$4 implements org.classpath.icedtea.pulseaudio.Stream$WriteListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                class Debug$DebugLevel extends java.lang.Enum<org.classpath.icedtea.pulseaudio.Debug$DebugLevel> {
                    public static Verbose: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Debug: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Info: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Warning: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Error: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static None: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static values(): org.classpath.icedtea.pulseaudio.Debug$DebugLevel[]
                    public static valueOf(arg0: string): org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static class: java.lang.Class<any>
                }
                class PulseAudioClip extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.Clip , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_CLIP_NAME: string
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public available(): int
                    public close(): void
                    public drain(): void
                    public flush(): void
                    public getFrameLength(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondLength(): long
                    public getMicrosecondPosition(): long
                    public loop(arg0: int): void
                    public open(): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public open(arg0: javax.sound.sampled.AudioInputStream): void
                    public setFramePosition(arg0: int): void
                    public setLoopPoints(arg0: int, arg1: int): void
                    public setMicrosecondPosition(arg0: long): void
                    public start(): void
                    public stop(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
                interface PulseAudioPlaybackLine {
                    SECONDS_TO_MICROSECONDS: int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    isOpen(): boolean
                }
                class ContextEvent {
                    public static checkNativeEnumReturn(arg0: long): long
                    public constructor(arg0: long)
                    public getType(): long
                    public static class: java.lang.Class<any>
                }
                class PulseAudioMixer$2 implements org.classpath.icedtea.pulseaudio.ContextListener {
                    public update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                    public static class: java.lang.Class<any>
                }
                interface Stream$OverflowListener {
                    update(): void
                }
                interface Stream$OverflowListener$$Lambda {
                    (): void
                }
                class Operation {
                    public static RUNNING: long
                    public static DONE: long
                    public static CANCELLED: long
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioDataLine$3 implements org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioVolumeControl extends javax.sound.sampled.FloatControl {
                    protected constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine, arg1: org.classpath.icedtea.pulseaudio.EventLoop)
                    public setValue(arg0: float): void
                    protected setStreamVolume(arg0: float): void
                    public getValue(): float
                    public static class: java.lang.Class<any>
                }
                interface Stream$WriteListener {
                    update(): void
                }
                interface Stream$WriteListener$$Lambda {
                    (): void
                }
                class SecurityWrapper$1 implements java.security.PrivilegedAction<java.lang.Boolean> {
                    public run(): boolean
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PulseAudioMixer implements javax.sound.sampled.Mixer {
                    public static getInstance(): org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    public getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
                    public getMaxLines(arg0: javax.sound.sampled.Line$Info): int
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info
                    public getSourceLineInfo(): javax.sound.sampled.Line$Info[]
                    public getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getSourceLines(): javax.sound.sampled.Line[]
                    public getTargetLineInfo(): javax.sound.sampled.Line$Info[]
                    public getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getTargetLines(): javax.sound.sampled.Line[]
                    public isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
                    public isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
                    public synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
                    public unsynchronize(arg0: javax.sound.sampled.Line[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public open(): void
                    public openLocal(): void
                    public openLocal(arg0: string): void
                    public openRemote(arg0: string, arg1: string): void
                    public openRemote(arg0: string, arg1: string, arg2: int): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioDataLine$5 implements org.classpath.icedtea.pulseaudio.Stream$CorkListener {
                    public update(): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioMixerProvider extends javax.sound.sampled.spi.MixerProvider {
                    public constructor()
                    public getMixer(arg0: javax.sound.sampled.Mixer$Info): javax.sound.sampled.Mixer
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info[]
                    public static class: java.lang.Class<any>
                }
                class EventLoop implements java.lang.Runnable {
                    public run(): void
                    protected updateSourcePortNameList(): java.util.List<java.lang.String>
                    public source_callback(arg0: string): void
                    public sink_callback(arg0: string): void
                    public static class: java.lang.Class<any>
                }
                class PulseAudioMixer$1 implements org.classpath.icedtea.pulseaudio.ContextListener {
                    public update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                    public static class: java.lang.Class<any>
                }
                abstract class PulseAudioPort extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.Port , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public close(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public open(): void
                    public getName(): string
                    public static class: java.lang.Class<any>
                }
                abstract class PulseAudioDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.DataLine {
                    protected static DEFAULT_BUFFER_SIZE: int
                    protected streamName: string
                    protected isStarted: boolean
                    protected dataWritten: boolean
                    protected supportedFormats: javax.sound.sampled.AudioFormat[]
                    protected currentFormat: javax.sound.sampled.AudioFormat
                    protected defaultFormat: javax.sound.sampled.AudioFormat
                    protected sendEvents: boolean
                    protected framesSinceOpen: long
                    protected eventLoop: org.classpath.icedtea.pulseaudio.EventLoop
                    protected semaphore: java.util.concurrent.Semaphore
                    protected stream: org.classpath.icedtea.pulseaudio.Stream
                    protected open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    protected open(arg0: javax.sound.sampled.AudioFormat): void
                    public open(): void
                    public close(): void
                    public start(): void
                    public stop(): void
                    public isActive(): boolean
                    public isRunning(): boolean
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public getBufferSize(): int
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getLevel(): float
                    public setName(arg0: string): void
                    public getName(): string
                    public getBytesInBuffer(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
