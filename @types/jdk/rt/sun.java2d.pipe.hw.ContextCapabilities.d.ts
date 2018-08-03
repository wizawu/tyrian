declare namespace sun {
    namespace java2d {
        namespace pipe {
            namespace hw {
                class ContextCapabilities {
                    public static readonly CAPS_EMPTY: int
                    public static readonly CAPS_RT_PLAIN_ALPHA: int
                    public static readonly CAPS_RT_TEXTURE_ALPHA: int
                    public static readonly CAPS_RT_TEXTURE_OPAQUE: int
                    public static readonly CAPS_MULTITEXTURE: int
                    public static readonly CAPS_TEXNONPOW2: int
                    public static readonly CAPS_TEXNONSQUARE: int
                    public static readonly CAPS_PS20: int
                    public static readonly CAPS_PS30: int
                    protected static readonly FIRST_PRIVATE_CAP: int
                    protected readonly caps: int
                    protected readonly adapterId: string
                    protected constructor(arg0: int, arg1: java.lang.String | string)
                    public getAdapterId(): string
                    public getCaps(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}