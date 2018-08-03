declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class ModelStandardTransform implements com.sun.media.sound.ModelTransform {
                    public static readonly DIRECTION_MIN2MAX: boolean
                    public static readonly DIRECTION_MAX2MIN: boolean
                    public static readonly POLARITY_UNIPOLAR: boolean
                    public static readonly POLARITY_BIPOLAR: boolean
                    public static readonly TRANSFORM_LINEAR: int
                    public static readonly TRANSFORM_CONCAVE: int
                    public static readonly TRANSFORM_CONVEX: int
                    public static readonly TRANSFORM_SWITCH: int
                    public static readonly TRANSFORM_ABSOLUTE: int
                    public constructor()
                    public constructor(arg0: boolean)
                    public constructor(arg0: boolean, arg1: boolean)
                    public constructor(arg0: boolean, arg1: boolean, arg2: int)
                    public transform(arg0: double): double
                    public getDirection(): boolean
                    public setDirection(arg0: boolean): void
                    public getPolarity(): boolean
                    public setPolarity(arg0: boolean): void
                    public getTransform(): int
                    public setTransform(arg0: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}