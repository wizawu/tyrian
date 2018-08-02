declare namespace java {
    namespace awt {
        namespace image {
            namespace renderable {
                class ParameterBlock implements java.lang.Cloneable , java.io.Serializable {
                    protected sources: java.util.Vector<java.lang.Object>
                    protected parameters: java.util.Vector<java.lang.Object>
                    public constructor()
                    public constructor(arg0: java.util.Vector<java.lang.Object>)
                    public constructor(arg0: java.util.Vector<java.lang.Object>, arg1: java.util.Vector<java.lang.Object>)
                    public shallowClone(): java.lang.Object
                    public clone(): java.lang.Object
                    public addSource(arg0: java.lang.Object): java.awt.image.renderable.ParameterBlock
                    public getSource(arg0: int): java.lang.Object
                    public setSource(arg0: java.lang.Object, arg1: int): java.awt.image.renderable.ParameterBlock
                    public getRenderedSource(arg0: int): java.awt.image.RenderedImage
                    public getRenderableSource(arg0: int): java.awt.image.renderable.RenderableImage
                    public getNumSources(): int
                    public getSources(): java.util.Vector<java.lang.Object>
                    public setSources(arg0: java.util.Vector<java.lang.Object>): void
                    public removeSources(): void
                    public getNumParameters(): int
                    public getParameters(): java.util.Vector<java.lang.Object>
                    public setParameters(arg0: java.util.Vector<java.lang.Object>): void
                    public removeParameters(): void
                    public add(arg0: java.lang.Object): java.awt.image.renderable.ParameterBlock
                    public add(arg0: byte): java.awt.image.renderable.ParameterBlock
                    public add(arg0: char): java.awt.image.renderable.ParameterBlock
                    public add(arg0: short): java.awt.image.renderable.ParameterBlock
                    public add(arg0: int): java.awt.image.renderable.ParameterBlock
                    public add(arg0: long): java.awt.image.renderable.ParameterBlock
                    public add(arg0: float): java.awt.image.renderable.ParameterBlock
                    public add(arg0: double): java.awt.image.renderable.ParameterBlock
                    public set(arg0: java.lang.Object, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: byte, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: char, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: short, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: int, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: long, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: float, arg1: int): java.awt.image.renderable.ParameterBlock
                    public set(arg0: double, arg1: int): java.awt.image.renderable.ParameterBlock
                    public getObjectParameter(arg0: int): java.lang.Object
                    public getByteParameter(arg0: int): byte
                    public getCharParameter(arg0: int): char
                    public getShortParameter(arg0: int): short
                    public getIntParameter(arg0: int): int
                    public getLongParameter(arg0: int): long
                    public getFloatParameter(arg0: int): float
                    public getDoubleParameter(arg0: int): double
                    public getParamClasses(): java.lang.Class[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}