declare namespace java {
  namespace awt {
    class RenderingHints implements java.util.Map<java.lang.Object, java.lang.Object>, java.lang.Cloneable {
      hintmap: java.util.HashMap<java.lang.Object, java.lang.Object>
      public static readonly KEY_ANTIALIASING: java.awt.RenderingHints$Key
      public static readonly VALUE_ANTIALIAS_ON: java.lang.Object
      public static readonly VALUE_ANTIALIAS_OFF: java.lang.Object
      public static readonly VALUE_ANTIALIAS_DEFAULT: java.lang.Object
      public static readonly KEY_RENDERING: java.awt.RenderingHints$Key
      public static readonly VALUE_RENDER_SPEED: java.lang.Object
      public static readonly VALUE_RENDER_QUALITY: java.lang.Object
      public static readonly VALUE_RENDER_DEFAULT: java.lang.Object
      public static readonly KEY_DITHERING: java.awt.RenderingHints$Key
      public static readonly VALUE_DITHER_DISABLE: java.lang.Object
      public static readonly VALUE_DITHER_ENABLE: java.lang.Object
      public static readonly VALUE_DITHER_DEFAULT: java.lang.Object
      public static readonly KEY_TEXT_ANTIALIASING: java.awt.RenderingHints$Key
      public static readonly VALUE_TEXT_ANTIALIAS_ON: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_OFF: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_DEFAULT: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_GASP: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_LCD_HRGB: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_LCD_HBGR: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_LCD_VRGB: java.lang.Object
      public static readonly VALUE_TEXT_ANTIALIAS_LCD_VBGR: java.lang.Object
      public static readonly KEY_TEXT_LCD_CONTRAST: java.awt.RenderingHints$Key
      public static readonly KEY_FRACTIONALMETRICS: java.awt.RenderingHints$Key
      public static readonly VALUE_FRACTIONALMETRICS_OFF: java.lang.Object
      public static readonly VALUE_FRACTIONALMETRICS_ON: java.lang.Object
      public static readonly VALUE_FRACTIONALMETRICS_DEFAULT: java.lang.Object
      public static readonly KEY_INTERPOLATION: java.awt.RenderingHints$Key
      public static readonly VALUE_INTERPOLATION_NEAREST_NEIGHBOR: java.lang.Object
      public static readonly VALUE_INTERPOLATION_BILINEAR: java.lang.Object
      public static readonly VALUE_INTERPOLATION_BICUBIC: java.lang.Object
      public static readonly KEY_ALPHA_INTERPOLATION: java.awt.RenderingHints$Key
      public static readonly VALUE_ALPHA_INTERPOLATION_SPEED: java.lang.Object
      public static readonly VALUE_ALPHA_INTERPOLATION_QUALITY: java.lang.Object
      public static readonly VALUE_ALPHA_INTERPOLATION_DEFAULT: java.lang.Object
      public static readonly KEY_COLOR_RENDERING: java.awt.RenderingHints$Key
      public static readonly VALUE_COLOR_RENDER_SPEED: java.lang.Object
      public static readonly VALUE_COLOR_RENDER_QUALITY: java.lang.Object
      public static readonly VALUE_COLOR_RENDER_DEFAULT: java.lang.Object
      public static readonly KEY_STROKE_CONTROL: java.awt.RenderingHints$Key
      public static readonly VALUE_STROKE_DEFAULT: java.lang.Object
      public static readonly VALUE_STROKE_NORMALIZE: java.lang.Object
      public static readonly VALUE_STROKE_PURE: java.lang.Object
      public static readonly KEY_RESOLUTION_VARIANT: java.awt.RenderingHints$Key
      public static readonly VALUE_RESOLUTION_VARIANT_DEFAULT: java.lang.Object
      public static readonly VALUE_RESOLUTION_VARIANT_BASE: java.lang.Object
      public static readonly VALUE_RESOLUTION_VARIANT_SIZE_FIT: java.lang.Object
      public static readonly VALUE_RESOLUTION_VARIANT_DPI_FIT: java.lang.Object
      public constructor(arg0: java.util.Map<java.awt.RenderingHints$Key, unknown>)
      public constructor(arg0: java.awt.RenderingHints$Key, arg1: java.lang.Object | any)
      public size(): number
      public isEmpty(): boolean
      public containsKey(arg0: java.lang.Object | any): boolean
      public containsValue(arg0: java.lang.Object | any): boolean
      public get(arg0: java.lang.Object | any): java.lang.Object
      public put(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.Object
      public add(arg0: java.awt.RenderingHints): void
      public clear(): void
      public remove(arg0: java.lang.Object | any): java.lang.Object
      public putAll(arg0: java.util.Map<unknown, unknown>): void
      public keySet(): java.util.Set<java.lang.Object>
      public values(): java.util.Collection<java.lang.Object>
      public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public clone(): java.lang.Object
      public toString(): java.lang.String
    }
  }
}
