declare namespace java {
  namespace awt {
    namespace image {
      namespace renderable {

        class ParameterBlock implements java.lang.Cloneable, java.io.Serializable {
          protected sources: java.util.Vector<java.lang.Object>
          protected parameters: java.util.Vector<java.lang.Object>
          public constructor()
          public constructor(arg0: java.util.Vector<java.lang.Object>)
          public constructor(arg0: java.util.Vector<java.lang.Object>, arg1: java.util.Vector<java.lang.Object>)
          public shallowClone(): java.lang.Object
          public clone(): java.lang.Object
          public addSource(arg0: java.lang.Object | any): java.awt.image.renderable.ParameterBlock
          public getSource(arg0: number | java.lang.Integer): java.lang.Object
          public setSource(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public getRenderedSource(arg0: number | java.lang.Integer): java.awt.image.RenderedImage
          public getRenderableSource(arg0: number | java.lang.Integer): java.awt.image.renderable.RenderableImage
          public getNumSources(): number
          public getSources(): java.util.Vector<java.lang.Object>
          public setSources(arg0: java.util.Vector<java.lang.Object>): void
          public removeSources(): void
          public getNumParameters(): number
          public getParameters(): java.util.Vector<java.lang.Object>
          public setParameters(arg0: java.util.Vector<java.lang.Object>): void
          public removeParameters(): void
          public add(arg0: java.lang.Object | any): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Byte): java.awt.image.renderable.ParameterBlock
          public add(arg0: string | java.lang.Character): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Short): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Long): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Float): java.awt.image.renderable.ParameterBlock
          public add(arg0: number | java.lang.Double): java.awt.image.renderable.ParameterBlock
          public set(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Byte, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: string | java.lang.Character, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Short, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Long, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Float, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public set(arg0: number | java.lang.Double, arg1: number | java.lang.Integer): java.awt.image.renderable.ParameterBlock
          public getObjectParameter(arg0: number | java.lang.Integer): java.lang.Object
          public getByteParameter(arg0: number | java.lang.Integer): number
          public getCharParameter(arg0: number | java.lang.Integer): string
          public getShortParameter(arg0: number | java.lang.Integer): number
          public getIntParameter(arg0: number | java.lang.Integer): number
          public getLongParameter(arg0: number | java.lang.Integer): number
          public getFloatParameter(arg0: number | java.lang.Integer): number
          public getDoubleParameter(arg0: number | java.lang.Integer): number
          public getParamClasses(): java.lang.Class<unknown>[]
        }

      }
    }
  }
}
