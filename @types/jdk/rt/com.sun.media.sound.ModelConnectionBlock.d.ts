declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class ModelConnectionBlock {
    public constructor()
    public constructor(arg0: double, arg1: com.sun.media.sound.ModelDestination)
    public constructor(arg0: com.sun.media.sound.ModelSource, arg1: com.sun.media.sound.ModelDestination)
    public constructor(arg0: com.sun.media.sound.ModelSource, arg1: double, arg2: com.sun.media.sound.ModelDestination)
    public constructor(arg0: com.sun.media.sound.ModelSource, arg1: com.sun.media.sound.ModelSource, arg2: com.sun.media.sound.ModelDestination)
    public constructor(arg0: com.sun.media.sound.ModelSource, arg1: com.sun.media.sound.ModelSource, arg2: double, arg3: com.sun.media.sound.ModelDestination)
    public getDestination(): com.sun.media.sound.ModelDestination
    public setDestination(arg0: com.sun.media.sound.ModelDestination): void
    public getScale(): double
    public setScale(arg0: double): void
    public getSources(): com.sun.media.sound.ModelSource[]
    public setSources(arg0: com.sun.media.sound.ModelSource[]): void
    public addSource(arg0: com.sun.media.sound.ModelSource): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}