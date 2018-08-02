declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class ModelPerformer {
                    public constructor()
                    public getName(): string
                    public setName(arg0: java.lang.String | string): void
                    public getConnectionBlocks(): java.util.List<com.sun.media.sound.ModelConnectionBlock>
                    public setConnectionBlocks(arg0: java.util.List<com.sun.media.sound.ModelConnectionBlock>): void
                    public getOscillators(): java.util.List<com.sun.media.sound.ModelOscillator>
                    public getExclusiveClass(): int
                    public setExclusiveClass(arg0: int): void
                    public isSelfNonExclusive(): boolean
                    public setSelfNonExclusive(arg0: boolean): void
                    public getKeyFrom(): int
                    public setKeyFrom(arg0: int): void
                    public getKeyTo(): int
                    public setKeyTo(arg0: int): void
                    public getVelFrom(): int
                    public setVelFrom(arg0: int): void
                    public getVelTo(): int
                    public setVelTo(arg0: int): void
                    public isReleaseTriggered(): boolean
                    public setReleaseTriggered(arg0: boolean): void
                    public getUserObject(): java.lang.Object
                    public setUserObject(arg0: java.lang.Object): void
                    public isDefaultConnectionsEnabled(): boolean
                    public setDefaultConnectionsEnabled(arg0: boolean): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}