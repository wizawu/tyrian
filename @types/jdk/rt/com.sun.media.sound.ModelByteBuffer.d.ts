declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class ModelByteBuffer {
                    public constructor(arg0: byte[])
                    public constructor(arg0: byte[], arg1: int, arg2: int)
                    public constructor(arg0: java.io.File)
                    public constructor(arg0: java.io.File, arg1: long, arg2: long)
                    public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public getInputStream(): java.io.InputStream
                    public subbuffer(arg0: long): com.sun.media.sound.ModelByteBuffer
                    public subbuffer(arg0: long, arg1: long): com.sun.media.sound.ModelByteBuffer
                    public subbuffer(arg0: long, arg1: long, arg2: boolean): com.sun.media.sound.ModelByteBuffer
                    public array(): byte[]
                    public arrayOffset(): long
                    public capacity(): long
                    public getRoot(): com.sun.media.sound.ModelByteBuffer
                    public getFile(): java.io.File
                    public getFilePointer(): long
                    public static loadAll(arg0: java.util.Collection<com.sun.media.sound.ModelByteBuffer>): void
                    public load(): void
                    public unload(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}