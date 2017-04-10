declare namespace org {
    namespace classpath {
        namespace icedtea {
            class Config {
                public static PACKAGE_NAME: string
                public static PACKAGE_VERSION: string
            }
            namespace pulseaudio {
                class SecurityWrapper {
                    constructor()
                    static loadNativeLibrary(): void
                }
                class PulseAudioTargetPort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    constructor(arg0: string)
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): any
                }
                class PulseAudioTargetDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.TargetDataLine {
                    public static DEFAULT_TARGETDATALINE_NAME: string
                    static $assertionsDisabled: boolean
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
                    public close(): void
                    open<T>(...args: any[]): any
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
                    public getLineInfo(): any
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
                    public isControlSupported(arg0: any): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: any): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                }
                class PulseAudioSourcePort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    constructor(arg0: string)
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): any
                }
                class PulseAudioSourceDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.SourceDataLine , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_SOURCEDATALINE_NAME: string
                    static $assertionsDisabled: boolean
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
                    open<T>(...args: any[]): any
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
                    public getLineInfo(): any
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
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: any): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: any): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                }
                class PulseAudioVolumeControl extends javax.sound.sampled.FloatControl {
                    static MAX_VOLUME: int
                    static MIN_VOLUME: int
                    protected constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine, arg1: org.classpath.icedtea.pulseaudio.EventLoop)
                    public setValue(arg0: float): void
                    protected setStreamVolume(arg0: float): void
                    public getValue(): float
                }
                abstract class PulseAudioPort extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.Port , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    constructor(arg0: string)
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    update_channels_and_volume(arg0: int, arg1: float): void
                    public close(): void
                    public getLineInfo(): any
                    public open(): void
                    public getName(): string
                }
                class PulseAudioMixerProvider extends javax.sound.sampled.spi.MixerProvider {
                    public constructor()
                    public getMixer(arg0: any): javax.sound.sampled.Mixer
                    public getMixerInfo(): any
                }
                class PulseAudioMixerInfo extends javax.sound.sampled.Mixer$Info {
                    protected constructor(arg0: string, arg1: string, arg2: string, arg3: string)
                    public static getInfo(): org.classpath.icedtea.pulseaudio.PulseAudioMixerInfo
                }
                class PulseAudioMixer implements javax.sound.sampled.Mixer {
                    static PULSEAUDIO_FORMAT_KEY: string
                    public static getInstance(): org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    public getLine(arg0: any): javax.sound.sampled.Line
                    public getMaxLines(arg0: any): int
                    public getMixerInfo(): any
                    getSourceLineInfo<T>(...args: any[]): any
                    public getSourceLines(): javax.sound.sampled.Line[]
                    getTargetLineInfo<T>(...args: any[]): any
                    public getTargetLines(): javax.sound.sampled.Line[]
                    public isLineSupported(arg0: any): boolean
                    public isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
                    public synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
                    public unsynchronize(arg0: javax.sound.sampled.Line[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    public getControl(arg0: any): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public getLineInfo(): any
                    public isControlSupported(arg0: any): boolean
                    public isOpen(): boolean
                    public open(): void
                    openLocal<T>(...args: any[]): any
                    openRemote<T>(...args: any[]): any
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    addSourceLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    removeSourceLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    addTargetLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    removeTargetLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    refreshSourceAndTargetLines(): void
                    static access$000(arg0: org.classpath.icedtea.pulseaudio.PulseAudioMixer, arg1: javax.sound.sampled.LineEvent): void
                }
                class StreamSampleSpecification {
                    constructor(...args: any[])
                    public getFormat(): any
                    public getRate(): int
                    public getChannels(): int
                }
                class StreamBufferAttributes {
                    public static SANE_DEFAULT: int
                    public static MAX_VALUE: int
                    public static MIN_VALUE: int
                    constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
                    getMaxLength(): int
                    getTargetLength(): int
                    getPreBuffering(): int
                    getMinimumRequest(): int
                    getFragmentSize(): int
                }
                interface PulseAudioPlaybackLine {
                    SECONDS_TO_MICROSECONDS: int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    isOpen(): boolean
                }
                abstract class PulseAudioLine implements javax.sound.sampled.Line {
                    protected lineListeners: java.util.List<javax.sound.sampled.LineListener>
                    protected controls: java.util.List<javax.sound.sampled.Control>
                    isOpen<T>(...args: any[]): any
                    constructor()
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    protected fireLineEvent(arg0: javax.sound.sampled.LineEvent): void
                    public getControl(arg0: any): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: any): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
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
                    writeInterrupted: boolean
                    static $assertionsDisabled: boolean
                    constructor()
                    open<T>(...args: any[]): any
                    public close(): void
                    reconnectforSynchronization(arg0: org.classpath.icedtea.pulseaudio.Stream): void
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
                }
                class PulseAudioClip extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.Clip , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_CLIP_NAME: string
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
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
                    open<T>(...args: any[]): any
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public setFramePosition(arg0: int): void
                    public setLoopPoints(arg0: int, arg1: int): void
                    public setMicrosecondPosition(arg0: long): void
                    public start(): void
                    public stop(): void
                    public getLineInfo(): any
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
                    public isControlSupported(arg0: any): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: any): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    static access$000(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$100(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$200(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip, arg1: int, arg2: int): void
                    static access$300(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$400(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): java.lang.Object
                    static access$002(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip, arg1: int): int
                    static access$500(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$310(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
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
                    static $assertionsDisabled: boolean
                    public static checkNativeStreamState(arg0: long): long
                    public bytesInBuffer(): int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    constructor(arg0: byte[], arg1: string, arg2: any, arg3: int, arg4: int)
                    addStateListener(arg0: any): void
                    removeStateListener(arg0: any): void
                    addWriteListener(arg0: any): void
                    removeWriteListener(arg0: any): void
                    addReadListener(arg0: any): void
                    removeReadListener(arg0: any): void
                    addOverflowListener(arg0: any): void
                    removeOverflowListener(arg0: any): void
                    addUnderflowListener(arg0: any): void
                    removeUnderflowListener(arg0: any): void
                    addCorkListener(arg0: any): void
                    removeCorkListener(arg0: any): void
                    addPlaybackStartedListener(arg0: any): void
                    removePlaybackStartedListener(arg0: any): void
                    addLatencyUpdateListener(arg0: any): void
                    removeLatencyUpdateListener(arg0: any): void
                    addMovedListener(arg0: any): void
                    removeMovedListener(arg0: any): void
                    addSuspendedListener(arg0: any): void
                    removeSuspendedListener(arg0: any): void
                    getState(): long
                    getContextPointer(): byte[]
                    getSinkInputIndex(): int
                    getDeviceIndex(): int
                    getBufferSize(): int
                    getDeviceName(): string
                    isSuspended(): boolean
                    connectForPlayback(arg0: string, arg1: org.classpath.icedtea.pulseaudio.StreamBufferAttributes, arg2: byte[]): void
                    connectForRecording(arg0: string, arg1: long, arg2: org.classpath.icedtea.pulseaudio.StreamBufferAttributes): void
                    disconnect(): void
                    write(arg0: byte[], arg1: int, arg2: int): int
                    peek(): byte[]
                    drop(): void
                    getWritableSize(): int
                    getReableSize(): int
                    drain(): org.classpath.icedtea.pulseaudio.Operation
                    updateTimingInfo(): org.classpath.icedtea.pulseaudio.Operation
                    isCorked(): boolean
                    cork<T>(...args: any[]): any
                    unCork(): org.classpath.icedtea.pulseaudio.Operation
                    flush(): org.classpath.icedtea.pulseaudio.Operation
                    triggerStart(): org.classpath.icedtea.pulseaudio.Operation
                    setName(arg0: string): org.classpath.icedtea.pulseaudio.Operation
                    getTime(): long
                    getLatency(): long
                    getFormat(): any
                    getBufferAttributes(): org.classpath.icedtea.pulseaudio.StreamBufferAttributes
                    setBufferAtrributes(arg0: org.classpath.icedtea.pulseaudio.StreamBufferAttributes): org.classpath.icedtea.pulseaudio.Operation
                    updateSampleRate(arg0: int): org.classpath.icedtea.pulseaudio.Operation
                    getStreamPointer(): byte[]
                    free(): void
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    update_channels_and_volume(arg0: int, arg1: float): void
                }
                class Operation {
                    public static RUNNING: long
                    public static DONE: long
                    public static CANCELLED: long
                    static $assertionsDisabled: boolean
                    constructor(arg0: byte[])
                    protected finalize(): void
                    addReference(): void
                    releaseReference(): void
                    isNull(): boolean
                    getState(): long
                    waitForCompletion(): void
                }
                class EventLoop implements java.lang.Runnable {
                    threadLock: java.lang.Object
                    static $assertionsDisabled: boolean
                    static getEventLoop(): org.classpath.icedtea.pulseaudio.EventLoop
                    setAppName(arg0: string): void
                    setServer(arg0: string): void
                    public run(): void
                    addContextListener(arg0: org.classpath.icedtea.pulseaudio.ContextListener): void
                    removeContextListener(arg0: org.classpath.icedtea.pulseaudio.ContextListener): void
                    getStatus(): long
                    update(arg0: long): void
                    getContextPointer(): byte[]
                    getMainLoopPointer(): byte[]
                    updateTargetPortNameList(): java.util.List<java.lang.String>
                    protected updateSourcePortNameList(): java.util.List<java.lang.String>
                    public source_callback(arg0: string): void
                    public sink_callback(arg0: string): void
                }
                class Debug {
                    constructor()
                    static println<T>(...args: any[]): any
                    static print(arg0: any, arg1: string): void
                }
                interface ContextListener {
                    update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                class ContextEvent {
                    static UNCONNECTED: long
                    static CONNECTING: long
                    static AUTHORIZING: long
                    static SETTING_NAME: long
                    static READY: long
                    static FAILED: long
                    static TERMINATED: long
                    public static checkNativeEnumReturn(arg0: long): long
                    public constructor(arg0: long)
                    public getType(): long
                }
                
            }
            
        }
        
    }
    
}
